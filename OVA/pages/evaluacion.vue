<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-sheet elevation="6" rounded color="#6A1B9A" class="pa-6">
          <h1 class="text-white text-h4 font-weight-bold mb-2">
            Evaluación del OVA: Búsqueda en Bases de Datos
          </h1>
          <p class="text-white">
            Realiza el cuestionario SCORM y entrega tu propuesta de estrategia de búsqueda usando los criterios PRISMA.
          </p>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-8" dense>
      <v-col cols="12" md="6">
        <v-card elevation="4" class="pa-4 rounded-xl" color="#EDE7F6">
          <h3 class="text-h6 font-weight-bold mb-2">Cuestionario</h3>
          <p class="mb-2">Tipo: {{ evaluacion.cuestionario.tipo }}</p>
          <p class="mb-4">Formato: {{ evaluacion.cuestionario.formatos.join(', ') }}</p>
          <Quiz :preguntas="preguntasEjemplo" @finalizado="guardarResultado" />

          <div v-if="resultado" class="mt-4">
            <v-alert type="info" color="deep-purple lighten-4" border="start" variant="tonal">
              Obtuviste {{ resultado.filter(r => r).length }} de {{ resultado.length }} respuestas correctas
              ({{ ((resultado.filter(r => r).length / resultado.length) * 100).toFixed(0) }}%).
            </v-alert>

            <v-list dense class="mt-2">
              <v-list-item
                v-for="(res, i) in resultado"
                :key="i"
                :color="res ? 'green' : 'red'"
              >
                <v-list-item-title>
                  Pregunta {{ i + 1 }} - <strong>{{ res ? 'Correcta ✅' : 'Incorrecta ❌' }}</strong>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card elevation="4" class="pa-4 rounded-xl" color="#F3E5F5">
          <h3 class="text-h6 font-weight-bold mb-2">Entregable</h3>
          <p>{{ evaluacion.entregable }}</p>

          <h4 class="mt-6 text-subtitle-1 font-weight-bold">Rúbrica de Evaluación</h4>
          <v-list dense class="mt-2">
            <v-list-item v-for="(item, index) in evaluacion.rubrica" :key="index">
              <v-list-item-content>
                <v-list-item-title>
                  <strong>{{ item.nivel }}:</strong> {{ item.descripcion }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useEvaluacionStore } from '~/stores/evaluacion'
import Quiz from '~/components/Quiz.vue'

const evaluacion = useEvaluacionStore()
const resultado = ref<boolean[] | null>(null)

onMounted(() => {
  evaluacion.fetchEvaluacion()
})

const preguntasEjemplo = [
  {
    pregunta: 'Selecciona el operador booleano que sirve para reducir los resultados',
    opciones: ['OR', 'AND', 'NOT', 'XOR'],
    correcta: 1
  },
  {
    pregunta: 'Google Scholar es un ejemplo de:',
    opciones: ['Catálogo bibliográfico', 'Base de datos', 'Red social', 'Repositorio institucional'],
    correcta: 1
  },
  {
    pregunta: 'El operador NOT sirve para:',
    opciones: ['Incluir', 'Excluir', 'Ordenar', 'Resumir'],
    correcta: 1
  }
]

function guardarResultado(res: boolean[]) {
  resultado.value = res
}
</script>

