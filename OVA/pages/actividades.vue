<template>
  <v-container class="py-12">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="10">
        <v-sheet elevation="6" rounded color="#4CAF50" class="pa-6">
          <h1 class="text-white text-h4 font-weight-bold mb-2">
            🧪 Actividades Prácticas con Búsqueda Sistemática
          </h1>
          <p class="text-white">
            Ejercicios interactivos para fortalecer tus habilidades en el uso de bases de datos científicas y estrategias de búsqueda.
          </p>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="center" align="stretch" class="my-6" dense>
      <v-col
  v-for="(actividad, index) in actividades"
  :key="index"
  cols="12"
  sm="12"
  md="6"
  lg="6"
  class="d-flex"

      >
        <ActividadCard
          :titulo="actividad.titulo"
          :descripcion="actividad.descripcion"
          :categoria="actividad.categoria"
          :tiempo="actividad.tiempo"
          @verDetalle="handleDetalle(actividad)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ActividadCard from '~/components/ActividadCard.vue'

const actividades = [
  {
    titulo: 'Búsqueda guiada paso a paso en Google Scholar',
    descripcion: 'Sigue una ruta guiada para realizar búsquedas eficientes en Google Scholar con palabras clave, filtros y orden de resultados.',
    categoria: 'Bases de Datos',
    tiempo: '40 minutos'
  },
  {
    titulo: 'Juego de emparejamiento: operadores booleanos',
    descripcion: 'Pon a prueba tu conocimiento emparejando ejemplos de búsquedas con los operadores booleanos correctos (AND, OR, NOT).',
    categoria: 'Operadores Booleanos',
    tiempo: '30 minutos'
  },
  {
    titulo: 'Simulación de estrategia de búsqueda en una base real',
    descripcion: 'Aplica filtros, descriptores y combinaciones booleanas en una simulación interactiva para buscar información científica.',
    categoria: 'Estrategias de Búsqueda',
    tiempo: '60 minutos'
  },
  {
    titulo: 'Caso práctico: formular una pregunta de investigación y buscar fuentes',
    descripcion: 'Crea una pregunta de investigación, formula tu estrategia de búsqueda y selecciona fuentes relevantes.',
    categoria: 'PRISMA e IA',
    tiempo: '70 minutos'
  }
]

function handleDetalle(actividad) {
  console.log('Ver detalle de:', actividad.titulo)
  // Aquí puedes activar un modal o redireccionar
}
</script>

