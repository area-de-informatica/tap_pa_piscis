
import { defineStore } from 'pinia'

export const useEvaluacionStore = defineStore('evaluacion', {
  state: () => ({
    cuestionario: {
      tipo: '',
      preguntas: 0,
      formatos: [] as string[]
    },
    entregable: '',
    rubrica: [] as Array<{ nivel: string; descripcion: string }>
  }),

  actions: {
    async fetchEvaluacion() {
      try {
        const data = await $fetch('/api/evaluacion')
        this.cuestionario = data.cuestionario
        this.entregable = data.entregable
        this.rubrica = data.rubrica
      } catch (error) {
        console.error('❌ Error al obtener evaluación:', error)
      }
    }
  }
})
