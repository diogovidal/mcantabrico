export interface Tip {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  relatedService?: string;
  content: string[];
}

export const tips: Tip[] = [
  {
    slug: "testigo-averia-motor",
    title: "Se ha encendido el testigo de avería del motor: qué hacer",
    excerpt:
      "El testigo de avería del motor puede indicar desde un fallo leve hasta un problema serio. Te explicamos cómo actuar.",
    publishedAt: "2026-06-02",
    relatedService: "diagnosis-electronica",
    content: [
      "El testigo de avería del motor (también llamado 'check engine') se enciende cuando la centralita detecta un valor fuera de lo esperado en alguno de los sistemas que controla. Puede tratarse de un sensor, del sistema de emisiones, del encendido o de otros componentes.",
      "No todos los casos son graves, pero tampoco conviene ignorarlo. Si el testigo se enciende de forma fija, lo recomendable es acudir al taller para realizar una diagnosis electrónica y saber exactamente qué está pasando antes de seguir circulando con normalidad.",
      "Si el testigo parpadea en lugar de quedarse fijo, suele indicar un problema más urgente (por ejemplo, relacionado con fallos de combustión) y es preferible reducir el uso del vehículo hasta revisarlo.",
      "La diagnosis electrónica permite leer los códigos de error almacenados y contrastarlos con los síntomas reales del coche, evitando sustituir piezas que no son la causa del problema.",
    ],
  },
  {
    slug: "cuando-cambiar-aceite",
    title: "Cada cuánto hay que cambiar el aceite del coche",
    excerpt:
      "El aceite protege el motor, pero pierde propiedades con el uso. Te contamos cómo saber cuándo toca cambiarlo.",
    publishedAt: "2026-05-18",
    relatedService: "cambio-aceite-filtros",
    content: [
      "El intervalo de cambio de aceite depende del fabricante del vehículo, del tipo de aceite utilizado y del uso que se le da al coche. El manual del fabricante indica el intervalo recomendado, normalmente expresado en kilómetros o en tiempo, lo que ocurra primero.",
      "Un uso intenso (trayectos cortos frecuentes, ciudad, remolque) puede acortar la vida útil del aceite respecto a un uso principalmente de carretera.",
      "Señales de que conviene revisarlo cuanto antes: el testigo de mantenimiento encendido, un aceite visiblemente oscuro o con nivel bajo, o un ruido de motor distinto al habitual.",
      "Cambiar el aceite y el filtro correspondiente a tiempo es una de las medidas de mantenimiento más simples y con mayor impacto en la vida útil del motor.",
    ],
  },
  {
    slug: "revision-antes-de-itv",
    title: "Qué revisar antes de pasar la ITV",
    excerpt:
      "Una revisión previa puede evitar sorpresas en la inspección oficial. Estos son los puntos que más fallan.",
    publishedAt: "2026-04-27",
    relatedService: "pre-itv",
    content: [
      "La ITV revisa un conjunto amplio de puntos de seguridad y medioambientales del vehículo: luces, neumáticos, frenos, suspensión, emisiones y otros elementos. Muchos de los defectos más comunes son fáciles de corregir si se detectan a tiempo.",
      "Antes de acudir a la inspección, conviene comprobar que todas las luces funcionan correctamente, que los neumáticos tienen la profundidad de dibujo adecuada y que no hay fugas visibles de líquidos.",
      "Una revisión pre-ITV en el taller permite comprobar estos puntos con más detalle, incluyendo frenos y suspensión, y corregir cualquier deficiencia antes de la cita oficial.",
      "Esto no garantiza el resultado de la inspección, que depende de la estación oficial, pero reduce de forma notable el riesgo de un desfavorable por causas detectables de antemano.",
    ],
  },
];

export function getTipBySlug(slug: string) {
  return tips.find((tip) => tip.slug === slug);
}

export function getLatestTips(count = 3) {
  return [...tips]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}
