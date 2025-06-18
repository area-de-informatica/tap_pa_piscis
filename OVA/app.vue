<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'OVA Base de Datos - Universidad de Córdoba',
  meta: [
    { name: 'description', content: 'Objeto Virtual de Aprendizaje sobre Búsqueda en Bases de Datos' }
  ]
})
</script>
