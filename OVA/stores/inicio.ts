import { defineStore } from 'pinia'

export const useInicioStore = defineStore('inicio', {
  state: () => ({
    titulo: '',
    descripcion: '',
    emid: '',
    prod: '',
    model: ''
  }),
  actions: {
    async fetchInicio() {
      const data = await $fetch('/api/inicio')
      this.titulo = data.titulo
      this.descripcion = data.descripcion
      this.emid = data.emid
      this.prod = data.prod
      this.model = data.model
    }
  }
})