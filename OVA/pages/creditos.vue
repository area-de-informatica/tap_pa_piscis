<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-sheet elevation="6" rounded color="#4527A0" class="pa-6">
          <h1 class="text-white text-h4 font-weight-bold mb-2">
            Créditos del OVA
          </h1>
          <p class="text-white">
            Este objeto virtual de aprendizaje fue creado para apoyar el curso de Planeación de Proyectos de Investigación con enfoque en búsqueda de información científica.
          </p>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10" dense>
      <v-col cols="12" md="4">
        <CreditCard
          icon="mdi-account"
          titulo="Desarrolladores"
          :contenido="[
            'Carlos Andrés Lara Montes',
            'Álvaro Pio Villalba Páez',
            'Jesi José Correa Galván',
            'Licenciatura en Informática Educativa',
            'Universidad de Córdoba'
          ]"
          color="#D1C4E9"
        />
      </v-col>

      <v-col cols="12" md="4">
        <CreditCard
          icon="mdi-school"
          titulo="Supervisión Académica"
          :contenido="[
            'Docente guía: Alexander Toscano',
            'Asignatura: Técnicas Avanzadas de Programación'
          ]"
          color="#B39DDB"
        />
      </v-col>

      <v-col cols="12" md="4">
        <CreditCard
          icon="mdi-laptop"
          titulo="Tecnologías"
          :contenido="[
            'Nuxt 3',
            'Vue 3',
            'Vuetify',
            'Pinia',
            'TailwindCSS',
            'SCORM',
            'MongoDB'
          ]"
          color="#9575CD"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import CreditCard from '~/components/CreditCard.vue'
</script>

