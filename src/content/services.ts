export type ServiceGroupId = "mecanica" | "electromecanica" | "mantenimiento";

export interface ServiceGroup {
  id: ServiceGroupId;
  label: string;
}

export const serviceGroups: ServiceGroup[] = [
  { id: "mecanica", label: "Mecánica" },
  { id: "electromecanica", label: "Electromecánica" },
  { id: "mantenimiento", label: "Mantenimiento" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  group: ServiceGroupId;
  /** Nome curto para navegação/cards */
  navLabel: string;
  /** H1 da página */
  title: string;
  /** Frase curta de benefício, usada no hero da página e nos cards */
  benefit: string;
  seoTitle: string;
  metaDescription: string;
  /** Explicação simples: o que é e quando é necessário */
  intro: string;
  symptoms: string[];
  /** O que se revisa/realiza tipicamente neste serviço (escopo geral do serviço, não promessa exclusiva da oficina) */
  scope: string[];
  process: ProcessStep[];
  faqs: FaqItem[];
  /** Mostrado nos 6 cards de destaque da home */
  featuredOnHome?: boolean;
}

export const services: Service[] = [
  {
    slug: "diagnosis-electronica",
    group: "electromecanica",
    navLabel: "Diagnosis electrónica",
    title: "Diagnosis electrónica de coche en Asturias",
    benefit: "Localizamos el origen real de la avería antes de tocar nada.",
    seoTitle: "Diagnosis Electrónica de Coche en Asturias | EMCantábrico",
    metaDescription:
      "Diagnosis electrónica con equipo de escaneo para identificar la causa real de averías, testigos encendidos y fallos electrónicos en Asturias.",
    intro:
      "La diagnosis electrónica consiste en conectar el vehículo a un equipo de escaneo que lee los códigos de error almacenados en las centralitas del motor, la caja de cambios, el ABS y otros sistemas electrónicos. Es el primer paso cuando un testigo se enciende en el cuadro o el coche presenta un comportamiento anómalo, porque permite acotar el problema antes de desmontar o sustituir cualquier pieza.",
    symptoms: [
      "Se ha encendido un testigo en el cuadro (motor, ABS, batería, etc.)",
      "El coche entra en modo de emergencia o pierde potencia de forma repentina",
      "Fallos intermitentes difíciles de reproducir",
      "Comportamiento eléctrico extraño (ventanas, sensores, cuadro de instrumentos)",
      "Antes de una compraventa, para revisar el historial de fallos del vehículo",
    ],
    scope: [
      "Lectura de códigos de error (DTC) de las centralitas del vehículo",
      "Interpretación de los códigos junto con síntomas y parámetros en tiempo real",
      "Verificación de sensores y actuadores relacionados con el fallo detectado",
      "Borrado de códigos únicamente tras confirmar la reparación, no como solución temporal",
    ],
    process: [
      { title: "Conexión del equipo", description: "Se conecta el equipo de diagnosis al conector OBD del vehículo para leer las centralitas." },
      { title: "Lectura de códigos", description: "Se identifican los códigos de error activos y en memoria, junto con los parámetros en tiempo real relacionados." },
      { title: "Contraste con síntomas", description: "Se compara la información técnica con lo que describe el cliente para acotar la causa real." },
      { title: "Explicación al cliente", description: "Se explica de forma clara qué se ha encontrado y qué opciones de reparación existen." },
    ],
    faqs: [
      { question: "¿Un testigo encendido siempre significa una avería grave?", answer: "No siempre. Puede tratarse de un fallo puntual de un sensor o de un problema más serio. La diagnosis es precisamente lo que permite diferenciarlo." },
      { question: "¿La diagnosis ya incluye la reparación?", answer: "No. La diagnosis identifica el origen del problema; la reparación se presupuesta después, en función de lo encontrado." },
      { question: "¿Puedo borrar el testigo yo mismo sin reparar nada?", answer: "Se puede borrar el código, pero si la causa no se soluciona, el testigo volverá a encenderse." },
      { question: "¿Sirve para cualquier marca de coche?", answer: "El equipo de diagnosis permite trabajar con una amplia variedad de marcas y sistemas electrónicos." },
    ],
    featuredOnHome: true,
  },
  {
    slug: "electromecanica",
    group: "electromecanica",
    navLabel: "Electricidad / electromecánica",
    title: "Taller de electromecánica en Asturias",
    benefit: "Sistemas eléctricos y electrónicos del vehículo, revisados con criterio técnico.",
    seoTitle: "Taller de Electromecánica en Asturias | EMCantábrico",
    metaDescription:
      "Reparación de sistemas eléctricos y electromecánicos del automóvil: arranque, carga, sensores, actuadores y cuadros eléctricos en Asturias.",
    intro:
      "La electromecánica del automóvil combina los componentes mecánicos con los sistemas eléctricos y electrónicos que los controlan: motor de arranque, alternador, sensores, actuadores y las conexiones que unen todo el sistema. Un fallo eléctrico puede manifestarse como un problema mecánico y viceversa, por lo que revisar ambos aspectos juntos evita sustituir piezas que no son la causa real.",
    symptoms: [
      "El coche no arranca o cuesta arrancar",
      "La batería se descarga sin motivo aparente",
      "Luces, elevalunas u otros sistemas eléctricos fallan de forma intermitente",
      "Ruidos o comportamientos extraños relacionados con sensores o actuadores",
    ],
    scope: [
      "Revisión del sistema de arranque y carga (batería, alternador, motor de arranque)",
      "Localización de derivaciones, cortocircuitos o falsos contactos",
      "Comprobación de sensores y actuadores electromecánicos",
      "Reparación o sustitución de componentes eléctricos del vehículo",
    ],
    process: [
      { title: "Revisión inicial", description: "Se comprueba el estado general del sistema eléctrico: carga, consumo y puntos de conexión." },
      { title: "Localización del fallo", description: "Se identifica si el origen es un componente, el cableado o un problema de gestión electrónica." },
      { title: "Presupuesto", description: "Se informa del problema encontrado y de las opciones de reparación antes de intervenir." },
      { title: "Reparación", description: "Se repara o sustituye el componente afectado y se verifica el funcionamiento del sistema." },
    ],
    faqs: [
      { question: "¿Cuál es la diferencia entre mecánica y electromecánica?", answer: "La mecánica trabaja sobre piezas físicas del vehículo; la electromecánica añade los sistemas eléctricos y electrónicos que las controlan, muy presentes en los coches actuales." },
      { question: "¿Por qué se me descarga la batería?", answer: "Puede deberse a la propia batería, al alternador o a un consumo eléctrico anómalo. Se necesita revisión para saber cuál es la causa." },
      { question: "¿Puedo seguir usando el coche con un fallo eléctrico intermitente?", answer: "Depende del sistema afectado. Recomendamos revisarlo cuanto antes, especialmente si afecta al arranque o a sistemas de seguridad." },
    ],
    featuredOnHome: true,
  },
  {
    slug: "mecanica",
    group: "mecanica",
    navLabel: "Mecánica general",
    title: "Taller mecánico en Asturias",
    benefit: "Mantenimiento y reparación mecánica general para tu vehículo.",
    seoTitle: "Taller Mecánico en Asturias | EMCantábrico",
    metaDescription:
      "Reparación y mantenimiento mecánico general del automóvil en Asturias: motor, transmisión, frenos, suspensión y más.",
    intro:
      "La mecánica general cubre el mantenimiento y la reparación de los sistemas mecánicos del vehículo: motor, transmisión, frenos, suspensión y dirección, entre otros. Es el punto de partida para la mayoría de revisiones y averías, y suele combinarse con una diagnosis electrónica cuando el problema tiene componente electrónico.",
    symptoms: [
      "Ruidos anómalos al circular, frenar o girar",
      "Vibraciones en el volante, pedales o carrocería",
      "Pérdida de rendimiento o consumo elevado",
      "Necesidad de una revisión general antes de un viaje largo",
    ],
    scope: [
      "Revisión mecánica general del vehículo",
      "Diagnóstico de ruidos, vibraciones y pérdidas de rendimiento",
      "Reparación de componentes mecánicos del motor y la transmisión",
      "Coordinación con diagnosis electrónica cuando el problema lo requiere",
    ],
    process: [
      { title: "Escucha del problema", description: "Se recoge la descripción del cliente: cuándo ocurre, con qué frecuencia y en qué condiciones." },
      { title: "Revisión mecánica", description: "Se inspecciona el vehículo para localizar el origen del ruido, vibración o pérdida de rendimiento." },
      { title: "Explicación de la solución", description: "Se explica la avería encontrada y las opciones de reparación disponibles." },
      { title: "Intervención", description: "Se realiza la reparación acordada y se verifica que el problema quede resuelto." },
    ],
    faqs: [
      { question: "¿Cuándo debo llevar el coche a revisión mecánica?", answer: "Ante cualquier ruido, vibración o cambio de comportamiento que no sea habitual, o de forma preventiva según el mantenimiento del fabricante." },
      { question: "¿La mecánica general incluye la parte eléctrica?", answer: "Los sistemas mecánicos y eléctricos suelen revisarse de forma conjunta cuando es necesario, dado que muchos vehículos actuales los integran." },
    ],
    featuredOnHome: true,
  },
  {
    slug: "mantenimiento",
    group: "mantenimiento",
    navLabel: "Mantenimiento",
    title: "Mantenimiento de coche en Asturias",
    benefit: "Revisiones periódicas para evitar averías antes de que aparezcan.",
    seoTitle: "Mantenimiento de Coche en Asturias | EMCantábrico",
    metaDescription:
      "Mantenimiento periódico del automóvil en Asturias: aceite y filtros, líquidos, correas y revisiones programadas según el fabricante.",
    intro:
      "El mantenimiento periódico consiste en revisar y sustituir a tiempo los elementos que se desgastan con el uso: aceite, filtros, líquidos y otros componentes con vida útil limitada. Seguir los intervalos recomendados por el fabricante reduce el riesgo de averías y ayuda a conservar el vehículo en buen estado.",
    symptoms: [
      "Ha llegado el kilometraje o el tiempo recomendado para la revisión",
      "El testigo de mantenimiento se ha encendido",
      "No se recuerda cuándo fue el último cambio de aceite o filtros",
      "El vehículo va a hacer un viaje largo próximamente",
    ],
    scope: [
      "Revisión de niveles y estado de líquidos",
      "Sustitución de aceite y filtros según el intervalo del fabricante",
      "Comprobación de elementos de desgaste (correas, pastillas, neumáticos)",
      "Revisión general antes de un viaje o de la ITV",
    ],
    process: [
      { title: "Consulta del historial", description: "Se revisa el kilometraje y las últimas intervenciones realizadas al vehículo." },
      { title: "Revisión programada", description: "Se comprueban los puntos de mantenimiento correspondientes al intervalo del fabricante." },
      { title: "Sustitución de elementos", description: "Se cambian los elementos que lo requieran (aceite, filtros, líquidos, etc.)." },
      { title: "Registro", description: "Se informa al cliente de lo realizado y de la próxima revisión recomendada." },
    ],
    faqs: [
      { question: "¿Cada cuánto debo hacer el mantenimiento?", answer: "Depende del fabricante y del uso del vehículo; el manual del coche indica los intervalos recomendados de kilometraje y tiempo." },
      { question: "¿El mantenimiento evita todas las averías?", answer: "No elimina el riesgo por completo, pero reduce significativamente la probabilidad de averías por desgaste no detectado a tiempo." },
    ],
    featuredOnHome: true,
  },
  {
    slug: "cambio-aceite-filtros",
    group: "mantenimiento",
    navLabel: "Cambio de aceite y filtros",
    title: "Cambio de aceite y filtros en Asturias",
    benefit: "El mantenimiento más básico y más importante para tu motor.",
    seoTitle: "Cambio de Aceite y Filtros en Asturias | EMCantábrico",
    metaDescription:
      "Cambio de aceite y filtros de motor, aire y habitáculo en Asturias, según las especificaciones recomendadas por el fabricante.",
    intro:
      "El aceite lubrica y protege el motor, pero pierde propiedades con el uso y el tiempo. Cambiarlo junto con los filtros correspondientes en el intervalo recomendado es una de las medidas más sencillas y efectivas para alargar la vida del motor.",
    symptoms: [
      "Se ha alcanzado el kilometraje o tiempo recomendado por el fabricante",
      "El testigo de cambio de aceite está encendido",
      "El aceite se ve oscuro, sucio o el nivel está bajo",
      "Se nota mayor ruido del motor de lo habitual",
    ],
    scope: [
      "Sustitución de aceite de motor según especificación del fabricante",
      "Cambio de filtro de aceite",
      "Revisión y sustitución de filtro de aire y de habitáculo cuando corresponda",
      "Comprobación de niveles generales del vehículo",
    ],
    process: [
      { title: "Comprobación del intervalo", description: "Se verifica el kilometraje y la especificación de aceite recomendada para el motor." },
      { title: "Vaciado y sustitución", description: "Se vacía el aceite usado y se sustituye por el aceite y filtro adecuados." },
      { title: "Revisión de filtros", description: "Se revisa el estado del filtro de aire y de habitáculo y se cambian si lo necesitan." },
      { title: "Comprobación final", description: "Se verifican niveles y ausencia de fugas antes de entregar el vehículo." },
    ],
    faqs: [
      { question: "¿Qué pasa si tardo en cambiar el aceite?", answer: "El aceite pierde capacidad de lubricar y proteger el motor, lo que puede acelerar el desgaste de sus componentes." },
      { question: "¿Todos los coches usan el mismo aceite?", answer: "No. Cada motor tiene una especificación de aceite recomendada por el fabricante, que se respeta en cada cambio." },
    ],
  },
  {
    slug: "frenos",
    group: "mecanica",
    navLabel: "Frenos",
    title: "Taller de frenos en Asturias",
    benefit: "Uno de los sistemas de seguridad más importantes del coche.",
    seoTitle: "Taller de Frenos en Asturias | EMCantábrico",
    metaDescription:
      "Revisión y reparación del sistema de frenos: pastillas, discos, líquido de frenos y comprobación de seguridad en Asturias.",
    intro:
      "El sistema de frenos es uno de los elementos de seguridad más críticos del vehículo. Pastillas, discos, líquido de frenos y el resto de componentes se desgastan con el uso y deben revisarse periódicamente, además de ante cualquier señal de alerta.",
    symptoms: [
      "Chirridos o ruidos metálicos al frenar",
      "El coche vibra o tira hacia un lado al frenar",
      "El pedal de freno se siente esponjoso o llega más al fondo de lo habitual",
      "Mayor distancia de frenado de la esperada",
    ],
    scope: [
      "Revisión del estado de pastillas y discos de freno",
      "Comprobación y sustitución del líquido de frenos",
      "Revisión de latiguillos, pinzas y demás componentes del sistema",
      "Sustitución de elementos desgastados",
    ],
    process: [
      { title: "Inspección visual", description: "Se revisa el grosor de pastillas y discos, y el estado general del sistema." },
      { title: "Prueba funcional", description: "Se comprueba la respuesta del pedal y el comportamiento del vehículo al frenar." },
      { title: "Explicación al cliente", description: "Se informa del estado del sistema y de qué elementos requieren sustitución." },
      { title: "Sustitución", description: "Se cambian los componentes necesarios y se verifica el frenado antes de entregar el vehículo." },
    ],
    faqs: [
      { question: "¿Cada cuánto hay que cambiar las pastillas de freno?", answer: "Depende del uso y estilo de conducción; se recomienda revisarlas periódicamente en lugar de guiarse solo por el kilometraje." },
      { question: "¿Es seguro seguir conduciendo si chirrían los frenos?", answer: "No se recomienda. El chirrido suele indicar desgaste avanzado y conviene revisarlo cuanto antes." },
    ],
    featuredOnHome: true,
  },
  {
    slug: "suspension-amortiguadores",
    group: "mecanica",
    navLabel: "Suspensión y amortiguadores",
    title: "Suspensión y amortiguadores en Asturias",
    benefit: "Estabilidad, confort y seguridad en cada curva y frenada.",
    seoTitle: "Suspensión y Amortiguadores en Asturias | EMCantábrico",
    metaDescription:
      "Revisión y sustitución de amortiguadores, muelles y componentes de suspensión en Asturias para mejorar estabilidad y seguridad.",
    intro:
      "La suspensión mantiene el contacto de las ruedas con la carretera y absorbe las irregularidades del firme. Unos amortiguadores desgastados afectan tanto al confort como a la estabilidad y a la distancia de frenado del vehículo.",
    symptoms: [
      "El coche 'rebota' o se balancea tras un bache",
      "Ruidos secos al pasar por baches o badenes",
      "Desgaste irregular de los neumáticos",
      "Sensación de inestabilidad en curvas o frenadas",
    ],
    scope: [
      "Revisión de amortiguadores, muelles y silentblocks",
      "Comprobación del comportamiento del vehículo en banco de pruebas o carretera",
      "Sustitución de componentes desgastados de la suspensión",
      "Revisión de la alineación cuando el desgaste de neumáticos lo sugiere",
    ],
    process: [
      { title: "Inspección del sistema", description: "Se revisan amortiguadores, muelles y elementos de unión de la suspensión." },
      { title: "Prueba de comportamiento", description: "Se evalúa cómo responde el vehículo ante irregularidades del firme." },
      { title: "Diagnóstico", description: "Se identifican los componentes desgastados o dañados." },
      { title: "Sustitución", description: "Se reemplazan las piezas necesarias y se verifica el resultado." },
    ],
    faqs: [
      { question: "¿Cómo sé si mis amortiguadores están gastados?", answer: "Signos habituales son el rebote tras un bache, ruidos secos y desgaste irregular de los neumáticos." },
      { question: "¿Afecta la suspensión a la frenada?", answer: "Sí. Una suspensión en mal estado reduce el contacto de las ruedas con el suelo, lo que puede aumentar la distancia de frenado." },
    ],
  },
  {
    slug: "distribucion",
    group: "mecanica",
    navLabel: "Distribución",
    title: "Correa y cadena de distribución en Asturias",
    benefit: "Un componente crítico: su fallo puede dañar gravemente el motor.",
    seoTitle: "Correa de Distribución en Asturias | EMCantábrico",
    metaDescription:
      "Sustitución de correa o cadena de distribución según el intervalo del fabricante para evitar averías graves de motor en Asturias.",
    intro:
      "La correa o cadena de distribución sincroniza el movimiento del motor. Su rotura o fallo puede provocar daños graves e incluso la destrucción del motor en muchos modelos, por lo que respetar el intervalo de sustitución marcado por el fabricante es especialmente importante.",
    symptoms: [
      "Se ha alcanzado el kilometraje o tiempo recomendado por el fabricante",
      "Ruidos anómalos procedentes de la zona de la distribución",
      "El vehículo no arranca o el motor gira de forma irregular",
      "No hay constancia de cuándo se cambió por última vez",
    ],
    scope: [
      "Revisión del estado de la correa o cadena de distribución",
      "Sustitución según el intervalo especificado por el fabricante",
      "Cambio de componentes asociados (tensores, rodillos, bomba de agua) cuando corresponde",
      "Verificación del sincronismo del motor tras la intervención",
    ],
    process: [
      { title: "Comprobación del intervalo", description: "Se verifica el kilometraje/tiempo del vehículo frente a la recomendación del fabricante." },
      { title: "Desmontaje y revisión", description: "Se accede a la zona de distribución y se revisa el estado de todos los componentes implicados." },
      { title: "Sustitución", description: "Se cambia la correa o cadena junto con los elementos asociados que lo requieran." },
      { title: "Verificación", description: "Se comprueba el sincronismo del motor y su correcto funcionamiento." },
    ],
    faqs: [
      { question: "¿Qué pasa si se rompe la correa de distribución?", answer: "En muchos motores puede provocar el choque entre válvulas y pistones, con daños graves y reparaciones costosas." },
      { question: "¿Cómo sé cuándo toca cambiarla?", answer: "El manual del fabricante indica el intervalo de kilometraje o tiempo; si no hay historial claro, conviene revisarlo cuanto antes." },
    ],
  },
  {
    slug: "baterias",
    group: "electromecanica",
    navLabel: "Baterías",
    title: "Baterías de coche en Asturias",
    benefit: "Diagnóstico y sustitución de la batería cuando realmente lo necesita.",
    seoTitle: "Baterías de Coche en Asturias | EMCantábrico",
    metaDescription:
      "Comprobación del estado de la batería, del sistema de carga y sustitución cuando sea necesario en Asturias.",
    intro:
      "Una batería en mal estado es una de las causas más comunes de que un coche no arranque. Antes de sustituirla, conviene comprobar también el alternador y el resto del sistema de carga, ya que un fallo en ellos puede provocar el mismo síntoma.",
    symptoms: [
      "El motor de arranque suena débil o no arranca",
      "Los testigos parpadean o pierden intensidad",
      "La batería se descarga con frecuencia",
      "La batería tiene varios años de uso",
    ],
    scope: [
      "Comprobación del estado y la capacidad de la batería",
      "Revisión del sistema de carga (alternador y conexiones)",
      "Sustitución de la batería cuando el diagnóstico lo confirma",
      "Comprobación de consumos eléctricos anómalos",
    ],
    process: [
      { title: "Comprobación de carga", description: "Se mide el estado de la batería y la tensión del sistema de carga." },
      { title: "Revisión del sistema", description: "Se descarta que el problema provenga del alternador o de un consumo eléctrico anómalo." },
      { title: "Diagnóstico", description: "Se determina si la batería necesita sustitución o el problema está en otro componente." },
      { title: "Sustitución", description: "Se instala la batería adecuada para el vehículo cuando es necesario." },
    ],
    faqs: [
      { question: "¿Cuánto dura una batería de coche?", answer: "Depende del uso y las condiciones, pero con el tiempo pierde capacidad y puede necesitar sustitución." },
      { question: "¿Si cambio la batería se soluciona siempre el problema de arranque?", answer: "No siempre; conviene revisar también el alternador y el sistema de arranque para confirmar el origen del fallo." },
    ],
  },
  {
    slug: "aire-acondicionado",
    group: "mantenimiento",
    navLabel: "Aire acondicionado",
    title: "Aire acondicionado de coche en Asturias",
    benefit: "Revisión y carga del sistema de climatización del vehículo.",
    seoTitle: "Aire Acondicionado de Coche en Asturias | EMCantábrico",
    metaDescription:
      "Revisión, carga de gas y reparación del sistema de aire acondicionado del automóvil en Asturias.",
    intro:
      "El sistema de aire acondicionado necesita mantenimiento periódico para funcionar correctamente: el gas refrigerante puede perder presión con el tiempo y los filtros y componentes pueden desgastarse o presentar fugas.",
    symptoms: [
      "El aire acondicionado enfría menos de lo habitual o no enfría",
      "Ruidos extraños al activar el climatizador",
      "Malos olores al encender la ventilación",
      "No se recuerda la última revisión o carga de gas",
    ],
    scope: [
      "Comprobación de la presión y el estado del gas refrigerante",
      "Detección de fugas en el circuito",
      "Recarga del sistema cuando corresponde",
      "Revisión del filtro de habitáculo relacionado con la climatización",
    ],
    process: [
      { title: "Diagnóstico del sistema", description: "Se comprueba la presión del circuito y se detectan posibles fugas." },
      { title: "Localización de problemas", description: "Se identifica si el fallo es de gas, de un componente o de un filtro." },
      { title: "Recarga o reparación", description: "Se realiza la recarga de gas o la reparación del componente afectado." },
      { title: "Comprobación final", description: "Se verifica la temperatura y el funcionamiento del sistema." },
    ],
    faqs: [
      { question: "¿Cada cuánto hay que recargar el aire acondicionado?", answer: "Depende del vehículo y de si existen fugas; se recomienda revisarlo si se nota una pérdida progresiva de rendimiento." },
      { question: "¿Por qué huele mal el aire acondicionado?", answer: "Suele deberse a humedad o suciedad acumulada en el sistema, a menudo relacionada con el filtro de habitáculo." },
    ],
  },
  {
    slug: "pre-itv",
    group: "mantenimiento",
    navLabel: "Pre-ITV",
    title: "Revisión pre-ITV en Asturias",
    benefit: "Revisamos los puntos habituales de la ITV antes de que lo haga la estación oficial.",
    seoTitle: "Revisión Pre-ITV en Asturias | EMCantábrico",
    metaDescription:
      "Revisión pre-ITV en Asturias para comprobar los puntos habituales de inspección antes de pasar la ITV oficial.",
    intro:
      "La revisión pre-ITV consiste en comprobar los puntos que habitualmente se inspeccionan en la ITV oficial —luces, frenos, suspensión, emisiones y otros elementos de seguridad— para detectar y corregir posibles fallos antes de acudir a la estación de inspección.",
    symptoms: [
      "Se acerca la fecha de la ITV del vehículo",
      "El vehículo ya no superó la ITV en una revisión anterior",
      "Se han detectado luces, ruidos o fallos que podrían afectar a la inspección",
      "Se quiere reducir el riesgo de un desfavorable o negativo",
    ],
    scope: [
      "Revisión de luces, frenos y neumáticos",
      "Comprobación de elementos de seguridad y suspensión",
      "Revisión de posibles fugas o fallos visibles",
      "Corrección de las deficiencias detectadas antes de la ITV",
    ],
    process: [
      { title: "Revisión de puntos clave", description: "Se comprueban los elementos que con más frecuencia generan defectos en la ITV." },
      { title: "Informe de resultados", description: "Se informa de las deficiencias encontradas y su nivel de importancia." },
      { title: "Corrección", description: "Se reparan los puntos necesarios antes de acudir a la inspección." },
      { title: "Verificación final", description: "Se realiza una comprobación final de los puntos revisados." },
    ],
    faqs: [
      { question: "¿La revisión pre-ITV garantiza que voy a aprobar?", answer: "No es una garantía, ya que la inspección la realiza la estación oficial, pero reduce significativamente el riesgo de un resultado desfavorable por causas detectables de antemano." },
      { question: "¿Cuándo conviene hacer la revisión pre-ITV?", answer: "Unos días o semanas antes de la cita de la ITV, con margen suficiente para corregir cualquier deficiencia encontrada." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByGroup(group: ServiceGroupId) {
  return services.filter((service) => service.group === group);
}

export function getFeaturedServices() {
  return services.filter((service) => service.featuredOnHome);
}
