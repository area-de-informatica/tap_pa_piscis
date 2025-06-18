
export default defineEventHandler(() => {
  return {
    cuestionario: {
      tipo: "SCORM",
      preguntas: 10,
      formatos: ["Opción múltiple", "Falso/Verdadero"]
    },
    entregable: "Diseño de una estrategia de búsqueda para un tema específico",
    rubrica: [
      { nivel: "Básico", descripcion: "Uso de una sola palabra clave" },
      { nivel: "Intermedio", descripcion: "Uso de operadores" },
      { nivel: "Avanzado", descripcion: "Planificación con criterios PRISMA" }
    ]
  }
})
