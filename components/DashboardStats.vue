<template>
  <div class="flex flex-col gap-4">
    <!-- Resum Total -->
    <div class="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl shadow-emerald-500/20 relative overflow-hidden">
      <!-- Decoracions de fons -->
      <div class="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      
      <h3 class="text-emerald-50 font-medium tracking-wide text-sm mb-1">Impacte Total</h3>
      <div class="flex items-baseline gap-2">
        <span class="text-4xl font-extrabold">{{ store.totalPoints }}</span>
        <span class="text-emerald-100 font-medium">punts ecologistes</span>
      </div>
      <p class="text-sm mt-3 text-emerald-100">Has realitzat {{ store.actions.length }} accions sostenibles fins ara. Continua així!</p>
    </div>

    <!-- Llista d'Accions Recents -->
    <div class="mt-2">
      <h3 class="text-slate-700 dark:text-slate-200 font-bold mb-3 flex items-center gap-2">
        <IconHistory class="w-5 h-5 text-slate-400" />
        Historial d'Accions
      </h3>
      
      <div v-if="store.actions.length === 0" class="text-center py-10 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-500">
        <IconLeaf class="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-600" />
        <p>Encara no has registrat cap acció.</p>
        <p class="text-sm border-0 border-transparent">Fes-ho des del formulari!</p>
      </div>
      
      <div v-else class="flex flex-col gap-3">
        <div 
          v-for="action in store.actions" 
          :key="action.id"
          class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-start gap-3 transition-all hover:shadow-md"
        >
          <div class="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 p-2 rounded-lg shrink-0 mt-0.5">
            <IconCheck class="w-5 h-5" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-slate-800 dark:text-slate-100 font-medium break-words leading-tight mb-1">{{ action.tipus }}</p>
            <p class="text-xs text-slate-400">{{ formatDate(action.data) }}</p>
          </div>
          <div class="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-md shrink-0">
            +{{ action.punts }} pts
          </div>
          <button @click="store.deleteAction(action.id)" class="text-slate-300 hover:text-red-500 transition-colors shrink-0">
            <IconTrash class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { History as IconHistory, Leaf as IconLeaf, Check as IconCheck, Trash as IconTrash } from 'lucide-vue-next'
import { useEcoTrackStore } from '~/stores/ecotrack'

const store = useEcoTrackStore()

const formatDate = (dateString: string) => {
  const d = new Date(dateString);
  return new Intl.DateTimeFormat('ca-ES', { 
    day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
  }).format(d);
};
</script>
