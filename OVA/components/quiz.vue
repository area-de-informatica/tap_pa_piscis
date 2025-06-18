<template>
  <div>
    <div v-if="!finalizado">
      <div v-for="(preg, i) in preguntas" :key="i" class="mb-6">
        <p class="font-weight-bold">{{ i + 1 }}. {{ preg.pregunta }}</p>
        <v-radio-group v-model="respuestas[i]">
          <v-radio v-for="(op, j) in preg.opciones" :key="j" :label="op" :value="j" />
        </v-radio-group>
      </div>
      <v-btn color="deep-purple" variant="flat" @click="enviar">Finalizar</v-btn>
    </div>
    <div v-else>
      <h4 class="text-success mb-3">Cuestionario completado ✅</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  preguntas: Array as PropType<Array<{
    pregunta: string
    opciones: string[]
    correcta: number
  }>>
})

const emit = defineEmits(['finalizado'])
const respuestas = ref<number[]>([])
const finalizado = ref(false)

function enviar() {
  const resultado = props.preguntas.map((p, i) => respuestas.value[i] === p.correcta)
  emit('finalizado', resultado)
  finalizado.value = true
}
</script>

