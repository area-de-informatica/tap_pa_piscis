<template>
  <v-container class="py-10">
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="10">
        <v-card color="primary" dark elevation="8">
          <v-card-title class="text-h5 font-weight-bold">
            Bienvenido al OVA sobre Búsqueda Sistemática en Bases de Datos Científicas
          </v-card-title>
          <v-card-subtitle>
            Este Objeto Virtual de Aprendizaje (OVA) te guiará paso a paso en el desarrollo de habilidades clave para buscar información científica de calidad. Aprenderás a reconocer fuentes confiables, utilizar operadores booleanos, diseñar estrategias de búsqueda efectivas y aplicar herramientas como el diagrama PRISMA y la inteligencia artificial para fortalecer tus revisiones sistemáticas. Ideal para estudiantes e investigadores que deseen mejorar la rigurosidad y eficiencia de sus trabajos académicos.
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="my-6">
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        sm="6"
        md="6"
        lg="3"
        class="d-flex"
      >
        <InicioCard
          :titulo="item.titulo"
          :descripcion="item.descripcion"
          @click="handleCardClick(item.modelo)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import InicioCard from '~/components/InicioCard.vue'

const items = [
  {
    titulo: 'Fuentes Confiables',
    descripcion: 'Aprende a identificar fuentes académicas válidas y confiables para tus investigaciones.',
    modelo: 'fuentes'
  },
  {
    titulo: 'Operadores Booleanos',
    descripcion: 'Combina palabras clave con AND, OR y NOT para mejorar tus búsquedas.',
    modelo: 'booleanos'
  },
  {
    titulo: 'PRISMA e IA',
    descripcion: 'Aplica el diagrama PRISMA y herramientas de inteligencia artificial en tus revisiones sistemáticas.',
    modelo: 'prisma'
  },
  {
    titulo: 'Estrategias de Búsqueda',
    descripcion: 'Formula estrategias para realizar búsquedas estructuradas en bases de datos científicas.',
    modelo: 'estrategias'
  }
]

function handleCardClick(modelo) {
  console.log(`Se hizo clic en: ${modelo}`)
}
</script>

<style scoped>
v-sheet p {
  margin: 0;
}
</style>
