<template>
  <div class="flex flex-col h-[calc(100vh-140px)] bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm relative">
    
    <!-- Banner error offline -->
    <div v-if="!isOnline" class="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-4 py-3 text-sm flex items-center gap-2 border-b border-amber-200 dark:border-amber-800 z-10 shrink-0">
      <IconWifiOff class="w-5 h-5 shrink-0" />
      <span>Sense connexió. L'IA necessita internet per funcionar. Te'n trobes en mode Offline complet.</span>
    </div>

    <!-- Messages List -->
    <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 relative" ref="chatContainer">
      <div v-if="messages.length === 0" class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-slate-400 m-auto h-max">
        <div class="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <IconBot class="w-8 h-8 text-emerald-500" />
        </div>
        <p class="font-medium text-slate-600 dark:text-slate-300">Sóc el teu assistent de reciclatge.</p>
        <p class="text-sm mt-1">Tens algun dubte sobre com reduir abocaments o a quin cert contenidor va alguna deixalla?</p>
      </div>

      <div 
        v-for="(msg, i) in messages" :key="i"
        class="flex gap-3 max-w-[85%]"
        :class="msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'"
      >
        <!-- Avatar -->
        <div 
          class="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          :class="msg.role === 'user' ? 'bg-emerald-500 text-white' : 'bg-white dark:bg-slate-800 text-emerald-500 shadow-sm border border-slate-100 dark:border-slate-700'"
        >
          <IconUser v-if="msg.role === 'user'" class="w-4 h-4" />
          <IconBot v-else class="w-5 h-5" />
        </div>
        
        <!-- text -->
        <div 
          class="p-3 text-sm rounded-2xl whitespace-pre-wrap"
          :class="msg.role === 'user' ? 'bg-emerald-500 text-white rounded-tr-sm' : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700'"
        >
          {{ msg.content }}
        </div>
      </div>

      <!-- Loading indicator -->
      <div v-if="isLoading" class="self-start flex gap-3 max-w-[85%]">
        <div class="w-8 h-8 rounded-full bg-white dark:bg-slate-800 text-emerald-500 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center shrink-0">
          <IconBot class="w-5 h-5" />
        </div>
        <div class="p-4 bg-white dark:bg-slate-800 rounded-2xl rounded-tl-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 flex gap-1 items-center">
          <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
          <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.15s"></span>
          <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.3s"></span>
        </div>
      </div>
    </div>

    <!-- Input form -->
    <div class="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shrink-0">
      <form @submit.prevent="sendMessage" class="flex items-end gap-2 relative">
        <textarea 
          v-model="inputRaw"
          rows="1"
          placeholder="Com reciclo un mòbil antic?"
          class="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-2xl pl-4 pr-12 py-3 text-sm focus:ring-0 outline-none resize-none max-h-32 text-slate-800 dark:text-slate-100 disabled:opacity-50"
          :disabled="!isOnline || isLoading"
          @keydown.enter.prevent="sendMessage"
        ></textarea>
        <button 
          type="submit" 
          :disabled="!inputRaw.trim() || !isOnline || isLoading"
          class="absolute right-2 bottom-[6px] p-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-xl transition-colors"
        >
          <IconSend class="w-4 h-4" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { WifiOff as IconWifiOff, Bot as IconBot, User as IconUser, Send as IconSend } from 'lucide-vue-next'

const messages = ref<{role: 'user'|'assistant', content: string}[]>([])
const inputRaw = ref('')
const isLoading = ref(false)
const chatContainer = ref<HTMLElement | null>(null)

// PWA Offline logic
const isOnline = ref(true)

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine
}

onMounted(() => {
  updateOnlineStatus()
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
})
onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus)
  window.removeEventListener('offline', updateOnlineStatus)
})

const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  const text = inputRaw.value.trim()
  if (!text || !isOnline.value || isLoading.value) return

  messages.value.push({ role: 'user', content: text })
  inputRaw.value = ''
  isLoading.value = true
  scrollToBottom()

  try {
    const res = await $fetch('/api/chat', {
      method: 'POST',
      body: { message: text }
    })
    messages.value.push({ role: 'assistant', content: (res as any).response })
  } catch (error: any) {
    messages.value.push({ 
      role: 'assistant', 
      content: ("S'ha produït un error de connexió. Assegura't de tenir accés a internet. (Error: " + (error.data?.statusMessage || error.message) + ")") 
    })
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
</script>
