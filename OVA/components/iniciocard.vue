<template>
  <v-hover v-slot:default="{ isHovering, props: hoverProps }">
    <v-card
      v-bind="hoverProps"
      color="indigo lighten-1"
      class="pa-4 transition-fast-in-fast-out d-flex flex-column justify-start align-start"
      :elevation="isHovering ? 10 : 4"
      @click="$emit('click')"
      style="cursor: pointer; width: 100%; min-height: 220px;"
    >
      <v-card-title class="text-h6 font-weight-bold pb-2">
        {{ titulo }}
      </v-card-title>
      <v-card-text class="text-body-2">
        {{ descripcion }}
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script setup>
const props = defineProps({
  titulo: String,
  descripcion: String
})

defineEmits(['click'])
</script>
