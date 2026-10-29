
(() => {
  "use strict";

  const cursos = [
    {
      titulo: "Introducción a la LSM",
      nivel: "Nivel 1 · Principiante",
      icono: "👋",
      color: "#e4edff",
      descripcion: "Conoce qué es la Lengua de Señas Mexicana y cómo comunicarte con respeto.",
      lecciones: [
        {
          titulo: "¿Qué es la LSM?",
          texto: "La Lengua de Señas Mexicana (LSM) es una lengua natural que utiliza las manos, los movimientos, el espacio y expresiones del rostro. Tiene su propia gramática y no consiste simplemente en representar el español con las manos.",
          nota: "Recuerda: la LSM es una lengua completa, no un código universal."
        },
        {
          titulo: "Comunicación visual",
          texto: "Para conversar en LSM es importante mantener una posición que permita ver las manos y el rostro de la otra persona. La atención visual ayuda a comprender el mensaje.",
          nota: "Procura tener buena iluminación y evita tapar tus manos."
        },
        {
          titulo: "Respeto e inclusión",
          texto: "Pregunta a cada persona cómo prefiere comunicarse. No todas las personas sordas usan LSM y algunas pueden preferir otros medios de comunicación.",
          nota: "La comunicación accesible comienza con el respeto."
        }
      ],
      preguntas: [
        ["¿Qué significa LSM?", ["Lengua de Señas Mexicana", "Lenguaje Secreto Manual", "Lectura Sonora Mexicana"], 0, "LSM significa Lengua de Señas Mexicana."],
        ["¿La LSM es una lengua natural?", ["No, solo son gestos", "Sí, tiene su propia gramática", "Es español representado con las manos"], 1, "La LSM tiene estructura y gramática propias."],
        ["¿Qué elementos ayudan a comunicar en LSM?", ["Solo la voz", "Únicamente los labios", "Manos, espacio y expresiones faciales"], 2, "La comunicación visual combina varios elementos."],
        ["¿La LSM es igual en todos los países?", ["No, existen distintas lenguas de señas", "Sí, es universal", "Solo cambia el alfabeto"], 0, "Cada comunidad puede tener su propia lengua de señas."],
        ["¿Qué debes hacer si no sabes cómo comunicarse una persona?", ["Suponerlo", "Preguntarle respetuosamente", "Ignorarla"], 1, "Lo adecuado es preguntar y respetar su preferencia."],
        ["¿Por qué importa la expresión facial?", ["Nunca importa", "Solo sirve para decorar", "Puede aportar información lingüística"], 2, "Las expresiones faciales pueden formar parte del mensaje."],
        ["¿Qué ayuda a ver las señas con claridad?", ["Buena iluminación", "Tapar las manos", "Mirar hacia otro lado"], 0, "La iluminación facilita la comunicación visual."],
        ["¿Todas las personas sordas usan LSM?", ["Sí, sin excepción", "No, sus preferencias pueden variar", "Solo las personas mayores"], 1, "Cada persona puede tener diferentes preferencias comunicativas."],
        ["¿Qué actitud es adecuada?", ["Burlarse de los errores", "Hablar por la persona", "Mostrar respeto y paciencia"], 2, "El respeto favorece una comunicación inclusiva."],
        ["¿La LSM es simplemente español con señas?", ["No, tiene su propia gramática", "Sí, exactamente", "Solo cuando se escribe"], 0, "La LSM no es una traducción palabra por palabra del español."]
      ]
    },
    {
      titulo: "Abecedario y deletreo",
      nivel: "Nivel 1 · Principiante",
      icono: "🔤",
      color: "#fce8f1",
      descripcion: "Aprende para qué sirve el alfabeto manual y cómo practicar el deletreo.",
      lecciones: [
        {
          titulo: "El alfabeto manual",
          texto: "El alfabeto manual representa letras mediante configuraciones de la mano. Puede utilizarse para deletrear nombres propios, apellidos o palabras para las que no conoces una seña.",
          nota: "Las configuraciones deben aprenderse con referencias visuales confiables de LSM."
        },
        {
          titulo: "Deletrear nombres",
          texto: "Cuando necesitas comunicar un nombre propio, puedes aprender a deletrearlo con el alfabeto manual de la LSM. Practica despacio y procura que cada configuración se vea con claridad.",
          nota: "No confundas el alfabeto manual con todas las señas de la lengua."
        },
        {
          titulo: "Practicar con cuidado",
          texto: "Observa materiales educativos elaborados por personas sordas o docentes de LSM. La orientación de la palma, la posición y el movimiento pueden ser importantes.",
          nota: "Las tarjetas de esta aplicación son para practicar conceptos; no sustituyen una demostración correcta de cada letra."
        }
      ],
      preguntas: [
        ["¿Para qué puede utilizarse el alfabeto manual?", ["Para deletrear nombres propios", "Para sustituir toda la gramática", "Para hablar en voz alta"], 0, "Puede servir para deletrear nombres y otras palabras."],
        ["¿Qué representa cada configuración del alfabeto manual?", ["Un sonido musical", "Una letra", "Siempre una oración completa"], 1, "Cada configuración corresponde a una letra del alfabeto manual."],
        ["¿Qué conviene hacer para aprender las letras?", ["Inventar las posiciones", "Aprender solo por el nombre", "Consultar referencias confiables de LSM"], 2, "Es importante estudiar las configuraciones correctas."],
        ["¿El alfabeto manual y la LSM son exactamente lo mismo?", ["No, el alfabeto es solo un recurso dentro de la comunicación", "Sí", "El alfabeto no se utiliza"], 0, "El alfabeto manual es una herramienta, no toda la lengua."],
        ["¿Cuándo puede ser útil deletrear?", ["Para evitar mirar a la persona", "Al comunicar un nombre propio", "Para reemplazar toda conversación"], 1, "Los nombres propios son un ejemplo frecuente."],
        ["¿Qué debes cuidar al mostrar una letra?", ["Hacerla lo más rápido posible", "Ocultar la mano", "La posición y orientación de la mano"], 2, "La claridad visual es importante."],
        ["¿Qué material es recomendable consultar?", ["Videos confiables de docentes o personas sordas usuarias de LSM", "Cualquier dibujo sin explicación", "Señas de otro país sin verificar"], 0, "Busca recursos que enseñen específicamente LSM."],
        ["¿Qué hacer si una letra te cuesta trabajo?", ["Abandonar la práctica", "Practicar despacio y revisar el modelo", "Cambiarla por una letra inventada"], 1, "La práctica cuidadosa ayuda a mejorar."],
        ["¿El alfabeto manual reemplaza la gramática de la LSM?", ["Sí, por completo", "Solo en conversaciones largas", "No"], 2, "La LSM tiene una gramática propia."],
        ["¿Qué objetivo tiene el deletreo?", ["Representar letras para comunicar una palabra", "Traducir automáticamente cualquier frase", "Evitar la comunicación visual"], 0, "El deletreo representa letras mediante el alfabeto manual."]
      ]
    },
    {
      titulo: "Saludos y expresiones",
      nivel: "Nivel 1 · Principiante",
      icono: "💬",
      color: "#e2f7ec",
      descripcion: "Aprende a iniciar una conversación y a practicar expresiones cotidianas.",
      lecciones: [
        {
          titulo: "Iniciar una conversación",
          texto: "Los saludos ayudan a iniciar una interacción. Para aprender las señas de hola, buenos días o buenas tardes, observa demostraciones de LSM y presta atención a la configuración, orientación y movimiento.",
          nota: "Esta lección explica el uso; consulta un modelo visual confiable para aprender cada seña."
        },
        {
          titulo: "Presentarte",
          texto: "En una presentación puedes compartir tu nombre y preguntar el de la otra persona. Para nombres propios, el deletreo manual puede ser útil.",
          nota: "Respeta el ritmo de la conversación y permite que la otra persona responda."
        },
        {
          titulo: "Cortesía y despedidas",
          texto: "Expresiones como gracias, por favor y adiós ayudan a mantener una conversación amable. Aprende sus formas en LSM mediante recursos adecuados y practica su uso en contexto.",
          nota: "Una expresión no verbal puede depender del contexto y de la gramática de la LSM."
        }
      ],
      preguntas: [
        ["¿Qué función tiene un saludo?", ["Iniciar una interacción", "Terminar toda comunicación", "Sustituir el alfabeto"], 0, "Los saludos ayudan a comenzar una conversación."],
        ["¿Cómo puedes comunicar tu nombre propio?", ["Inventando una seña", "Deletreándolo con el alfabeto manual", "Escribiéndolo en el aire siempre"], 1, "El alfabeto manual puede servir para los nombres."],
        ["¿Qué recurso conviene usar para aprender una seña?", ["Una imagen sin contexto", "Un gesto inventado", "Una demostración confiable de LSM"], 2, "Los modelos visuales confiables permiten observar la seña."],
        ["¿Qué debes hacer después de saludar?", ["Dar espacio para que la persona responda", "Hablar por ella", "Mirar a otro lado"], 0, "La comunicación es una interacción entre personas."],
        ["¿Cuál es una expresión de cortesía?", ["Ventana", "Gracias", "Triángulo"], 1, "Gracias es una expresión de cortesía."],
        ["¿Cómo se aprende correctamente una despedida en LSM?", ["Solo leyendo su nombre", "Copiando una seña de cualquier país", "Observando su ejecución en LSM"], 2, "La forma visual debe corresponder a la LSM."],
        ["¿Qué ayuda a practicar un saludo?", ["Ensayarlo en un contexto de conversación", "No observar las manos", "Cambiar la seña cada vez"], 0, "Practicar en contexto ayuda a recordar su uso."],
        ["¿Qué es importante en una presentación?", ["Interrumpir siempre", "Comunicar con claridad y respeto", "Evitar que la otra persona participe"], 1, "Una presentación debe permitir el intercambio."],
        ["¿Las señas de otras lenguas de señas siempre son iguales a las de LSM?", ["Sí", "Solo en saludos", "No necesariamente"], 2, "Las lenguas de señas pueden variar entre comunidades."],
        ["¿Qué actitud favorece la conversación?", ["Paciencia y respeto", "Burlarse de los errores", "Apresurar a la otra persona"], 0, "La paciencia y el respeto ayudan a comunicarse."]
      ]
    },
    {
      titulo: "Familia y personas",
      nivel: "Nivel 2 · Básico",
      icono: "👨‍👩‍👧",
      color: "#fff0d9",
      descripcion: "Aprende vocabulario relacionado con la familia, las personas y las relaciones.",
      lecciones: [
        {
          titulo: "Hablar de la familia",
          texto: "La familia puede incluir mamá, papá, hermanos, abuelos y otras personas importantes. Para aprender cada seña, busca demostraciones específicas de LSM y observa sus diferencias.",
          nota: "Las relaciones familiares y las formas de nombrarlas pueden variar entre familias."
        },
        {
          titulo: "Describir personas",
          texto: "Para hablar de una persona, puedes necesitar información como su nombre o relación contigo. En LSM, el orden de los elementos puede diferir del español hablado.",
          nota: "Evita traducir automáticamente palabra por palabra."
        },
        {
          titulo: "Conversar sobre otras personas",
          texto: "Al hablar de alguien, procura ser respetuoso y dar información relevante. La referencia a personas y el espacio de señas pueden ayudar a organizar el discurso.",
          nota: "Aprende el uso del espacio y las referencias personales con un docente o recurso confiable."
        }
      ],
      preguntas: [
        ["¿Qué vocabulario se estudia en este curso?", ["Familia y personas", "Operaciones matemáticas", "Partes de una computadora"], 0, "El curso se centra en familia y personas."],
        ["¿Cómo debes aprender la seña de mamá?", ["Inventando una forma", "Consultando una demostración de LSM", "Usando obligatoriamente una seña extranjera"], 1, "Debes verificar la seña específica de LSM."],
        ["¿La estructura de una frase en LSM siempre copia al español?", ["Sí", "Solo con la familia", "No, puede tener una estructura propia"], 2, "La LSM tiene gramática propia."],
        ["¿Qué actitud debes tener al hablar de otras personas?", ["Respeto", "Burla", "Desinterés"], 0, "El respeto es esencial en la comunicación."],
        ["¿Qué puede ayudarte a identificar a una persona en una conversación?", ["Cambiar su nombre", "Dar una referencia clara", "Evitar cualquier contexto"], 1, "Las referencias claras ayudan a comprender."],
        ["¿El vocabulario familiar puede variar según la situación?", ["Nunca", "Solo en textos", "Sí, el contexto importa"], 2, "El contexto ayuda a interpretar el mensaje."],
        ["¿Qué debes evitar al aprender vocabulario?", ["Usar fuentes confiables", "Inventar señas y presentarlas como oficiales", "Practicar con paciencia"], 1, "No presentes señas inventadas como vocabulario oficial."],
        ["¿Qué permite organizar referencias en una conversación en LSM?", ["El uso del espacio de señas", "Solo la voz", "La puntuación escrita"], 0, "El espacio puede contribuir a organizar referencias."],
        ["¿Cómo debes practicar palabras de familia?", ["Solo memorizando sus nombres en español", "Sin observar la ejecución", "Con demostraciones y práctica contextual"], 2, "Observar la forma y practicar en contexto ayuda."],
        ["¿Qué hacer si no entiendes una referencia?", ["Pedir aclaración de manera respetuosa", "Adivinar siempre", "Terminar la conversación sin avisar"], 0, "Pedir aclaración puede resolver la confusión."]
      ]
    },
    {
      titulo: "Números y vida diaria",
      nivel: "Nivel 2 · Básico",
      icono: "🔢",
      color: "#eee5ff",
      descripcion: "Conoce situaciones cotidianas en las que se usan números y referencias de tiempo.",
      lecciones: [
        {
          titulo: "Números en contexto",
          texto: "Los números pueden servir para hablar de cantidades, edades, precios y otras informaciones. Aprende las configuraciones numéricas de LSM mediante un recurso visual confiable.",
          nota: "No uses las poses de ejemplo del traductor como si fueran señas verificadas."
        },
        {
          titulo: "Tiempo y actividades",
          texto: "Para hablar de horarios o actividades diarias, necesitas vocabulario relacionado con el tiempo y las acciones. La organización temporal en LSM no siempre coincide con la del español.",
          nota: "Estudia ejemplos completos en LSM, no solo palabras aisladas."
        },
        {
          titulo: "Preguntas cotidianas",
          texto: "En situaciones diarias puedes preguntar por una cantidad, una hora o una actividad. Las expresiones faciales y la estructura de la pregunta pueden ser importantes.",
          nota: "Aprende cómo se forman preguntas en LSM con material educativo confiable."
        }
      ],
      preguntas: [
        ["¿Para qué pueden utilizarse los números?", ["Cantidades, edades y precios", "Solo para saludar", "Para reemplazar expresiones faciales"], 0, "Los números aparecen en muchas situaciones cotidianas."],
        ["¿Cómo conviene aprender los números en LSM?", ["Usando cualquier pose", "Con referencias visuales confiables", "Inventando movimientos"], 1, "Las configuraciones deben aprenderse correctamente."],
        ["¿La expresión de tiempo en LSM siempre sigue el orden del español?", ["Sí, sin excepción", "Solo en preguntas", "No necesariamente"], 2, "La estructura de la LSM puede diferir del español."],
        ["¿Qué puede expresar un número en una conversación?", ["Una edad", "Solo una despedida", "Únicamente una emoción"], 0, "La edad es un ejemplo de información numérica."],
        ["¿Qué más se necesita para hablar de una actividad diaria?", ["Solo números", "Vocabulario de acciones y tiempo", "Únicamente el alfabeto"], 1, "Las actividades requieren vocabulario adecuado."],
        ["¿Qué puede aportar una expresión facial en una pregunta?", ["Nada nunca", "Solo decoración", "Información lingüística"], 2, "Las expresiones faciales pueden aportar información."],
        ["¿Qué conviene estudiar además de palabras sueltas?", ["Ejemplos completos en contexto", "Solo listas en español", "Movimientos inventados"], 0, "Los ejemplos completos muestran cómo se usa la lengua."],
        ["¿Qué debes hacer si no comprendes una hora o cantidad?", ["Adivinar", "Pedir que la repitan o aclaren", "Ignorarla"], 1, "Pedir aclaración evita malentendidos."],
        ["¿Las poses de ejemplo de una aplicación son necesariamente correctas?", ["Sí, siempre", "Solo si son animadas", "No, deben verificarse"], 2, "Una animación no garantiza que la seña sea correcta."],
        ["¿Cuál es una buena forma de practicar?", ["Situaciones cotidianas con material confiable", "Memorizar sin contexto", "Evitar practicar"], 0, "Practicar en contexto ayuda a aplicar lo aprendido."]
      ]
    },
    {
      titulo: "Conversaciones y gramática",
      nivel: "Nivel 2 · Básico",
      icono: "🤝",
      color: "#dff5f6",
      descripcion: "Integra lo aprendido para comunicar ideas con claridad y respeto.",
      lecciones: [
        {
          titulo: "Construir mensajes",
          texto: "Una conversación se forma con mensajes que tienen sentido en contexto. La LSM utiliza recursos visuales y una gramática propia; no basta con traducir cada palabra española por separado.",
          nota: "Aprende estructuras mediante ejemplos de usuarios competentes de LSM."
        },
        {
          titulo: "Preguntar y responder",
          texto: "Una conversación permite hacer preguntas, responder y confirmar si el mensaje se comprendió. La expresión facial, el contexto y la organización del mensaje pueden ayudar a identificar una pregunta.",
          nota: "Practica diálogos con una persona docente o una comunidad usuaria de LSM."
        },
        {
          titulo: "Conversar con respeto",
          texto: "Cuando practiques con otra persona, mira el mensaje visual, respeta los turnos y pide aclaraciones cuando lo necesites. Si cometes un error, corrígelo con disposición para aprender.",
          nota: "La práctica con personas usuarias de LSM es valiosa para desarrollar comunicación real."
        }
      ],
      preguntas: [
        ["¿La LSM tiene gramática propia?", ["Sí", "No", "Solo cuando se escribe"], 0, "La LSM es una lengua con gramática propia."],
        ["¿Qué es mejor que traducir palabra por palabra?", ["Ignorar el contexto", "Aprender estructuras propias de la LSM", "Usar señas inventadas"], 1, "Las estructuras deben aprenderse dentro de la lengua."],
        ["¿Qué puede ayudar a reconocer una pregunta?", ["Solo el color de la ropa", "Únicamente la voz", "La expresión facial y la estructura"], 2, "Los recursos visuales y lingüísticos ayudan a comprender preguntas."],
        ["¿Qué debes hacer si no comprendes un mensaje?", ["Pedir una aclaración respetuosa", "Adivinar y continuar", "Burlarte"], 0, "Pedir aclaración ayuda a mantener una conversación clara."],
        ["¿Cómo se mejora la comunicación en LSM?", ["Evitando a sus usuarios", "Practicando con recursos confiables y personas competentes", "Memorizando solo palabras españolas"], 1, "La práctica adecuada mejora la comprensión y la expresión."],
        ["¿Qué actitud es útil al cometer un error?", ["Ocultarlo siempre", "Dejar de aprender", "Aceptar la corrección y practicar"], 2, "La retroalimentación forma parte del aprendizaje."],
        ["¿Qué significa respetar los turnos?", ["Permitir que ambas personas participen", "Interrumpir constantemente", "No dejar responder"], 0, "Los turnos permiten una conversación equilibrada."],
        ["¿El contexto puede cambiar cómo se interpreta un mensaje?", ["Nunca", "Sí", "Solo en español escrito"], 1, "El contexto ayuda a interpretar los mensajes."],
        ["¿Qué debe hacer una aplicación educativa con las señas no verificadas?", ["Presentarlas como oficiales", "Ocultar toda advertencia", "Aclarar sus limitaciones"], 2, "Es importante distinguir material de práctica de señas verificadas."],
        ["¿Cuál es la meta de este curso?", ["Integrar lo aprendido para comunicarse con respeto", "Aprender una lengua universal inventada", "Sustituir a las personas usuarias de LSM"], 0, "El objetivo es desarrollar una base de comunicación respetuosa."]
      ]
    }
  ];
cursos.push(
    ...[
        {
            titulo: "Colores y objetos",
            nivel: "Básico",
            icono: "🎨",
            color: "#F59E0B",
            descripcion: "Aprende señas relacionadas con colores y objetos cotidianos."
        },
        {
            titulo: "Animales",
            nivel: "Básico",
            icono: "🐾",
            color: "#84CC16",
            descripcion: "Conoce señas para identificar animales."
        },
        {
            titulo: "Alimentos y bebidas",
            nivel: "Básico",
            icono: "🍎",
            color: "#EF4444",
            descripcion: "Aprende a comunicar alimentos y bebidas."
        },
        {
            titulo: "Días y meses",
            nivel: "Básico",
            icono: "📅",
            color: "#8B5CF6",
            descripcion: "Practica los días de la semana y los meses."
        },
        {
            titulo: "Emociones y sentimientos",
            nivel: "Básico",
            icono: "😊",
            color: "#EC4899",
            descripcion: "Expresa emociones y sentimientos en LSM."
        },
        {
            titulo: "Partes del cuerpo",
            nivel: "Básico",
            icono: "🧍",
            color: "#06B6D4",
            descripcion: "Identifica las partes del cuerpo mediante señas."
        },
        {
            titulo: "Ropa y accesorios",
            nivel: "Básico",
            icono: "👕",
            color: "#F97316",
            descripcion: "Aprende vocabulario sobre prendas y accesorios."
        },
        {
            titulo: "Lugares de la ciudad",
            nivel: "Intermedio",
            icono: "🏙️",
            color: "#64748B",
            descripcion: "Comunica nombres de lugares y sitios públicos."
        },
        {
            titulo: "Escuela y educación",
            nivel: "Intermedio",
            icono: "🎓",
            color: "#3B82F6",
            descripcion: "Aprende señas útiles para el entorno escolar."
        },
        {
            titulo: "Profesiones y trabajos",
            nivel: "Intermedio",
            icono: "👩‍⚕️",
            color: "#14B8A6",
            descripcion: "Conoce señas de profesiones y ocupaciones."
        },
        {
            titulo: "Transporte y viajes",
            nivel: "Intermedio",
            icono: "🚌",
            color: "#EAB308",
            descripcion: "Aprende a hablar sobre transportes y viajes."
        },
        {
            titulo: "Tiempo y clima",
            nivel: "Intermedio",
            icono: "🌦️",
            color: "#0EA5E9",
            descripcion: "Comunica condiciones del clima y del tiempo."
        },
        {
            titulo: "Casa y habitaciones",
            nivel: "Intermedio",
            icono: "🏠",
            color: "#A855F7",
            descripcion: "Aprende señas relacionadas con el hogar."
        },
        {
            titulo: "Preguntas frecuentes",
            nivel: "Intermedio",
            icono: "❓",
            color: "#6366F1",
            descripcion: "Practica cómo formular preguntas comunes."
        },
        {
            titulo: "Verbos cotidianos",
            nivel: "Intermedio",
            icono: "🏃",
            color: "#22C55E",
            descripcion: "Aprende acciones que usas todos los días."
        },
        {
            titulo: "Descripciones de personas",
            nivel: "Intermedio",
            icono: "👥",
            color: "#D946EF",
            descripcion: "Practica cómo describir personas con respeto."
        },
        {
            titulo: "Salud y bienestar",
            nivel: "Intermedio",
            icono: "🩺",
            color: "#10B981",
            descripcion: "Aprende vocabulario básico sobre salud."
        },
        {
            titulo: "Tecnología y comunicación",
            nivel: "Avanzado",
            icono: "💻",
            color: "#475569",
            descripcion: "Comunica conceptos de tecnología y dispositivos."
        },
        {
            titulo: "Situaciones de emergencia",
            nivel: "Avanzado",
            icono: "🆘",
            color: "#DC2626",
            descripcion: "Practica expresiones importantes para pedir ayuda."
        },
        {
            titulo: "Cultura y comunidad sorda",
            nivel: "Avanzado",
            icono: "🤟",
            color: "#7C3AED",
            descripcion: "Conoce aspectos culturales y de convivencia de la comunidad sorda."
        }
    ].map((base, indice) => ({
        ...base,
        lecciones: [
            {
                titulo: "Conoce el tema",
                contenido: `En este curso aprenderás conceptos básicos sobre ${base.titulo.toLowerCase()}. Observa las señas que te enseñe tu material de LSM y practica sus movimientos y expresiones.`
            },
            {
                titulo: "Observa y practica",
                contenido: `Repasa el vocabulario de ${base.titulo.toLowerCase()}. Practica cada seña frente a un espejo y presta atención a la configuración de las manos, la orientación, el movimiento y las expresiones faciales.`
            },
            {
                titulo: "Aplica lo aprendido",
                contenido: `Utiliza lo aprendido sobre ${base.titulo.toLowerCase()} en situaciones cotidianas. Recuerda que la LSM tiene características propias y no consiste en traducir palabra por palabra el español.`
            }
        ],
        preguntas: Array.from({ length: 10 }, (_, i) => ({
            texto: [
                `¿Cuál es el objetivo principal del curso "${base.titulo}"?`,
                "¿Qué debes observar al aprender una seña?",
                "¿Por qué es importante practicar las señas?",
                "¿Qué papel tienen las expresiones faciales en la LSM?",
                "¿Cómo puedes mejorar tu aprendizaje de la LSM?",
                "¿Qué debes hacer si no comprendes una seña?",
                "¿Cómo debes interactuar con una persona sorda?",
                "¿La LSM es igual en todos los países?",
                "¿Qué ayuda a recordar el vocabulario aprendido?",
                "¿Cómo puedes aplicar lo aprendido en este curso?"
            ][i],
            opciones: [
                [
                    `Aprender vocabulario relacionado con ${base.titulo.toLowerCase()}.`,
                    "Aprender únicamente a escribir en español.",
                    "Usar las mismas señas para todas las palabras."
                ],
                [
                    "La forma, orientación y movimiento de las manos.",
                    "Solamente el sonido de la palabra.",
                    "Únicamente el movimiento de los pies."
                ],
                [
                    "Para desarrollar comprensión y fluidez.",
                    "Para evitar observar las señas.",
                    "Para sustituir todas las conversaciones."
                ],
                [
                    "Ayudan a expresar información y significado.",
                    "Nunca tienen importancia.",
                    "Solo sirven para decorar la conversación."
                ],
                [
                    "Practicar y observar modelos correctos.",
                    "Inventar señas sin consultar fuentes.",
                    "Evitar interactuar con otras personas."
                ],
                [
                    "Pedir que te la expliquen o muestren de nuevo.",
                    "Fingir que la entendiste.",
                    "Cambiarla por cualquier movimiento."
                ],
                [
                    "Con respeto, atención y comunicación accesible.",
                    "Ignorando sus preferencias de comunicación.",
                    "Gritando todas las palabras."
                ],
                [
                    "No; existen distintas lenguas de señas.",
                    "Sí, todas son idénticas.",
                    "Sí, porque son gestos universales."
                ],
                [
                    "Repasar y practicar en contexto.",
                    "Estudiar una vez y nunca volver a practicar.",
                    "Memorizar sin comprender."
                ],
                [
                    "Usarla en contextos reales y respetuosos.",
                    "Usarla para burlarse de otras personas.",
                    "Reemplazarla siempre por gestos inventados."
                ]
            ][i],
            respuestaCorrecta: 0,
            retroalimentacion: [
                "Correcto: el curso busca desarrollar vocabulario relacionado con su tema.",
                "Correcto: la forma, orientación y movimiento pueden ser importantes.",
                "Correcto: la práctica fortalece el aprendizaje.",
                "Correcto: las expresiones faciales también comunican información.",
                "Correcto: observar modelos y practicar ayuda a aprender.",
                "Correcto: puedes pedir una explicación o demostración.",
                "Correcto: la comunicación debe ser respetuosa y accesible.",
                "Correcto: cada país o comunidad puede tener su propia lengua de señas.",
                "Correcto: repasar en contexto ayuda a recordar.",
                "Correcto: lo aprendido puede aplicarse en situaciones cotidianas."
            ][i]
        }))
    }))
);
  const $ = (id) => document.getElementById(id);
  let cursoActual = null;
  let pasoActual = 0;
  let preguntaActual = 0;
  let aciertos = 0;
  let respondida = false;
  let modo = "leccion";

  let progreso = {};
  try {
    progreso = JSON.parse(localStorage.getItem("floubyProgresoCursos") || "{}");
  } catch (_) {
    progreso = {};
  }

  function guardarProgreso() {
    try {
      localStorage.setItem("floubyProgresoCursos", JSON.stringify(progreso));
    } catch (_) {}
  }

  function mostrarSeccion(id) {
    document.querySelectorAll("main > section").forEach((seccion) => {
      seccion.classList.toggle("activo", seccion.id === id);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function actualizarProgreso() {
    const terminados = cursos.filter((_, i) => progreso[i]?.completado).length;
    const texto = $("texto-progreso");
    const barra = $("barra-general");

    if (texto) texto.textContent = `${terminados} de ${cursos.length} cursos completados`;
    if (barra) barra.style.width = `${terminados / cursos.length * 100}%`;

    document.querySelectorAll(".boton-curso").forEach((boton) => {
      const i = Number(boton.dataset.curso);
      const estado = progreso[i];
      const etiqueta = boton.querySelector(".estado-curso");
      if (etiqueta) etiqueta.textContent = estado?.completado
        ? `✓ Completado · ${estado.puntuacion}%`
        : "Disponible para aprender";
    });
  }

  function cargarCursos() {
    const lista = $("lista-cursos");
    if (!lista) {
      console.error('Flouby: no existe el elemento con id="lista-cursos".');
      return;
    }

    lista.innerHTML = "";

    cursos.forEach((curso, i) => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta tarjeta-curso";
      tarjeta.innerHTML = `
        <div class="icono-curso" style="background:${curso.color}">${curso.icono}</div>
        <span class="etiqueta">${curso.nivel}</span>
        <h3>${curso.titulo}</h3>
        <p>${curso.descripcion}</p>
        <p class="estado-curso">Disponible para aprender</p>
        <button class="boton boton-curso" type="button" data-curso="${i}">
          ${progreso[i]?.completado ? "Repasar curso" : "Comenzar curso"} →
        </button>
      `;
      lista.appendChild(tarjeta);
    });

    actualizarProgreso();
  }

  function abrirCurso(indice) {
    cursoActual = cursos[indice];
    if (!cursoActual) return;

    pasoActual = 0;
    preguntaActual = 0;
    aciertos = 0;
    respondida = false;
    modo = "leccion";

    $("leccion-titulo").textContent = cursoActual.titulo;
    $("leccion-descripcion").textContent = cursoActual.descripcion;
    $("leccion-nivel").textContent = cursoActual.nivel.toUpperCase();

    mostrarSeccion("leccion");
    mostrarLeccion();
  }

  function mostrarLeccion() {
    modo = "leccion";
    $("contenido-explicacion").hidden = false;
    $("actividad").hidden = true;

    const leccion = cursoActual.lecciones[pasoActual];
    $("paso-actual").textContent = `Lección ${pasoActual + 1} de ${cursoActual.lecciones.length}`;
    $("barra-leccion").style.width = `${(pasoActual + 1) / (cursoActual.lecciones.length + 1) * 100}%`;
    $("numero-paso").textContent = String(pasoActual + 1).padStart(2, "0");
    $("titulo-explicacion").textContent = leccion.titulo;
    $("texto-explicacion").textContent = leccion.texto;
    $("nota-leccion").textContent = leccion.nota;
    $("ejemplo-visual").innerHTML = `<span aria-hidden="true">${cursoActual.icono}</span><p>${leccion.titulo}</p>`;

    $("paso-anterior").disabled = pasoActual === 0;
    $("paso-siguiente").textContent =
      pasoActual === cursoActual.lecciones.length - 1
        ? "Comenzar evaluación →"
        : "Siguiente lección →";
  }

  function comenzarEvaluacion() {
    modo = "quiz";
    preguntaActual = 0;
    aciertos = 0;
    respondida = false;
    $("contenido-explicacion").hidden = true;
    $("actividad").hidden = false;
    $("paso-anterior").disabled = true;
    $("paso-siguiente").textContent = "Siguiente pregunta →";
    mostrarPregunta();
  }

  function mostrarPregunta() {
    respondida = false;
    const pregunta = cursoActual.preguntas[preguntaActual];

    $("paso-actual-actividad").textContent =
      `Pregunta ${preguntaActual + 1} de ${cursoActual.preguntas.length}`;
    $("pregunta-quiz").textContent = pregunta[0];
    $("resultado-quiz").textContent = "";
    $("opciones-quiz").innerHTML = "";

    pregunta[1].forEach((opcion, i) => {
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "opcion-quiz";
      boton.textContent = `${String.fromCharCode(65 + i)}. ${opcion}`;
      boton.addEventListener("click", () => responder(i, boton));
      $("opciones-quiz").appendChild(boton);
    });

    $("paso-siguiente").disabled = true;
    $("paso-siguiente").textContent =
      preguntaActual === cursoActual.preguntas.length - 1
        ? "Ver resultado"
        : "Siguiente pregunta →";
    $("barra-leccion").style.width =
      `${(cursoActual.lecciones.length + preguntaActual + 1) /
        (cursoActual.lecciones.length + cursoActual.preguntas.length) * 100}%`;
  }

  function responder(indice, botonElegido) {
    if (respondida) return;
    respondida = true;

    const pregunta = cursoActual.preguntas[preguntaActual];
    const botones = $("opciones-quiz").querySelectorAll("button");
    botones.forEach((boton) => {
      boton.disabled = true;
    });

    const correcto = indice === pregunta[2];
    if (correcto) aciertos++;

    botonElegido.classList.add(correcto ? "correcta" : "incorrecta");
    if (!correcto) botones[pregunta[2]]?.classList.add("correcta");

    $("resultado-quiz").textContent =
      `${correcto ? "¡Correcto!" : "Respuesta incorrecta."} ${pregunta[3]}`;
    $("paso-siguiente").disabled = false;
  }

  function finalizarCurso() {
    modo = "resultado";
    const puntuacion = Math.round(aciertos / cursoActual.preguntas.length * 100);
    const indice = cursos.indexOf(cursoActual);
    progreso[indice] = {
      completado: true,
      puntuacion,
      fecha: new Date().toISOString()
    };
    guardarProgreso();
    cargarCursos();

    $("actividad").hidden = false;
    $("contenido-explicacion").hidden = true;
    $("paso-actual-actividad").textContent = "Evaluación terminada";
    $("pregunta-quiz").textContent = `Obtuviste ${aciertos} de ${cursoActual.preguntas.length} respuestas correctas`;
    $("opciones-quiz").innerHTML = `
      <div class="resultado-final">
        <div class="resultado-circulo">${puntuacion}%</div>
        <h3>${puntuacion >= 70 ? "¡Buen trabajo!" : "¡Sigue practicando!"}</h3>
        <p>${puntuacion >= 70
          ? "Has terminado esta evaluación. Puedes repasar las lecciones cuando quieras."
          : "Revisa las lecciones y vuelve a intentarlo para reforzar lo aprendido."}</p>
      </div>
    `;
    $("resultado-quiz").textContent = puntuacion >= 70
      ? "Curso registrado como completado."
      : "Curso registrado. Puedes repetir la evaluación para mejorar tu resultado.";
    $("paso-siguiente").disabled = false;
    $("paso-siguiente").textContent = "Volver a los cursos";
    $("paso-anterior").disabled = true;
  }

  function siguiente() {
    if (!cursoActual) return;
if (modo === "resultado") {
  volverCursos();
  return;
}
    if (modo === "leccion") {
      if (pasoActual < cursoActual.lecciones.length - 1) {
        pasoActual++;
        mostrarLeccion();
      } else {
        comenzarEvaluacion();
      }
      return;
    }

    if (modo === "quiz") {
      if (!respondida) return;
      if (preguntaActual < cursoActual.preguntas.length - 1) {
        preguntaActual++;
        mostrarPregunta();
      } else {
        finalizarCurso();
      }
      return;
    }

    mostrarSeccion("cursos");
  }

  function volverCursos() {
    cursoActual = null;
    mostrarSeccion("cursos");
    cargarCursos();
  }

  document.addEventListener("click", (evento) => {
    const botonCurso = evento.target.closest(".boton-curso");
    if (botonCurso) {
      abrirCurso(Number(botonCurso.dataset.curso));
    }
  });

  $("paso-siguiente")?.addEventListener("click", siguiente);

  $("paso-anterior")?.addEventListener("click", () => {
    if (modo === "leccion" && pasoActual > 0) {
      pasoActual--;
      mostrarLeccion();
    }
  });

  $("volver-cursos")?.addEventListener("click", volverCursos);

  // Se ejecuta al cargar la página y crea las seis tarjetas.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cargarCursos);
  } else {
    cargarCursos();
  }
})();
