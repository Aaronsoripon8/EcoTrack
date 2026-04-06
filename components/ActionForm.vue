<template>
  <div class="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700">
    <h2 class="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1 flex items-center gap-2">
      <IconPlusCircle class="w-5 h-5 text-emerald-500" />
      Nova Acció Sostenible
    </h2>
    <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 tracking-tight">Escriu breument què has fet avui vers el medi ambient.</p>
    
    <form @submit.prevent="submit" class="flex flex-col gap-3">
      <textarea 
        v-model="actionText" 
        placeholder="Ex: He reciclat 3 envasos de plàstic, o he anat a la feina en bici..."
        class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-shadow resize-none h-24 text-slate-800 dark:text-slate-100"
      ></textarea>
      
      <button 
        type="submit" 
        :disabled="!isValid"
        class="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <IconSave class="w-4 h-4" />
        Registrar Acció (+10 pts)
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { PlusCircle as IconPlusCircle, Save as IconSave } from 'lucide-vue-next'
import { useEcoTrackStore } from '~/stores/ecotrack'

const store = useEcoTrackStore()
const actionText = ref('')

const isValid = computed(() => actionText.value.trim().length > 3)

const submit = () => {
  if (isValid.value) {
    store.addAction(actionText.value.trim(), 10)
    actionText.value = ''
  }
}
</script>
