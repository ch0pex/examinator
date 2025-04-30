const questions = [
    {
      "id": 1,
      "question": "La herramienta de la \"mentoría social\" surge desde la perspectiva de... para la atención comunitaria en salud mental.",
      "options": {
        "a": "los expertos por experiencia",
        "b": "la recuperación",
        "c": "la red comunitaria"
      },
      "answer": "a)"
    },
    {
      "id": 2,
      "question": "El diagnóstico comunitario consta de 2 fases:",
      "options": {
        "a": "explorar la comunidad e identificar las necesidades y recursos",
        "b": "explorar la comunidad y crear un grupo promotor",
        "c": "crear un grupo promotor e identificar necesidades y recursos"
      },
      "answer": "a)"
    },
    {
      "id": 3,
      "question": "Dentro de una intervención:",
      "options": {
        "a": "La visión describe el objetivo principal",
        "b": "Se realiza un mapa de activos sobre servicios concretos",
        "c": "La misión describe el objetivo principal"
      },
      "answer": "c)"
    },
    {
      "id": 4,
      "question": "Desde la perspectiva ética, ¿qué principio es clave en la atención en la salud mental comunitaria según el enfoque de derechos humanos?",
      "options": {
        "a": "La institucionalización de los pacientes para garantizar un entorno seguro",
        "b": "El derecho de las personas a acceder a una atención basada en necesidades en un entorno lo menos restrictivo posible",
        "c": "El tratamiento farmacológico sobre cualquier otra forma de intervención"
      },
      "answer": "b)"
    },
    {
      "id": 5,
      "question": "¿Cuáles son las dimensiones de la recuperación en salud mental según Anthony (1993)?",
      "options": {
        "a": "Dimensión clínica, funcional y personal",
        "b": "Dimensión física, emocional y social",
        "c": "Dimensión terapéutica, farmacológica y ocupacional"
      },
      "answer": "a)"
    },
    {
      "id": 6,
      "question": "¿Cuáles son los elementos clave en la mentoría social?",
      "options": {
        "a": "Acompañamiento, voluntariedad, vínculo de confianza y respeto, contexto de informalidad y equipo técnico",
        "b": "Autoridad, supervisión constante, evaluación de desempeño y seguimiento obligatorio",
        "c": "Relación jerárquica, imposición de normas, asesoramiento profesional obligatorio y control externo"
      },
      "answer": "a)"
    },
    {
      "id": 7,
      "question": "¿Cuál de los siguientes NO es un determinante social de la salud?",
      "options": {
        "a": "Las condiciones laborales",
        "b": "La genética",
        "c": "La educación"
      },
      "answer": "b)"
    },
    {
      "id": 8,
      "question": "El modelo de déficit:",
      "options": {
        "a": "Busca una solución profesional ante el problema de una comunidad.",
        "b": "Sitúa su foco sobre las fortalezas, bienestar y capacidades presentes en una comunidad/barrio concreto",
        "c": "Busca una solución profesional ante el problema particular de una persona."
      },
      "answer": "c)"
    },
    {
      "id": 9,
      "question": "Basado en el modelo de activos para la salud, seleccione la respuesta más adecuada:",
      "options": {
        "a": "Prioriza la atención médica individualizada como el medio principal para mejorar la salud de la comunidad.",
        "b": "Se centra en la movilización y fortalecimiento de recursos comunitarios y personales para promover la salud y el bienestar.",
        "c": "Enfatiza la identificación y reducción de factores de riesgo en la comunidad para prevenir enfermedades, sin involucrar a los residentes."
      },
      "answer": "b)"
    },
    {
      "id": 10,
      "question": "Uno de los aspectos claves para programas anti-estigma basados en el contacto es:",
      "options": {
        "a": "El mensaje se centra en el problema sin enfatizar la recuperación",
        "b": "Las presentaciones cara a cara no incluyen debate con el público",
        "c": "Los presentadores tienen experiencia en problemas de salud mental"
      },
      "answer": "c)"
    },
    {
      "id": 11,
      "question": "Una red de servicios de salud mental basada en la comunidad:",
      "options": {
        "a": "Es una red multidisciplinar y multiservicio.",
        "b": "Las intervenciones que ofrece son genéricas, no hechas a medida.",
        "c": "Ofrece un bajo espectro de intervenciones."
      },
      "answer": "a)"
    },
    {
      "id": 12,
      "question": "Señala la opción INCORRECTA sobre la perspectiva de red comunitaria:",
      "options": {
        "a": "Un servicio de salud mental comunitario es una red dentro de una red más amplia de autoayuda, familia, amigos y otros recursos informales, y servicios generales de la comunidad.",
        "b": "La salud mental comunitaria requiere de colaboración interdisciplinar e intersectorial.",
        "c": "El objetivo de esta perspectiva es mantener la posición de los profesionales para atender a los pacientes en régimen cerrado en instituciones de salud mental."
      },
      "answer": "c)"
    },
    {
      "id": 13,
      "question": "Con respecto a las dimensiones de la recuperación, la dimensión clínica corresponde a:",
      "options": {
        "a": "Síntomas psiquiátricos.",
        "b": "Participación en la sociedad, trabajo significativo y formación.",
        "c": "Constituye la recuperación de la identidad y del yo."
      },
      "answer": "a)"
    },
    {
      "id": 14,
      "question": "La rehabilitación psicosocial se centra en:",
      "options": {
        "a": "Empoderamiento, enfoque en los déficits, inclusión social y relación de colaboración",
        "b": "Empoderamiento, enfoque en las fortalezas, exclusión social y relación de colaboración",
        "c": "Empoderamiento, enfoque en las fortalezas, inclusión social y relación de colaboración"
      },
      "answer": "с)"
    },
    {
      "id": 15,
      "question": "¿Cómo se denomina en teatro playback la actividad que hicimos por parejas en la que uno tenía que realizar un movimiento y el otro imitarlo?",
      "options": {
        "a": "Juego de espejos",
        "b": "Juego de escucha",
        "c": "Círculo de emociones"
      },
      "answer": "a)"
    },
    {
      "id": 16,
      "question": "Durante una sesión de teatro playback ¿qué componentes incluye?",
      "options": {
        "a": "actores/actrices, narrador/a, imágenes de fondo que representan lo que pasa",
        "b": "actores/actrices, conductor/a, narrador/a, música en vivo",
        "c": "NO incluye actores/actrices, son las personas que cuentan la historia los que la representan, narrador/a, conductor/a"
      },
      "answer": "b)"
    },
    {
      "id": 17,
      "question": "En el trastorno mental grave, ¿cuáles son los objetivos de intervención?",
      "options": {
        "a": "Curar el trastorno mental mediante psicofármacos, para poder rebajar cuanto antes el malestar",
        "b": "Realizar psicoterapia aislada de su contexto, centrándonos en el paciente sólamente.",
        "c": "Fomentar la salud, el manejo del malestar y la autonomía a través de la estimulación de las relaciones sociales y su comunidad."
      },
      "answer": "c)"
    },
    {
      "id": 18,
      "question": "¿Cuál No es un valor clave de la práctica profesional en la recuperación de un usuario?",
      "options": {
        "a": "Suministro de fármacos",
        "b": "Orientación hacia la persona",
        "c": "Potenciar la autodeterminación"
      },
      "answer": "a)"
    },
    {
      "id": 19,
      "question": "La investigación- acción participativa tiene:",
      "options": {
        "a": "2 componentes: acción y participación",
        "b": "3 componentes: investigación, acción y participación",
        "c": "3 componentes: formación, acción y participación"
      },
      "answer": "b)"
    },
    {
      "id": 20,
      "question": "La metodología tipo taller plantea:",
      "options": {
        "a": "3 tipos de educación: humanizante, crítica y dialógica",
        "b": "4 tipos de educación: humanizante, crítica, dialógica y colaboradora",
        "c": "4 tipos de educación: humanizante, crítica, dialógica y concienciadora"
      },
      "answer": "c)"
    },
    {
      "id": 21,
      "question": "¿Qué se observa en la siguiente imagen?",
      "options": {
        "a": "Inclusión",
        "b": "Integración",
        "c": "Segregación"
      },
      "answer": "b)"
    },
    {
      "id": 22,
      "question": "Marca la alternativa correcta acerca de la perspectiva de recuperación:",
      "options": {
        "a": "La recuperación implica condiciones internas como por ejemplo: esperanza, empoderamiento y sanación.",
        "b": "La recuperación es sinónimo de curación",
        "c": "La recuperación implica condiciones internas como por ejemplo: una cultura positiva de sanación o implementación de los derechos humanos"
      },
      "answer": "a)"
    },
    {
      "id": 23,
      "question": "El objetivo de la promoción de la autonomía de las personas para que puedan solucionar por sí solas las dificultades se asocia a:",
      "options": {
        "a": "El surgimiento de la Psicología Comunitaria en los años 60 del siglo XX",
        "b": "Un eje del activismo político que no promueve el empoderamiento",
        "c": "El surgimiento de la Psicología Social siguiendo a Gustave Le Bon"
      },
      "answer": "a)"
    },
    {
      "id": 24,
      "question": "En el contexto del I Congreso del Colegio Oficial de Psicólogos (1984):",
      "options": {
        "a": "Los pioneros de la intervención social ya cuentan con una identidad común.",
        "b": "La publicación de la CE de 1978 no tiene influencia alguna en la creación de sistemas de servicios sociales.",
        "c": "Se decide adoptar el término de PSIS (Psicólogo de Intervención Social)."
      },
      "answer": "c)"
    },
    {
      "id": 25,
      "question": "¿Cuál de los siguientes es un determinante intermedio de las desigualdades en salud?",
      "options": {
        "a": "Contexto socioeconómico y político",
        "b": "Ejes de desigualdad",
        "c": "Recursos materiales"
      },
      "answer": "c)"
    },
    {
      "id": 26,
      "question": "La promoción de la salud constituye un proceso que...",
      "options": {
        "a": "solamente abarca acciones dirigidas directamente a fortalecer las habilidades y capacidades de los individuos",
        "b": "solamente abarca acciones dirigidas a modificar las condiciones sociales, ambientales y económicas, con el fin de mitigar su impacto en la salud pública e individual",
        "c": "abarca tanto acciones dirigidas a fortalecer las habilidades y capacidades de los individuos, como acciones dirigidas a modificar las condiciones sociales, ambientales y económicas, con el fin de mitigar su impacto en la salud pública e individual"
      },
      "answer": "c)"
    },
    {
      "id": 27,
      "question": "Desde la perspectiva de la efectividad se plantea la necesidad de...",
      "options": {
        "a": "poner en marcha intervenciones efectivas basadas en la evidencia y centradas en el contexto del usuario.",
        "b": "poner en marcha intervenciones efectivas basadas en la evidencia, pero no necesariamente centradas en el contexto del usuario.",
        "c": "poner en marcha intervenciones efectivas centradas en el contexto del usuario, pero no necesariamente basadas en la evidencia."
      },
      "answer": "a)"
    },
    {
      "id": 28,
      "question": "¿Cuál de las siguientes opciones representa una barrera relacionada con la intervención terapéutica que dificulta la participación social en salud mental?",
      "options": {
        "a": "Alta autoestima y empoderamiento personal",
        "b": "Aplicación del consentimiento informado",
        "c": "Enfoque centrado exclusivamente en los síntomas sin considerar al usuario como sujeto activo"
      },
      "answer": "c)"
    },
    {
      "id": 29,
      "question": "¿Cuál de las siguientes situaciones representa una barrera a la participación comunitaria en salud mental?",
      "options": {
        "a": "El usuario participa activamente en la toma de decisiones sobre su tratamiento",
        "b": "Las propuestas de intervención se adaptan a las capacidades y contexto de la comunidad",
        "c": "El profesional adopta un rol protagonista y el usuario queda en una posición pasiva"
      },
      "answer": "c)"
    },
    {
      "id": 30,
      "question": "¿Cuál es un factor clave en la evolución del conocimiento humano?",
      "options": {
        "a": "La repetición sin cuestionamiento",
        "b": "La acumulación de experiencias y su interpretación",
        "c": "La imposición de verdades absolutas"
      },
      "answer": "b)"
    },
    {
      "id": 31,
      "question": "¿Qué corriente filosófica enfatiza la importancia de la razón como fuente principal de conocimiento?",
      "options": {
        "a": "Racionalismo",
        "b": "Empirismo",
        "c": "Positivismo"
      },
      "answer": "a)"
    },
    {
      "id": 32,
      "question": "¿Cuál de las siguientes opciones describe mejor el empirismo?",
      "options": {
        "a": "El conocimiento se obtiene a través de la experiencia y los sentidos",
        "b": "La verdad solo puede descubrirse mediante la lógica",
        "c": "Todo conocimiento es innato y no necesita verificación"
      },
      "answer": "a)"
    },
    {
      "id": 33,
      "question": "¿Quién es considerado un referente del racionalismo en la historia de la filosofía?",
      "options": {
        "a": "John Locke",
        "b": "René Descartes",
        "c": "Karl Marx"
      },
      "answer": "b)"
    },
    {
      "id": 34,
      "question": "¿Cuál fue un hito importante en la transformación del pensamiento humano?",
      "options": {
        "a": "La Revolución Industrial",
        "b": "La Revolución Científica",
        "c": "La expansión del Imperio Romano"
      },
      "answer": "b)"
    },
    {
      "id": 35,
      "question": "¿Qué característica define al positivismo?",
      "options": {
        "a": "Rechaza el método científico",
        "b": "Prioriza el conocimiento basado en la observación y la verificación empírica",
        "c": "Sostiene que la verdad es subjetiva y relativa"
      },
      "answer": "b)"
    },
    {
      "id": 36,
      "question": "¿Cuál de los siguientes conceptos se relaciona con la construcción del conocimiento en la sociedad actual?",
      "options": {
        "a": "Inteligencia artificial y acceso a la información",
        "b": "Uso exclusivo de fuentes escritas tradicionales",
        "c": "Eliminación del pensamiento crítico"
      },
      "answer": "a)"
    },
    {
      "id": 37,
      "question": "¿Qué método es fundamental en la obtención del conocimiento según el pensamiento moderno?",
      "options": {
        "a": "Observación y experimentación",
        "b": "Fe y tradición",
        "c": "Opinión popular"
      },
      "answer": "a)"
    },
    {
      "id": 38,
      "question": "¿Cuáles son algunas de las barreras a la participación?",
      "options": {
        "a": "Falta de compromiso, autoestigma, estigmatización y participación simbólica.",
        "b": "No existen barreras a la participación",
        "c": "Las barreras son impuestas por la administración."
      },
      "answer": "a)"
    },
    {
      "id": 39,
      "question": "¿Qué implica la inclusión social y tener un sentimiento de pertenencia y más opciones y oportunidades en la vida?",
      "options": {
        "a": "Participar de manera activa en los sistemas sociales, económicos y políticos de nuestra sociedad.",
        "b": "Poder decidir por sí mismo.",
        "c": "Pertenecer a un grupo heterogéneo."
      },
      "answer": "a)"
    },
    {
      "id": 40,
      "question": "Cual NO es uno de los 10 principios para ser un buen guía en la recuperación",
      "options": {
        "a": "Brindar esperanza para la recuperación",
        "b": "Enfocarnos en las fortalezas y no en lo que está mal",
        "c": "empático con persona y sus familiares"
      },
      "answer": "c)"
    },
    {
      "id": 41,
      "question": "¿Cuál es una ventaja de participación?",
      "options": {
        "a": "Amplía el conocimiento y habilidades personales",
        "b": "Mejora el proceso de inicio de tratamiento de la persona",
        "c": "Desfavorece las redes sociales de la persona"
      },
      "answer": "a)"
    },
    {
      "id": 42,
      "question": "¿Qué es la mentoría social?",
      "options": {
        "a": "instrumento de intervención social que promueve la relación entre personas que de forma voluntaria se ofrecen para proporcionar un apoyo a otras personas que se encuentran en situación de riesgo de exclusión social.",
        "b": "Instrumento de intervención social que promueve la relación entre personas que de forma involuntaria se ofrecen para proporcionar un apoyo a otras personas que se encuentran en situación de riesgo de exclusión social.",
        "c": "Instrumento de control institucional que limita la interacción entre individuos con el fin de evitar situaciones de dependencia emocional en contextos de vulnerabilidad social."
      },
      "answer": "a)"
    },
    {
      "id": 43,
      "question": "¿Qué tipo de información debe recogerse en el proceso de mentoría social sobre la persona mentora?",
      "options": {
        "a": "Solo su trayectoria laboral y nivel de estudios, ya que son los únicos aspectos relevantes para la relación de mentoría.",
        "b": "Información sobre sus motivaciones, red social, creencias, disponibilidad de tiempo, salud y experiencia personal y profesional.",
        "c": "Únicamente sus creencias políticas y problemas de salud, ya que pueden influir directamente en la relación mentor-mentorando."
      },
      "answer": "b)"
    },
    {
      "id": 44,
      "question": "¿Qué componentes debe tener un marco de apoyo?",
      "options": {
        "a": "Servicios comunitarios y servicios sanitarios",
        "b": "Atención de salud mental y apoyo entre iguales",
        "c": "Fortalezas físicas y personales"
      },
      "answer": "b)"
    },
    {
      "id": 45,
      "question": "En el proceso de cierre de un proyecto de mentoría social ¿sobre qué NO es apropiado preguntar?",
      "options": {
        "a": "Resultados de aprendizaje del proceso",
        "b": "Próximos pasos y oportunidades futuras",
        "c": "Historia de vida y red de apoyo actual"
      },
      "answer": "c)"
    },
    {
      "id": 46,
      "question": "¿Cuál de estos criterios sirve para definir los tipos de mentorías?",
      "options": {
        "a": "Según el lugar",
        "b": "Según el número de personas implicadas",
        "c": "Todas son correctas"
      },
      "answer": "c)"
    },
    {
      "id": 47,
      "question": "Desde la perspectiva de la efectividad de los principios básicos para la atención comunitaria en salud mental, ¿cuál de estas intervenciones NO se corresponde con una centrada en la inclusión social?",
      "options": {
        "a": "Promoción de la salud",
        "b": "Apoyo al empleo",
        "c": "Rehabilitación psicosocial"
      },
      "answer": "a)"
    },
    {
      "id": 48,
      "question": "¿Cuál de los siguientes enfoques pone el énfasis en la transformación social y el empoderamiento colectivo?",
      "options": {
        "a": "El enfoque asistencialista.",
        "b": "El enfoque individualista.",
        "c": "El enfoque comunitario."
      },
      "answer": "c)"
    },
    {
      "id": 49,
      "question": "¿Qué papel tiene el profesional en la intervención social desde una perspectiva crítica?",
      "options": {
        "a": "Ejecutar programas sin cuestionarlos.",
        "b": "Acompañar, facilitar procesos y promover el cambio social.",
        "c": "Controlar el comportamiento de los usuarios."
      },
      "answer": "b)"
    },
    {
      "id": 50,
      "question": "¿En qué se basa el modelo de activos en salud?",
      "options": {
        "a": "En identificar fortalezas y recursos para potenciar el bienestar comunitario.",
        "b": "En centrarse exclusivamente en los déficits individuales.",
        "c": "En ofrecer tratamientos médicos personalizados."
      },
      "answer": "a)"
    },
    {
      "id": 51,
      "question": "¿Cuál es el objetivo principal de los CMSC?",
      "options": {
        "a": "Tratar enfermedades graves mediante atención primaria especializada.",
        "b": "Prevenir enfermedades y promover estilos de vida saludables en comunidades locales.",
        "c": "Ofrecer servicios médicos exclusivamente a personas mayores."
      },
      "answer": "B"
    },
    {
      "id": 52,
      "question": "¿Cuál de los siguientes principios está vinculado a la participación social en salud mental?",
      "options": {
        "a": "Exclusión asistida",
        "b": "Empoderamiento",
        "c": "Neutralidad institucional"
      },
      "answer": "B"
    },
    {
      "id": 53,
      "question": "¿Qué se busca principalmente con la promoción de la participación en salud mental?",
      "options": {
        "a": "Reducir la carga laboral de los profesionales de salud",
        "b": "Hacer que las personas con problemas de salud mental deleguen sus decisiones",
        "c": "Reconocer sus derechos y promover su implicación activa en la sociedad"
      },
      "answer": "C"
    },
    {
      "id": 54,
      "question": "¿Cuál de los siguientes elementos NO forma parte de los principios para asegurar una buena práctica en la participación?",
      "options": {
        "a": "Promover redes comunitarias e intercambio de ideas",
        "b": "Garantizar recursos ilimitados para las comunidades",
        "c": "Respetar el derecho de las comunidades a implicarse según su voluntad"
      },
      "answer": "B"
    },
    {
      "id": 55,
      "question": "¿Cómo se sugiere que debe llevarse a cabo la retroalimentación de los resultados a las comunidades locales?",
      "options": {
        "a": "Mediante informes técnicos internos",
        "b": "Por medio de canales accesibles como medios locales o actos comunitarios",
        "c": "Exclusivamente a través de las autoridades sanitarias"
      },
      "answer": "B"
    },
    {
      "id": 56,
      "question": "Desde la perspectiva de la efectividad, una intervención NO es efectiva cuando:",
      "options": {
        "a": "Posee evidencia científica",
        "b": "Es adaptable a comunidades diversas",
        "c": "No refleja la meta de los usuarios"
      },
      "answer": "C"
    },
    {
      "id": 57,
      "question": "Un elemento clave de las campañas anti-estigma es:",
      "options": {
        "a": "Evitar el contacto directo con personas con experiencia vivida en salud mental.",
        "b": "Incluir relatos de superación y desmontar mitos.",
        "c": "Centrarse únicamente en la perspectiva médica."
      },
      "answer": "B"
    },
    {
      "id": 58,
      "question": "La frase de \"nada sobre nosotros sin nosotros\" hace referencia a:",
      "options": {
        "a": "La exclusión de los usuarios en la planificación de servicios.",
        "b": "La participación activa de expertos por experiencia en el diseño de políticas y servicios.",
        "c": "La necesidad de que los familiares tomen decisiones por los pacientes."
      },
      "answer": "B"
    },
    {
      "id": 59,
      "question": "Son objetivos de los equipos comunitarios en salud mental:",
      "options": {
        "a": "Evaluación de necesidades y planificación de una atención de salud mental comunitaria",
        "b": "Inclusión social y reducción del estigma",
        "c": "Ambas"
      },
      "answer": "C"
    },
    {
      "id": 60,
      "question": "Una intervención comunitaria en salud mental es efectiva si:",
      "options": {
        "a": "Tiene base científica moderada",
        "b": "Refleja las metas del terapeuta",
        "c": "Posee refuerzos duraderos"
      },
      "answer": "C"
    },
    {
      "id": 61,
      "question": "¿En qué nivel del Modelo Ecológico de Bronfenbrenner (1979) se incluyen los factores socioeconómicos y culturales del contexto natural?",
      "options": {
        "d": "Macrosistema",
        "e": "Microsistema",
        "f": "Mesosistema"
      },
      "answer": "a)"
    },
    {
      "id": 62,
      "question": "La primera fase del método Delphi es:",
      "options": {
        "a": "Evaluación del problema",
        "b": "Definición del problema",
        "c": "Selección de expertos"
      },
      "answer": "b)"
    },
    {
      "id": 63,
      "question": "El espacio de apego en arteterapia, es un espacio seguro que permite la reflexión, la introspección, el humor y… ¿Qué más?:",
      "options": {
        "a": "La creatividad",
        "b": "Las relaciones interpersonales",
        "c": "La acción transformadora"
      },
      "answer": "c)"
    },
    {
      "id": 64,
      "question": "En arteterapia espacio se concibe:",
      "options": {
        "a": "Como un vacío existencial que los actores llenan a través del psicodrama",
        "b": "Tanto como un espacio físico como simbólico y estaría definido por su capacidad de convertirse en espacio transicional o espacio potencial.",
        "c": "Un aspecto no definido por los encuadres interno y externo."
      },
      "answer": "b)"
    },
    {
      "id": 65,
      "question": "Según Mann (1978), las 3 áreas fundamentales que constituyen el objetivo de la Psicología Comunitaria son:",
      "options": {
        "d": "Análisis de procesos sociales, estudio de las interacciones en un sistema social específico y diseño de intervenciones sociales",
        "e": "Análisis de procesos sociales, estudio de las interacciones en un sistema social global y diseño de intervenciones sociales",
        "f": "Análisis de procesos económicos, estudio de las interacciones en un sistema social específico y diseño de intervenciones sociales"
      },
      "answer": "a)"
    },
    {
      "id": 66,
      "question": "En el Modelo Ecológico de Bronfenbrenner (1979), el entorno inmediato de la persona (familia, escuela/trabajo y barrio) es:",
      "options": {
        "a": "Microsistema.",
        "b": "Mesosistema.",
        "c": "Ecosistema."
      },
      "answer": "a)"
    },
    {
      "id": 67,
      "question": "El taller reflexivo, plantea 4 tipos de educación, que son:",
      "options": {
        "a": "Humanizante, científica, tecnológica y cognitiva",
        "b": "Formal, informal, crítica y experimental",
        "c": "Humanizante, crítica, dialógica y concienciadora"
      },
      "answer": "c)"
    },
    {
      "id": 68,
      "question": "¿Qué principio implica “Desarrollo de la habilidad para revisar sus propias acciones y evaluar los hechos”?",
      "options": {
        "a": "Principio reflexivo.",
        "b": "Principio de aprender haciendo.",
        "c": "Principio de relevancia."
      },
      "answer": "a)"
    },
    {
      "id": 69,
      "question": "¿Qué principio implica “Integración de las necesidades e intereses de la persona y de su contexto en el proceso de aprendizaje”?",
      "options": {
        "a": "Principio reflexivo.",
        "b": "Principio productivo.",
        "c": "Principio de relevancia."
      },
      "answer": "c)"
    },
    {
      "id": 70,
      "question": "La Psicología Comunitaria surge con el objetivo de…",
      "options": {
        "a": "Para que las personas sean dependientes.",
        "b": "Permitir a las personas solucionar por sí solas sus dificultades.",
        "c": "Para que las personas se aíslen de la sociedad."
      },
      "answer": "b)"
    },
    {
      "id": 71,
      "question": "¿Qué entendemos por situaciones de riesgo en intervención social?",
      "options": {
        "a": "Falta de cobertura de necesidades humanas muy básicas que se encuentran directamente condicionadas por el entorno social.",
        "b": "Situaciones en las que las personas tienen acceso ilimitado a recursos y servicios.",
        "c": "Condiciones en las que las personas viven en un entorno social completamente estable y seguro."
      },
      "answer": "a)"
    },
    {
      "id": 72,
      "question": "Para “ser persona” son esenciales:",
      "options": {
        "a": "Solamente las emociones básicas",
        "b": "Las emociones básicas y los sentimientos incómodos",
        "c": "Solamente los sentimientos incómodos"
      },
      "answer": "b)"
    },
    {
      "id": 73,
      "question": "Marca la respuesta INCORRECTA respecto a los aspectos clave de arteterapia:",
      "options": {
        "a": "Es importante crear un entorno propicio para la creación",
        "b": "El espacio para desarrollar la actividad es tanto un espacio físico como simbólico",
        "c": "Es necesario que el trabajo artístico realizado sea una obra reconocible y bonita"
      },
      "answer": "c)"
    },
    {
      "id": 74,
      "question": "¿Cuál de los siguientes componentes de un programa de prevención del consumo de drogas en adolescentes busca reducir el estrés asociado a la maduración sexual?",
      "options": {
        "a": "Educación para la salud",
        "b": "Preparación para los cambios físicos y psicológicos",
        "c": "Atención individualizada a adolescentes de alto riesgo"
      },
      "answer": "b)"
    },
    {
      "id": 75,
      "question": "¿Cuál de los siguientes es un elemento clave en la Psicología Comunitaria según Rappaport (1977)?",
      "options": {
        "a": "Control social",
        "b": "Relatividad cultural",
        "c": "Terapia individual"
      },
      "answer": "b)"
    },
    {
      "id": 76,
      "question": "¿Cuál es una característica del modelo de cambio social?",
      "options": {
        "a": "Se centra en la evaluación psicológica individual",
        "b": "Promueve la transformación del sistema social mediante la autogestión comunitaria",
        "c": "Depende exclusivamente de la intervención gubernamental"
      },
      "answer": "b)"
    },
    {
      "id": 77,
      "question": "¿Cuál de los siguientes no es un modelo teórico en Psicología Comunitaria?",
      "options": {
        "a": "Modelo de cambio social",
        "b": "Modelo conductual",
        "c": "Modelo ecológico"
      },
      "answer": "b)"
    },
    {
      "id": 78,
      "question": "¿Cuál es una de las áreas fundamentales de la Psicología Comunitaria según Mann (1978)?",
      "options": {
        "a": "Diagnóstico clínico",
        "b": "Diseño de intervenciones sociales",
        "c": "Terapia psicoanalítica"
      },
      "answer": "b)"
    },
    {
      "id": 79,
      "question": "¿Qué característica define la Psicología Comunitaria?",
      "options": {
        "a": "Se centra en el control del psicólogo sobre la comunidad",
        "b": "Su énfasis está en el control de la comunidad sobre su propio desarrollo",
        "c": "Su objetivo es el análisis de la conducta individual"
      },
      "answer": "b)"
    },
    {
      "id": 80,
      "question": "¿Cuáles son los principios de la metodología taller?",
      "options": {
        "a": "No se basa en ningún principio",
        "b": "Universalidad, autonomía, relevancia, productivo",
        "c": "Relevancia, productivo, autotélico, reflexivo y de aprender haciendo"
      },
      "answer": "c)"
    },
    {
      "id": 81,
      "question": "¿Qué aspectos definen el encuadre externo en un proceso de intervención?",
      "options": {
        "a": "Solamente el vínculo emocional entre los participantes y la evolución del proceso terapéutico.",
        "b": "La duración, el lugar, la periodicidad, el carácter del encuentro y aspectos físicos del espacio como la disposición del mobiliario.",
        "c": "Los resultados obtenidos, el diagnóstico clínico y la formación académica del profesional que dirige la intervención."
      },
      "answer": "b)"
    },
    {
      "id": 82,
      "question": "Según las teorías del apego, ¿qué debe permitir el espacio de la actividad artística en ámbitos sociales?",
      "options": {
        "a": "Proporcionar un entorno donde se fomente la acción transformadora y la reflexión personal.",
        "b": "Crear un espacio donde el humor y la creatividad sean los pilares fundamentales de la actividad.",
        "c": "Ofrecer una experiencia que se centre exclusivamente en la interacción social sin promover la introspección."
      },
      "answer": "a)"
    },
    {
      "id": 83,
      "question": "¿Cuál de estos es un factor en el origen de la psicología comunitaria?",
      "options": {
        "a": "Rechazo de los conceptos y roles ligados al modelo médico de salud mental",
        "b": "Diversidad humana y derecho de la gente a acceder a los recursos de la sociedad y elegir sus metas y estilo de vida",
        "c": "Ninguna de estas opciones"
      },
      "answer": "a)"
    },
    {
      "id": 84,
      "question": "¿Cuál de los siguientes NO es un principio del trabajo comunitario?",
      "options": {
        "a": "Participación",
        "b": "Verticalidad",
        "c": "Solidaridad"
      },
      "answer": "B"
    },
    {
      "id": 85,
      "question": "¿Qué herramienta se utiliza comúnmente para evaluar las necesidades comunitarias en una intervención social?",
      "options": {
        "a": "Paneles Delphi y encuestas",
        "b": "Terapia individualizada exclusivamente",
        "c": "Publicidad masiva dirigida al público objetivo"
      },
      "answer": "a)"
    },
    {
      "id": 86,
      "question": "La arteterapia ofrece",
      "options": {
        "a": "Un espacio de apego donde favorecer la expresión emocional",
        "b": "Herramientas de pintura para el ocio particular",
        "c": "Materiales artísticos para motivar la carrera de Bellas Artes"
      },
      "answer": "a)"
    },
    {
      "id": 87,
      "question": "¿Qué herramienta utiliza la investigación-acción participativa (IAP) en los procesos de intervención comunitaria?",
      "options": {
        "a": "La prescripción farmacológica personalizada.",
        "b": "El análisis de datos clínicos sin participación del grupo.",
        "c": "El trabajo conjunto entre profesionales y comunidad para generar cambios."
      },
      "answer": "C"
    },
    {
      "id": 88,
      "question": "¿Qué función tienen los símbolos expresados a través del arte en el proceso terapéutico?",
      "options": {
        "A": "Son solo una forma decorativa para hacer el trabajo más agradable.",
        "B": "Contienen información que ayuda en la búsqueda de satisfacción personal.",
        "C": "Sirven únicamente para representar la realidad de manera exacta."
      },
      "answer": "B"
    },
    {
      "id": 89,
      "question": "El objetivo de la investigación-acción participativa es:",
      "options": {
        "a": "Cambiar la realidad y afrontar los problemas de una población a partir de sus recursos y participación.",
        "b": "Afrontar los problemas de una población a partir de los recursos del gobierno.",
        "c": "Mantener la realidad sin afrontar los problemas de una población a partir de sus recursos y participación."
      },
      "answer": "a"
    },
    {
      "id": 90,
      "question": "La arteterapia en psicología es efectiva para…",
      "options": {
        "a": "indagar en el inconsciente de la persona",
        "b": "expresar y gestionar emociones a través del arte",
        "c": "generar una obra de arte para decorar la consulta"
      },
      "answer": "b"
    }
  ];
  
  const startScreen = document.getElementById('start-screen');
  const examScreen = document.getElementById('exam-screen');
  const resultsScreen = document.getElementById('results-screen');
  const numQuestionsInput = document.getElementById('num-questions');
  const immediateFeedbackCheckbox = document.getElementById('immediate-feedback');
  const startExamButton = document.getElementById('start-exam');
  const questionCounter = document.getElementById('question-counter');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const nextQuestionButton = document.getElementById('next-question');
  const feedbackDiv = document.getElementById('feedback');
  const scoreParagraph = document.getElementById('score');
  const correctAnswersList = document.getElementById('correct-answers-list');
  const restartExamButton = document.getElementById('restart-exam');
  
  let selectedQuestions = [];
  let currentQuestionIndex = 0;
  let userAnswers = [];
  let score = 0;
  let immediateFeedback = false;
  
  // Fisher-Yates (Knuth) Shuffle Algorithm
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
  }
  
  function startExam() {
      const numQuestions = parseInt(numQuestionsInput.value);
      immediateFeedback = immediateFeedbackCheckbox.checked;
  
      if (numQuestions > questions.length || numQuestions <= 0) {
          alert(`Por favor, selecciona un número de preguntas entre 1 y ${questions.length}.`);
          return;
      }
  
      // Shuffle questions and select the desired number
      selectedQuestions = shuffleArray([...questions]).slice(0, numQuestions);
      currentQuestionIndex = 0;
      userAnswers = [];
      score = 0;
  
      startScreen.classList.add('hidden');
      examScreen.classList.remove('hidden');
      resultsScreen.classList.add('hidden');
      feedbackDiv.classList.add('hidden');
      feedbackDiv.textContent = '';
      nextQuestionButton.classList.remove('hidden');
  
  
      loadQuestion();
  }
  
  function loadQuestion() {
      const currentQuestion = selectedQuestions[currentQuestionIndex];
      questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
      questionText.textContent = currentQuestion.question;
      optionsContainer.innerHTML = ''; // Clear previous options
  
      for (const optionKey in currentQuestion.options) {
          const optionLabel = document.createElement('label');
          optionLabel.classList.add('option');
          const optionInput = document.createElement('input');
          optionInput.type = 'radio';
          optionInput.name = `question-${currentQuestion.id}`;
          optionInput.value = optionKey;
          optionInput.addEventListener('change', handleAnswerSelection);
  
          optionLabel.appendChild(optionInput);
          optionLabel.appendChild(document.createTextNode(` ${optionKey}) ${currentQuestion.options[optionKey]}`));
          optionsContainer.appendChild(optionLabel);
      }
       // Disable next button until an option is selected
       nextQuestionButton.disabled = true;
  }
  
  function handleAnswerSelection(event) {
      if (immediateFeedback) {
          checkImmediateFeedback(event.target.value);
           // Disable all options for the current question after selection in immediate feedback mode
          const options = optionsContainer.querySelectorAll('input[type="radio"]');
          options.forEach(option => option.disabled = true);
           nextQuestionButton.disabled = false; // Enable next button after providing feedback
      } else {
           nextQuestionButton.disabled = false; // Enable next button when an option is selected in final feedback mode
      }
  }
  
  function checkImmediateFeedback(selectedOption) {
      const currentQuestion = selectedQuestions[currentQuestionIndex];
      const correctAnswer = currentQuestion.answer.replace(')', ''); // Remove ')' from answer key
  
      feedbackDiv.classList.remove('hidden');
      if (selectedOption === correctAnswer) {
          feedbackDiv.textContent = '¡Correcto!';
          feedbackDiv.className = 'feedback correct';
      } else {
          feedbackDiv.textContent = `Incorrecto. La respuesta correcta es ${currentQuestion.answer} ${currentQuestion.options[correctAnswer]}.`;
          feedbackDiv.className = 'feedback incorrect';
      }
  }
  
  
  function nextQuestion() {
      const selectedOptionInput = optionsContainer.querySelector(`input[name="question-${selectedQuestions[currentQuestionIndex].id}"]:checked`);
      let userAnswer = null;
      if (selectedOptionInput) {
          userAnswer = selectedOptionInput.value;
      }
  
      userAnswers.push({
          questionId: selectedQuestions[currentQuestionIndex].id,
          answer: userAnswer
      });
  
      // Only calculate score at the end if not in immediate feedback mode
      if (!immediateFeedback && userAnswer === selectedQuestions[currentQuestionIndex].answer.replace(')', '')) {
           score++;
      }
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < selectedQuestions.length) {
          feedbackDiv.classList.add('hidden'); // Hide feedback for the next question
          feedbackDiv.textContent = '';
          loadQuestion();
      } else {
          endExam();
      }
  }
  
  function endExam() {
      examScreen.classList.add('hidden');
      resultsScreen.classList.remove('hidden');
  
      // Calculate score based on userAnswers if not in immediate feedback mode (where score is calculated question by question)
       if(immediateFeedback){
           // Score was already calculated question by question
       } else {
           score = 0; // Reset score for recalculation
           userAnswers.forEach(userAnswer => {
               const question = questions.find(q => q.id === userAnswer.questionId);
               if (question && userAnswer.answer === question.answer.replace(')', '')) {
                   score++;
               }
           });
       }
  
  
      scoreParagraph.textContent = `Tu puntuación: ${score}/${selectedQuestions.length}`;
  
      correctAnswersList.innerHTML = '';
      userAnswers.forEach(userAnswer => {
          const question = questions.find(q => q.id === userAnswer.questionId);
          if (question) {
              const listItem = document.createElement('li');
              const correctAnswerKey = question.answer.replace(')', '');
              listItem.textContent = `Pregunta ${question.id}: Tu respuesta - ${userAnswer.answer ? userAnswer.answer.toUpperCase() : 'No respondida'}, Respuesta correcta - ${question.answer} ${question.options[correctAnswerKey]}`;
  
              if (userAnswer.answer === correctAnswerKey) {
                  listItem.style.color = 'green';
              } else {
                  listItem.style.color = 'red';
              }
              correctAnswersList.appendChild(listItem);
          }
      });
  }
  
  function restartExam() {
      resultsScreen.classList.add('hidden');
      startScreen.classList.remove('hidden');
      numQuestionsInput.value = 10; // Reset to default
       immediateFeedbackCheckbox.checked = false; // Reset to default
  }
  
  startExamButton.addEventListener('click', startExam);
  nextQuestionButton.addEventListener('click', nextQuestion);
  restartExamButton.addEventListener('click', restartExam);