<template>
  <v-container class="text-center py-8">
    <v-row>
      <v-col>
        <v-sheet color="primary" dark class="py-6 rounded">
          <h1 class="text-h4 font-weight-bold">{{ titulo }}</h1>
          <p v-if="descripcion" class="mt-2 text-subtitle-1">{{ descripcion }}</p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
defineProps<{ titulo: string; descripcion?: string }>()
</script>
