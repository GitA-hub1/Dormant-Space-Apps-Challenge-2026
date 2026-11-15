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
      "Before humans arrived, NASA sent robots to test the terrain. Surveyor 3 landed in April 1967 in the Ocean of Storms and, using a camera and a small scoop, transmitted photos and data regarding how firm the lunar surface was.",
      "Two years later, the Apollo 12 astronauts landed less than 200 meters away, walked over to it, and took some parts back to study how it had aged on the Moon. The rest of the probe remains there—abandoned, but not forgotten."
    ],
    tecnico: [
      "Surveyor 3 was launched on April 17, 1967, and landed on April 20 in Oceanus Procellarum (approx. 3.01° S, 23.42° W). The landing was rough: the probe bounced twice before coming to a stop. It carried a television camera and an arm equipped with a scoop (Surface Sampler) for soil mechanics testing.",
      "In November 1969, Pete Conrad and Alan Bean (Apollo 12) recovered the camera, part of the sampling arm, and other components (approximately 10 kg) in order to analyze the effects of the vacuum, radiation, and temperature fluctuations on the materials after more than two years on the surface."
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
      "On July 20, 1969, Neil Armstrong and Buzz Aldrin became the first people to set foot on the Moon, in the Sea of ​​Tranquility, while Michael Collins waited for them in orbit.",
      "They spent a little over 21 hours on the surface: they collected rocks, planted a flag, and left behind scientific instruments. When they returned, the lower part of the lunar module EAGLE and several other objects remained there."
    ],
    tecnico: [
      "Apollo 11 landed in Mare Tranquillitatis (approx. 0.67° N, 23.47° E). ​​The extravehicular activity lasted nearly 2 hours and 31 minutes; approximately 21.5 kg of samples were collected, and the EASEP package—which included a passive seismometer and a laser retroreflector (LRRR)—was deployed.",
      "Retroreflectors make it possible to measure the Earth–Moon distance by sending laser pulses from Earth and timing how long they take to return. They remain in use decades later. The module’s descent stage was left on the surface, serving as a launch platform for the ascent stage."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo11-casual.png",
      tecnico: "img-vid_Luna/apollo11-tecnico.png"
    },
    alt: {
      casual:  "The lunar module Eagle on the surface, with an astronaut beside it",
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
      "Apollo 13 was intended to be the third mission to land on the Moon, but on April 13, 1970—more than 300,000 km from Earth—an oxygen tank in the service module exploded. Jim Lovell, Jack Swigert, and Fred Haise had to use the lunar module AQUARIUS as a lifeboat.",
      "They orbited the Moon without landing and returned safely to Earth on April 17. What was left behind: the service module and AQUARIUS were jettisoned before the return, and the S-IVB stage of the rocket was crashed into the lunar surface."
    ],
    tecnico: [
      "The explosion of oxygen tank 2 occurred 55 hours and 55 minutes into the mission, leaving the command module without sufficient power or oxygen. The crew moved into the lunar module, remained on a free-return trajectory around the Moon, and used the AQUARIUS lunar module’s descent engine to accelerate their return. Additionally, they adapted CO2 scrubbers using materials on board to keep the air breathable.",
      "On April 14, 1970, the S-IVB stage was intentionally crashed into the Moon (approximately 2.75° S, 27.86° W). The seismometer left behind by Apollo 12 recorded the vibrations for more than three hours, providing data on the Moon's internal structure."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo13-casual.jpeg",
      tecnico: "img-vid_Luna/apollo13-tecnico.jpeg"
    },
    alt: {
      casual:  "The Apollo 13 command module being recovered aboard the ship, with Navy crew members nearby",
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
      "In February 1971, Apollo 14 arrived at Fra Mauro—the very site that Apollo 13 had failed to reach. Alan Shepard, the first American to travel into space, and Edgar Mitchell walked on the Moon, while Stuart Roosa waited for them in orbit.",
      "Shepard even hit two golf balls with an improvised tool, and Mitchell threw a tool handle as if it were a javelin. Before leaving, they left behind scientific instruments and a small tool cart, which remain there to this day."
    ],
    tecnico: [
      "Apollo 14 landed on February 5, 1971, at Fra Mauro (approx. 3.65° S, 17.47° W). There were two EVAs, totaling about 9 hours and 23 minutes, which yielded nearly 42.8 kg of samples. The crew used the MET (Modular Equipment Transporter)—a two-wheeled handcart—to transport tools and samples.",
      "They deployed an ALSEP station with instruments such as a passive seismometer and an active seismology experiment, as well as a laser retroreflector. They attempted to reach the edge of Cone Crater, but did not succeed in reaching it."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo14-casual.png",
      tecnico: "img-vid_Luna/apollo14-tecnico.png"
    },
    alt: {
      casual:  "Apollo 14 on the lunar surface",
      tecnico: "Apollo 14 scientific team on the Moon"
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
      "In July 1971, Apollo 15 carried a lunar vehicle—the Lunar Roving Vehicle—for the first time. Thanks to it, David Scott and James Irwin were able to explore much further than their predecessors, near a massive, winding channel called Hadley Rille, at the foot of the lunar Apennine Mountains.",
      "They brought about 77 kg of rocks back to Earth and left behind the parked rover, as well as a small figurine called. Fallen Astronaut, in memory of deceased astronauts and cosmonauts."
    ],
    tecnico: [
      "It landed on July 30, 1971, in the Hadley–Apennine region (approx. 26.13° N, 3.63° E). ​​Over the course of three extravehicular activities (EVAs), the rover covered a total of about 28 km, and the crew spent nearly 66 hours on the surface.",
      "The map shows the route for each EVA: EVA 1 toward the edge of Hadley Rille and the Apennine Front, EVA 2 toward the south, and EVA 3 toward the north. Approximately 77 kg of samples were collected."
    ],

    imagen: {
      casual:  "img-vid_Luna/apollo15-casual.png",
      tecnico: "img-vid_Luna/apollo15-tecnico.png"
    },
    alt: {
      casual:  "Launch of the Saturn V rocket for Apollo 15",
      tecnico: "Map of the routes taken during the three Apollo 15 EVAs near Hadley Rille"
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
      "In April 1972, John Young and Charles Duke landed in the Descartes Highlands, while Ken Mattingly awaited them in orbit. Scientists hoped to find rocks of volcanic origin in that area.",
      "But the rocks told a different story: they consisted primarily of material formed by meteorite impacts. This discovery changed existing ideas about the Moon’s geology. Upon its departure, the mission left the rover and several instruments at the site."
    ],
    tecnico: [
      "Apollo 16 landed on April 21, 1972, in the Descartes Highlands (approx. 8.97° S, 15.50° E). ​​There were three EVAs, about 71 hours spent on the surface, and approximately 26.7 km covered using the LRV, with about 95.8 kg of samples collected.",
      "The map indicates the locations visited, such as the North Ray and South Ray craters and the areas of Stone Mountain and Smoky Mountain. The results showed that the highlands were not of volcanic origin, as had been proposed."
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
      "In December 1972, Eugene Cernan and Harrison Schmitt—the first geologist to set foot on the Moon—landed in the Taurus–Littrow valley. It was the last crewed mission to the Moon; no one has walked there since.",
      "Before boarding the module, Cernan wrote the initials of his daughter, Tracy, in the dust. The footprints, the rover, and the module remain in the valley, intact, because there is no wind or rain on the Moon to erase them."
    ],
    tecnico: [
      "Apollo 17 landed on December 11, 1972, in the Taurus–Littrow valley (approx. 20.19° N, 30.77° E). ​​There were three EVAs, nearly 75 hours spent on the surface, and approximately 35.7 km covered using the LRV, with about 110 kg of samples collected.",
      "The map shows the stations visited between the North and South massifs, the Lee–Lincoln scarp, and craters such as Shorty. Among the findings, the orange soil—composed of tiny glass spheres of volcanic origin—stands out."
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
