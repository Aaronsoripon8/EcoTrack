<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
    <!-- Header visual -->
    <header class="bg-emerald-600 text-white shadow-md p-4 sticky top-0 z-10">
      <div class="max-w-lg mx-auto flex items-center gap-2">
        <IconLeaf class="w-6 h-6 text-emerald-200" />
        <h1 class="text-xl font-bold tracking-tight">EcoTrack AI</h1>
      </div>
    </header>

    <!-- Content slot -->
    <main class="max-w-lg mx-auto p-4 flex flex-col gap-6 pt-6">
      <slot />
    </main>
    
    <!-- Mobile Navigation Bottom Bar -->
    <nav class="fixed bottom-0 w-full bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
      <div class="flex justify-around items-center max-w-lg mx-auto h-16">
        <NuxtLink to="/" class="flex flex-col items-center gap-1 w-1/2 justify-center h-full text-slate-500 dark:text-slate-400 focus:outline-none transition-colors" active-class="!text-emerald-600 dark:!text-emerald-400">
          <IconLayoutDashboard class="w-6 h-6" />
          <span class="text-[10px] font-medium uppercase tracking-wider">Dashboard</span>
        </NuxtLink>
        <NuxtLink to="/chat" class="flex flex-col items-center gap-1 w-1/2 justify-center h-full text-slate-500 dark:text-slate-400 focus:outline-none transition-colors" active-class="!text-emerald-600 dark:!text-emerald-400">
          <IconMessageCircle class="w-6 h-6" />
          <span class="text-[10px] font-medium uppercase tracking-wider">Chat AI</span>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { LayoutDashboard as IconLayoutDashboard, MessageCircle as IconMessageCircle, Leaf as IconLeaf } from 'lucide-vue-next'
</script>

<style>
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom, 1rem);
}
</style>
