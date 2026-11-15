/* ============================================================
   data.js · Misiones de la página de la Luna (textos en inglés)
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
      "Before humans arrived, NASA sent robots to test the terrain. Surveyor 3 landed in April 1967 in the Ocean of Storms and, using a camera and a small scoop, sent back photos and data about how firm the lunar soil was.",
      "Two years later, the Apollo 12 astronauts landed less than 200 meters away, walked over to it, and took some parts back to study how it had aged on the Moon. The rest of the probe is still there: abandoned, but not forgotten."
    ],
    tecnico: [
      "Surveyor 3 was launched on April 17, 1967, and landed on April 20 in Oceanus Procellarum (approx. 3.01° S, 23.42° W). The landing was rough: the probe bounced twice before coming to a stop. It carried a television camera and an arm with a scoop (Surface Sampler) for soil mechanics testing.",
      "In November 1969, Pete Conrad and Alan Bean (Apollo 12) recovered the camera, part of the sampling arm, and other components (about 10 kg) to analyze the effects of vacuum, radiation, and temperature changes on the materials after more than two years on the surface."
    ],

    imagen: {
      casual:  "img-vid_Luna/surveyor3-casual.png",
      tecnico: "img-vid_Luna/surveyor3-tecnico.png"
    },
    alt: {
      casual:  "An Apollo 12 astronaut next to the Surveyor 3 probe, with the lunar module in the background",
      tecnico: "Astronauts practicing with a replica of Surveyor 3 before the mission"
    },
    credito: {
      casual:  "Credits: NASA",
      tecnico: "Credits: NASA"
    }
  },

  {
    nombre: "Apollo 11",
    numero: 2,
    lat: 0.67,
    lon: 23.47,

    casual: [
      "On July 20, 1969, Neil Armstrong and Buzz Aldrin became the first people to set foot on the Moon, in the Sea of Tranquility, while Michael Collins waited for them in orbit.",
      "They spent a little over 21 hours on the surface: they collected rocks, planted a flag, and left scientific instruments behind. When they returned, the lower part of the Eagle lunar module and several other objects stayed there."
    ],
    tecnico: [
      "Apollo 11 landed in Mare Tranquillitatis (approx. 0.67° N, 23.47° E). The extravehicular activity lasted about 2 hours 31 minutes, around 21.5 kg of samples were collected, and the EASEP package was deployed, which included a passive seismometer and a laser retroreflector (LRRR).",
      "Retroreflectors make it possible to measure the Earth–Moon distance by sending laser pulses from Earth and timing how long they take to return. They are still in use decades later. The module's descent stage was left on the surface as a launch platform for the ascent stage."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo11-casual.png",
      tecnico: "img-vid_Luna/apollo11-tecnico.png"
    },
    alt: {
      casual:  "The Eagle lunar module on the surface, with an astronaut beside it",
      tecnico: "An astronaut carrying two packages of scientific instruments on the lunar surface"
    },
    credito: {
      casual:  "Credits: NASA",
      tecnico: "Credits: NASA"
    }
  },

  {
    nombre: "Apollo 13",
    numero: 3,
    // Apollo 13 NO aterrizó: el punto marca donde se estrelló a propósito la etapa S-IVB del cohete
    lat: -2.75,
    lon: -27.86,

    casual: [
      "Apollo 13 was supposed to be the third mission to land on the Moon, but on April 13, 1970, more than 300,000 km from Earth, an oxygen tank in the service module exploded. Jim Lovell, Jack Swigert, and Fred Haise had to use the Aquarius lunar module as a lifeboat.",
      "They looped around the Moon without landing and returned safely to Earth on April 17. What was left behind: the service module and Aquarius were jettisoned before the return, and the rocket's S-IVB stage was deliberately crashed into the lunar surface."
    ],
    tecnico: [
      "The explosion of oxygen tank 2 occurred 55 hours 55 minutes into the mission and left the command module without enough power or oxygen. The crew moved into the lunar module, stayed on a free-return trajectory around the Moon, and used Aquarius's descent engine to speed up the return. They also adapted CO2 filters using materials on board to keep the air breathable.",
      "On April 14, 1970, the S-IVB stage was deliberately crashed into the Moon (approx. 2.75° S, 27.86° W). The seismometer left by Apollo 12 recorded the vibrations for more than three hours, providing data on the Moon's internal structure."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo13-casual.jpeg",
      tecnico: "img-vid_Luna/apollo13-tecnico.jpeg"
    },
    alt: {
      casual:  "The Apollo 13 command module being recovered aboard the ship, with Navy crew members around it",
      tecnico: "The Apollo 13 service module, damaged by the explosion, photographed after separating"
    },
    credito: {
      casual:  "Credits: NASA",
      tecnico: "Credits: NASA"
    }
  },

  {
    nombre: "Apollo 14",
    numero: 4,
    lat: -3.65,
    lon: -17.47,

    casual: [
      "In February 1971, Apollo 14 arrived at Fra Mauro, the very site that Apollo 13 had been unable to reach. Alan Shepard, the first American to travel into space, and Edgar Mitchell walked on the Moon while Stuart Roosa waited for them in orbit.",
      "Shepard even hit two golf balls with an adapted tool, and Mitchell threw a tool handle as if it were a javelin. Before leaving, they left behind scientific instruments and a small tool cart that is still there."
    ],
    tecnico: [
      "Apollo 14 landed on February 5, 1971, at Fra Mauro (approx. 3.65° S, 17.47° W). There were two EVAs totaling about 9 hours 23 minutes, and about 42.8 kg of samples were collected. The crew used the MET (Modular Equipment Transporter), a two-wheeled hand cart, to carry tools and samples.",
      "They deployed an ALSEP station with instruments such as a passive seismometer and an active seismic experiment, along with a laser retroreflector. They tried to reach the rim of Cone Crater but did not make it."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo14-casual.png",
      tecnico: "img-vid_Luna/apollo14-tecnico.png"
    },
    alt: {
      casual:  "Apollo 14 on the lunar surface",
      tecnico: "Apollo 14 scientific equipment on the Moon"
    },
    credito: {
      casual:  "Credits: NASA",
      tecnico: "Credits: NASA"
    }
  },

  {
    nombre: "Apollo 15",
    numero: 5,
    lat: 26.13,
    lon: 3.63,

    casual: [
      "In July 1971, Apollo 15 carried a lunar vehicle, the Lunar Roving Vehicle, for the first time. Thanks to it, David Scott and James Irwin were able to explore much farther than their predecessors, near a huge winding channel called Hadley Rille, at the foot of the lunar Apennine Mountains.",
      "They brought about 77 kg of rocks back to Earth and left the rover parked behind, along with a small figurine called “Fallen Astronaut,” in memory of astronauts and cosmonauts who died."
    ],
    tecnico: [
      "It landed on July 30, 1971, in the Hadley–Apennine region (approx. 26.13° N, 3.63° E). Over three extravehicular activities (EVAs), the rover covered about 28 km in total, and the crew spent about 66 hours on the surface.",
      "The map shows the route of each EVA: EVA 1 toward the edge of Hadley Rille and the Apennine Front, EVA 2 toward the south, and EVA 3 toward the north. About 77 kg of samples were collected."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo15-casual.png",
      tecnico: "img-vid_Luna/apollo15-tecnico.png"
    },
    alt: {
      casual:  "Launch of the Saturn V rocket for Apollo 15",
      tecnico: "Map of the routes taken during the three Apollo 15 EVAs next to Hadley Rille"
    },
    credito: {
      casual:  "Credits: NASA",
      tecnico: "Credits: NASA"
    }
  },

  {
    nombre: "Apollo 16",
    numero: 6,
    lat: -8.97,
    lon: 15.50,

    casual: [
      "In April 1972, John Young and Charles Duke landed in the Descartes Highlands while Ken Mattingly waited for them in orbit. Scientists expected to find rocks of volcanic origin in that area.",
      "But the rocks told a different story: they were mostly material formed by meteorite impacts. That discovery changed what was believed about the Moon's geology. On leaving, the mission left the rover and several instruments at the site."
    ],
    tecnico: [
      "Apollo 16 landed on April 21, 1972, in the Descartes Highlands (approx. 8.97° S, 15.50° E). There were three EVAs, about 71 hours on the surface, and about 26.7 km covered with the LRV, with roughly 95.8 kg of samples collected.",
      "The map marks the places visited, such as North Ray and South Ray craters and the Stone Mountain and Smoky Mountain areas. The results showed that the highlands were not volcanic in origin, as had been proposed."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo16-casual.png",
      tecnico: "img-vid_Luna/apollo16-tecnico.png"
    },
    alt: {
      casual:  "An Apollo 16 astronaut on the lunar surface with the rover in the background",
      tecnico: "Map of the Apollo 16 routes in the Descartes Highlands"
    },
    credito: {
      casual:  "Credits: NASA",
      tecnico: "Credits: NASA"
    }
  },

  {
    nombre: "Apollo 17",
    numero: 7,
    lat: 20.19,
    lon: 30.77,

    casual: [
      "In December 1972, Eugene Cernan and Harrison Schmitt, the first geologist to set foot on the Moon, landed in the Taurus–Littrow valley. It was the last crewed mission to the Moon: no one has walked there since.",
      "Before climbing into the module, Cernan wrote his daughter Tracy's initials in the dust. The footprints, the rover, and the module remain in the valley, intact, because on the Moon there is no wind or rain to erase them."
    ],
    tecnico: [
      "Apollo 17 landed on December 11, 1972, in the Taurus–Littrow valley (approx. 20.19° N, 30.77° E). There were three EVAs, about 75 hours on the surface, and about 35.7 km covered with the LRV, with roughly 110 kg of samples collected.",
      "The map shows the stations visited between the North and South Massifs, the Lee–Lincoln Scarp, and craters such as Shorty. Among the findings, the orange soil stands out, made of tiny glass spheres of volcanic origin."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo17-casual.png",
      tecnico: "img-vid_Luna/apollo17-tecnico.png"
    },
    alt: {
      casual:  "An Apollo 17 astronaut next to the United States flag, with the lunar module and the rover in the background",
      tecnico: "Map of the Apollo 17 routes in the Taurus–Littrow valley"
    },
    credito: {
      casual:  "Credits: NASA",
      tecnico: "Credits: NASA"
    }
  }
];
