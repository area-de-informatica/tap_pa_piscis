import { defineStore } from 'pinia'

export const useContenidoStore = defineStore('contenido', {
  state: () => ({
    modulos: [] as Array<{ id: number; titulo: string; temas: string[] }>
  }),
  actions: {
    async fetchContenido() {
      const data = await $fetch('/api/contenido')
      this.modulos = data.modulos
    }
  }
})
