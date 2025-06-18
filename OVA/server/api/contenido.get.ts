export default defineEventHandler(() => {
  return {
    modulos: [
      {
        id: 0,
        titulo: "Introducción",
        temas: [
          "¿Qué es una revisión sistemática?",
          "Importancia de buscar en bases de datos científicas",
          "Rol de la búsqueda estructurada en la calidad del trabajo investigativo"
        ]
      },
      {
        id: 1,
        titulo: "¿Qué es una base de datos?",
        temas: [
          "Definición general y académica",
          "Ejemplos: Scopus, PubMed, Dialnet, Redalyc, Scielo, Google Scholar",
          "Diferencias entre base de datos, motor de búsqueda y catálogo"
        ]
      },
      {
        id: 2,
        titulo: "Tipos de fuentes de información",
        temas: [
          "Fuentes primarias, secundarias y terciarias",
          "Cómo evaluar la calidad de una fuente"
        ]
      },
      {
        id: 3,
        titulo: "Estrategias de búsqueda",
        temas: [
          "Palabras clave (keywords)",
          "Identificación de descriptores",
          "Uso de filtros, idioma, año, tipo de documento"
        ]
      },
      {
        id: 4,
        titulo: "Operadores booleanos",
        temas: [
          "Explicación y ejemplos: AND, OR, NOT",
          "Búsquedas anidadas y truncamiento",
          "Cómo combinarlos con filtros de bases de datos"
        ]
      },
      {
        id: 5,
        titulo: "Introducción a PRISMA e IA",
        temas: [
          "¿Qué es PRISMA? (Diagrama y propósito)",
          "Cómo la inteligencia artificial (ChatGPT, Elicit, Scite, ResearchRabbit) puede apoyar la búsqueda",
          "Ventajas y riesgos del uso de IA en revisión de literatura"
        ]
      }
    ]
  }
})