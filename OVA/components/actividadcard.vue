<template>
  <v-hover v-slot:default="{ isHovering, props: hoverProps }">
    <v-card
      v-bind="hoverProps"
      class="pa-6 transition-fast-in-fast-out d-flex flex-column justify-space-between rounded-xl"
      :elevation="isHovering ? 12 : 4"
      @click="$emit('verDetalle')"
      style="cursor: pointer; width: 100%; height: 100%; background: linear-gradient(135deg, #673AB7, #512DA8); color: white"
    >
      <!-- Título ajustable -->
      <v-card-title
        class="text-h6 font-weight-bold mb-2"
        style="white-space: normal; word-break: break-word;"
      >
        {{ titulo }}
      </v-card-title>

      <!-- Descripción ajustable -->
      <v-card-text
        class="text-body-2 mb-3"
        style="white-space: normal; word-break: break-word;"
      >
        {{ descripcion }}
      </v-card-text>

      <!-- Categoría y tiempo -->
      <v-card-subtitle
        class="text-caption"
        style="white-space: normal; word-break: break-word;"
      >
        {{ categoria }} • {{ tiempo }}
      </v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script setup>
const props = defineProps({
  titulo: String,
  descripcion: String,
  categoria: String,
  tiempo: String
})

defineEmits(['verDetalle'])
</script>


