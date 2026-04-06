import { defineStore } from 'pinia';
import { type SustainableAction } from '~/types';

export const useEcoTrackStore = defineStore('ecotrack', {
  state: () => ({
    actions: [] as SustainableAction[]
  }),
  actions: {
    addAction(tipus: string, punts: number) {
      const now = new Date();
      this.actions.unshift({
        id: crypto.randomUUID(),
        tipus,
        data: now.toISOString(),
        punts
      });
    },
    deleteAction(id: string) {
      this.actions = this.actions.filter(action => action.id !== id);
    }
  },
  getters: {
    totalPoints: (state) => state.actions.reduce((acc, action) => acc + action.punts, 0)
  },
  persist: true // Enabled by pinia-plugin-persistedstate
});
