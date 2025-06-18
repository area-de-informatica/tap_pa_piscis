<template>
  <v-container>
    <v-row v-for="mod in modulos" :key="mod.id" class="mb-6">
      <v-col cols="12">
        <v-card elevation="2" class="pa-4">
          <h2 class="text-h6 font-weight-medium">{{ mod.titulo }}</h2>
          <v-list density="comfortable">
            <v-list-item v-for="tema in mod.temas" :key="tema">
              <v-list-item-content>
                <v-list-item-title>{{ tema }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
defineProps<{ modulos: Array<{ id: number; titulo: string; temas: string[] }> }>()
</script>

