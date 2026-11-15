/* ============================================================
   data.js · Misiones de la página de la Luna
   - numero: orden cronológico (aparece en el cartel)
   - lat / lon: sitio de aterrizaje (lon positiva = este, negativa = oeste)
   - casual / tecnico: cada elemento del arreglo es un párrafo
   - imagen / alt / credito: un valor por modo (casual y tecnico)
   Los textos son un BORRADOR: revísalos contra las fuentes de la NASA.
   ============================================================ */

const MISIONES = [
  {
    nombre: "Surveyor 3",
    numero: 1,
    lat: -3.01,
    lon: -23.42,

    casual: [
      "Antes de que llegaran las personas, la NASA envió robots a probar el terreno. Surveyor 3 aterrizó en abril de 1967 en el Océano de las Tormentas y, con una cámara y una pequeña pala, mandó fotos y datos sobre qué tan firme era el suelo lunar.",
      "Dos años después, los astronautas del Apollo 12 aterrizaron a menos de 200 metros, caminaron hasta ella y se llevaron algunas piezas para estudiar cómo había envejecido en la Luna. El resto de la sonda sigue ahí: abandonada, pero no olvidada."
    ],
    tecnico: [
      "Surveyor 3 se lanzó el 17 de abril de 1967 y se posó el 20 de abril en Oceanus Procellarum (aprox. 3.01° S, 23.42° O). El aterrizaje fue accidentado: la sonda rebotó dos veces antes de detenerse. Llevaba una cámara de televisión y un brazo con una pala (Surface Sampler) para pruebas de mecánica de suelos.",
      "En noviembre de 1969, Pete Conrad y Alan Bean (Apollo 12) recuperaron la cámara, parte del brazo muestreador y otras piezas (unos 10 kg) para analizar los efectos del vacío, la radiación y los cambios de temperatura sobre los materiales tras más de dos años en la superficie."
    ],

    imagen: {
      casual:  "img-vid_Luna/surveyor3-casual.png",
      tecnico: "img-vid_Luna/surveyor3-tecnico.png"
    },
    alt: {
      casual:  "Un astronauta del Apollo 12 junto a la sonda Surveyor 3, con el módulo lunar al fondo",
      tecnico: "Astronautas practicando con una réplica de Surveyor 3 antes de la misión"
    },
    credito: {
      casual:  "Crédito: NASA",
      tecnico: "Crédito: NASA"
    }
  },

  {
    nombre: "Apollo 11",
    numero: 2,
    lat: 0.67,
    lon: 23.47,

    casual: [
      "El 20 de julio de 1969, Neil Armstrong y Buzz Aldrin se convirtieron en las primeras personas en pisar la Luna, en el Mar de la Tranquilidad, mientras Michael Collins los esperaba en órbita.",
      "Estuvieron poco más de 21 horas en la superficie: recogieron rocas, plantaron una bandera y dejaron instrumentos científicos. Cuando regresaron, la parte inferior del módulo lunar Eagle y varios objetos más se quedaron allí."
    ],
    tecnico: [
      "Apollo 11 aterrizó en Mare Tranquillitatis (aprox. 0.67° N, 23.47° E). La actividad extravehicular duró cerca de 2 h 31 min, se recolectaron unos 21.5 kg de muestras y se desplegó el paquete EASEP, que incluía un sismómetro pasivo y un retrorreflector láser (LRRR).",
      "Los retrorreflectores permiten medir la distancia Tierra–Luna enviando pulsos láser desde la Tierra y midiendo cuánto tardan en regresar. Siguen utilizándose décadas después. La etapa de descenso del módulo quedó en la superficie como plataforma de lanzamiento de la etapa de ascenso."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo11-casual.png",
      tecnico: "img-vid_Luna/apollo11-tecnico.png"
    },
    alt: {
      casual:  "El módulo lunar Eagle sobre la superficie, con un astronauta junto a él",
      tecnico: "Un astronauta cargando dos paquetes de instrumentos científicos sobre la superficie lunar"
    },
    credito: {
      casual:  "Crédito: NASA",
      tecnico: "Crédito: NASA"
    }
  },

  {
    nombre: "Apollo 13",
    numero: 3,
    // Apollo 13 NO aterrizó: el punto marca donde se estrelló a propósito la etapa S-IVB del cohete
    lat: -2.75,
    lon: -27.86,

    casual: [
      "Apollo 13 iba a ser la tercera misión en aterrizar en la Luna, pero el 13 de abril de 1970, a más de 300,000 km de la Tierra, explotó un tanque de oxígeno del módulo de servicio. Jim Lovell, Jack Swigert y Fred Haise tuvieron que usar el módulo lunar Aquarius como bote salvavidas.",
      "Rodearon la Luna sin aterrizar y regresaron sanos y salvos a la Tierra el 17 de abril. Lo que se quedó atrás: el módulo de servicio y Aquarius se desecharon antes de volver, y la etapa S-IVB del cohete fue estrellada contra la superficie lunar."
    ],
    tecnico: [
      "La explosión del tanque de oxígeno 2 ocurrió a las 55 h 55 min de misión y dejó al módulo de mando sin energía ni oxígeno suficientes. La tripulación pasó al módulo lunar, se mantuvo en una trayectoria de regreso libre alrededor de la Luna y usó el motor de descenso de Aquarius para acelerar el regreso. Además adaptaron filtros de CO2 con materiales a bordo para mantener el aire respirable.",
      "El 14 de abril de 1970, la etapa S-IVB se impactó a propósito en la Luna (aprox. 2.75° S, 27.86° O). El sismómetro que dejó el Apollo 12 registró las vibraciones durante más de tres horas, lo que aportó datos sobre la estructura interna de la Luna."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo13-casual.jpeg",
      tecnico: "img-vid_Luna/apollo13-tecnico.jpeg"
    },
    alt: {
      casual:  "El módulo de mando del Apollo 13 siendo recuperado a bordo del barco, con la tripulación de la Marina alrededor",
      tecnico: "El módulo de servicio del Apollo 13 dañado por la explosión, fotografiado tras separarse"
    },
    credito: {
      casual:  "Crédito: NASA",
      tecnico: "Crédito: NASA"
    }
  },

  {
    nombre: "Apollo 14",
    numero: 4,
    lat: -3.65,
    lon: -17.47,

    casual: [
      "En febrero de 1971, Apollo 14 llegó a Fra Mauro, el mismo lugar que Apollo 13 no pudo alcanzar. Alan Shepard, el primer estadounidense en viajar al espacio, y Edgar Mitchell caminaron por la Luna mientras Stuart Roosa los esperaba en órbita.",
      "Shepard incluso golpeó dos pelotas de golf con una herramienta adaptada, y Mitchell lanzó un mango de herramienta como si fuera una jabalina. Antes de irse, dejaron instrumentos científicos y un pequeño carrito de herramientas que sigue allí."
    ],
    tecnico: [
      "Apollo 14 aterrizó el 5 de febrero de 1971 en Fra Mauro (aprox. 3.65° S, 17.47° O). Fueron dos EVA con unas 9 h 23 min en total y cerca de 42.8 kg de muestras. Usaron el MET (Modular Equipment Transporter), un carrito de mano de dos ruedas, para transportar herramientas y muestras.",
      "Desplegaron una estación ALSEP con instrumentos como un sismómetro pasivo y un experimento de sismología activa, además de un retrorreflector láser. Intentaron llegar al borde del cráter Cone, pero no lograron alcanzarlo."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo14-casual.png",
      tecnico: "img-vid_Luna/apollo14-tecnico.png"
    },
    alt: {
      casual:  "Apollo 14 sobre la superficie lunar",
      tecnico: "Equipo científico del Apollo 14 en la Luna"
    },
    credito: {
      casual:  "Crédito: NASA",
      tecnico: "Crédito: NASA"
    }
  },

  {
    nombre: "Apollo 15",
    numero: 5,
    lat: 26.13,
    lon: 3.63,

    casual: [
      "En julio de 1971, Apollo 15 llevó por primera vez un vehículo lunar, el Lunar Roving Vehicle. Gracias a él, David Scott y James Irwin pudieron explorar mucho más lejos que sus antecesores, cerca de un enorme canal sinuoso llamado Hadley Rille, al pie de los Apeninos lunares.",
      "Trajeron a la Tierra unos 77 kg de rocas y dejaron atrás el rover estacionado, además de una pequeña figura llamada \"Fallen Astronaut\", en memoria de astronautas y cosmonautas fallecidos."
    ],
    tecnico: [
      "Aterrizó el 30 de julio de 1971 en la región Hadley–Apennine (aprox. 26.13° N, 3.63° E). En tres actividades extravehiculares (EVA) el rover recorrió unos 28 km en total, y la tripulación pasó cerca de 66 horas en la superficie.",
      "El mapa muestra la ruta de cada EVA: la EVA 1 hacia el borde de Hadley Rille y el frente de los Apeninos, la EVA 2 hacia el sur y la EVA 3 hacia el norte. Se recolectaron aproximadamente 77 kg de muestras."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo15-casual.png",
      tecnico: "img-vid_Luna/apollo15-tecnico.png"
    },
    alt: {
      casual:  "Lanzamiento del cohete Saturno V del Apollo 15",
      tecnico: "Mapa de las rutas recorridas en las tres EVA del Apollo 15 junto a Hadley Rille"
    },
    credito: {
      casual:  "Crédito: NASA",
      tecnico: "Crédito: NASA"
    }
  },

  {
    nombre: "Apollo 16",
    numero: 6,
    lat: -8.97,
    lon: 15.50,

    casual: [
      "En abril de 1972, John Young y Charles Duke aterrizaron en las tierras altas de Descartes mientras Ken Mattingly los esperaba en órbita. Los científicos esperaban encontrar rocas de origen volcánico en esa zona.",
      "Pero las rocas contaron otra historia: eran sobre todo material formado por impactos de meteoritos. Ese descubrimiento cambió lo que se pensaba sobre la geología de la Luna. Al despedirse, la misión dejó el rover y varios instrumentos en el sitio."
    ],
    tecnico: [
      "Apollo 16 aterrizó el 21 de abril de 1972 en las Descartes Highlands (aprox. 8.97° S, 15.50° E). Fueron tres EVA, unas 71 horas en la superficie y unos 26.7 km recorridos con el LRV, con aproximadamente 95.8 kg de muestras recolectadas.",
      "El mapa señala los puntos visitados, como los cráteres North Ray y South Ray y las zonas de Stone Mountain y Smoky Mountain. Los resultados mostraron que las tierras altas no eran de origen volcánico como se había planteado."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo16-casual.png",
      tecnico: "img-vid_Luna/apollo16-tecnico.png"
    },
    alt: {
      casual:  "Un astronauta del Apollo 16 sobre la superficie lunar con el rover al fondo",
      tecnico: "Mapa de las rutas del Apollo 16 en las tierras altas de Descartes"
    },
    credito: {
      casual:  "Crédito: NASA",
      tecnico: "Crédito: NASA"
    }
  },

  {
    nombre: "Apollo 17",
    numero: 7,
    lat: 20.19,
    lon: 30.77,

    casual: [
      "En diciembre de 1972, Eugene Cernan y Harrison Schmitt, el primer geólogo en pisar la Luna, aterrizaron en el valle Taurus–Littrow. Fue la última misión tripulada a la Luna: desde entonces nadie ha vuelto a caminar allí.",
      "Antes de subir al módulo, Cernan escribió en el polvo las iniciales de su hija Tracy. Las huellas, el rover y el módulo siguen en el valle, intactos, porque en la Luna no hay viento ni lluvia que los borren."
    ],
    tecnico: [
      "Apollo 17 aterrizó el 11 de diciembre de 1972 en el valle Taurus–Littrow (aprox. 20.19° N, 30.77° E). Fueron tres EVA, cerca de 75 horas en la superficie y unos 35.7 km recorridos con el LRV, con aproximadamente 110 kg de muestras.",
      "El mapa muestra las estaciones visitadas entre los macizos Norte y Sur, la escarpa Lee–Lincoln y los cráteres como Shorty. Entre los hallazgos destaca el suelo anaranjado, formado por pequeñas esferas de vidrio de origen volcánico."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo17-casual.png",
      tecnico: "img-vid_Luna/apollo17-tecnico.png"
    },
    alt: {
      casual:  "Un astronauta del Apollo 17 junto a la bandera de Estados Unidos, con el módulo lunar y el rover al fondo",
      tecnico: "Mapa de las rutas del Apollo 17 en el valle Taurus–Littrow"
    },
    credito: {
      casual:  "Crédito: NASA",
      tecnico: "Crédito: NASA"
    }
  }
];
