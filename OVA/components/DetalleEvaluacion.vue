<template>
  <v-container>
    <v-card class="pa-4 mb-6">
      <v-card-title class="text-h6">Cuestionario</v-card-title>
      <v-card-text>
        <p><strong>Tipo:</strong> {{ cuestionario.tipo }}</p>
        <p><strong>Preguntas:</strong> {{ cuestionario.preguntas }}</p>
        <p><strong>Formatos:</strong> {{ cuestionario.formatos.join(', ') }}</p>
      </v-card-text>
    </v-card>

    <v-card class="pa-4 mb-6">
      <v-card-title class="text-h6">Entregable</v-card-title>
      <v-card-text>{{ entregable }}</v-card-text>
    </v-card>

    <v-card class="pa-4">
      <v-card-title class="text-h6">Rúbrica</v-card-title>
      <v-list>
        <v-list-item v-for="item in rubrica" :key="item.nivel">
          <v-list-item-content>
            <v-list-item-title><strong>{{ item.nivel }}:</strong> {{ item.descripcion }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
defineProps<{
  cuestionario: { tipo: string; preguntas: number; formatos: string[] },
  entregable: string,
  rubrica: Array<{ nivel: string; descripcion: string }>
}>()
</script>
