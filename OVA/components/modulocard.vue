<template>
  <v-card class="mb-6" color="blue-grey lighten-5" elevation="4">
    <v-card-title class="text-h6 font-weight-bold">{{ modulo.titulo }}</v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item
          v-for="(tema, index) in modulo.temas"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title>
              <v-icon color="primary" class="mr-2">mdi-lightbulb-on-outline</v-icon>
              {{ tema }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  modulo: {
    type: Object,
    required: true
  }
})
</script>