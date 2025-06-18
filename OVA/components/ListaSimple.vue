<template>
  <v-container>
    <v-list density="compact">
      <v-list-item v-for="item in items" :key="item">
        <v-list-item-content>
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>
