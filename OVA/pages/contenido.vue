<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h4 font-weight-bold mb-6">Contenido del OVA</h1>
        </v-col>

        <v-col
          v-for="modulo in modulos"
          :key="modulo.id"
          cols="12"
        >
          <ModuloCard :modulo="modulo" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ModuloCard from '@/components/ModuloCard.vue'

const modulos = ref([])

onMounted(async () => {
  const { data } = await useFetch('/api/contenido')
  modulos.value = data.value.modulos || []
})
</script>

<style scoped>
h1 {
  color: #1e293b;
}
</style>
