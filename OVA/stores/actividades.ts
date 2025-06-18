import { defineStore } from 'pinia'

export const useActividadesStore = defineStore('actividades', {
  state: () => ({
    actividades: [] as string[]
  }),
  actions: {
    async fetchActividades() {
      const data = await $fetch('/api/actividades')
      this.actividades = data.actividades
    }
  }
})