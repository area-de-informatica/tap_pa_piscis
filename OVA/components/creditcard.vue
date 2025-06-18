<template>
  <v-card :color="color" elevation="4" class="pa-4 rounded-xl">
    <v-icon size="40" class="mb-3">{{ icon }}</v-icon>
    <h3 class="text-h6 font-weight-bold mb-3">{{ titulo }}</h3>

    <div v-if="Array.isArray(contenido)">
      <v-list dense>
        <v-list-item v-for="(item, index) in contenido" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <p v-else>{{ contenido }}</p>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  titulo: string
  contenido: string[] | string
  color?: string
}>()
</script>

