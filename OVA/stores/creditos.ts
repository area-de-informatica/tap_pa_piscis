import { defineStore } from 'pinia'

export const useCreditosStore = defineStore('creditos', {
  state: () => ({
    docente: '',
    institucion: '',
    curso: '',
    licencias: '',
    tecnologias: [] as string[]
  }),
  actions: {
    async fetchCreditos() {
      const data = await $fetch('/api/creditos')
      this.docente = data.docente
      this.institucion = data.institucion
      this.curso = data.curso
      this.licencias = data.licencias
      this.tecnologias = data.tecnologias
    }
  }
})