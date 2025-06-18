<template>
  <v-app>
    <!-- Drawer con ítems -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      width="260"
    >
      <v-list nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          link
        >
          <template #prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App bar con botón de menú y cambio de tema -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="text-h6 font-weight-bold">OVA: Búsqueda Sistemática en Bases de Datos</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Contenido -->
    <v-main>
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="primary" dark>
      <v-spacer />
      <span>&copy; 2025 Universidad de Córdoba</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

const drawer = ref(false)

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

const menuItems = [
  { title: 'Inicio', to: '/', icon: 'mdi-home' },
  { title: 'Contenido', to: '/contenido', icon: 'mdi-book-open-page-variant' },
  { title: 'Actividades', to: '/actividades', icon: 'mdi-puzzle' },
  { title: 'Evaluación', to: '/evaluacion', icon: 'mdi-school' },
  { title: 'Créditos', to: '/creditos', icon: 'mdi-account-group' }
]
</script>

<style scoped>
v-main {
  padding-top: 64px;
}
</style>
