/* ============================================================
   data-mars.js · Misiones de la página de Marte
   Mismo formato que data.js (la Luna):
   - numero: orden cronológico por fecha de lanzamiento (aparece en el cartel)
   - lat / lon: sitio de aterrizaje (lon positiva = este, negativa = oeste). Son aproximados: verifícalos.
   - enMarte: false  -> la nave NO está en Marte, así que no tiene punto en la superficie
   - casual / tecnico: cada elemento del arreglo es un párrafo
   - imagen / alt / credito: un valor por modo (casual y tecnico)
   ============================================================ */

// Arma un bloque con título y viñetas (necesita "white-space: pre-line" en .m-texto p)
const lista = (titulo, ...items) => [titulo, ...items.map((t) => "• " + t)].join("\n");

/* ---------- Textos compartidos por naves gemelas ---------- */

// Pioneer 10 y 11
const PIONEER_CASUAL = [
  "Pioneer 10 and Pioneer 11 were NASA spacecraft sent to explore the outer regions of the solar system. Pioneer 10 became the first spacecraft to travel through the asteroid belt and make close observations of Jupiter. Pioneer 11 continued farther into space and became the first spacecraft to encounter Saturn. These missions helped scientists understand the giant planets, their environments, and the conditions of deep space.",
  "Both spacecraft traveled far beyond their original destinations and continued operating much longer than expected. Today, neither spacecraft communicates with Earth.",
  "Fun Fact: Both spacecraft carry aluminum plaques showing basic information about humanity and the location of our solar system. These plaques were designed as messages that could potentially be understood by an extraterrestrial civilization."
];
const PIONEER_CARACT = lista("Technical characteristics of both spacecraft:",
  "Radioisotope thermoelectric generators for electrical power.",
  "Scientific instruments for measuring particles, radiation, and magnetic fields.",
  "High-gain antennas for communication with Earth.",
  "No landing systems, since both were flyby spacecraft.");
const PIONEER_FUENTES = lista("Sources",
  "https://science.nasa.gov/missions/pioneer/pioneer-11/10-things-aboutpioneerspacecraft/",
  "https://science.nasa.gov/missions/pioneer/pioneer-10-sends-last-signal/");

// Viking 1 y 2
const VIKING_CASUAL = [
  "Viking 1 and Viking 2 were NASA missions designed to explore Mars and search for possible signs of microscopic life. Both spacecraft successfully landed on the Martian surface and conducted scientific experiments. They studied the soil, atmosphere, and weather while taking photographs of the planet.",
  "Although the experiments detected unusual chemical reactions, they did not provide clear evidence of living microorganisms. Both landers remain at their original landing sites on Mars.",
  "Fun Fact: The Viking landers were sterilized before launch to reduce the possibility of transporting microorganisms from Earth to Mars."
];
const VIKING_COMUN = [
  lista("Scientific experiments:",
    "Gas Exchange: Examined gases released when Martian soil was exposed to organic nutrients.",
    "Labeled Release: Used nutrients containing radioactive carbon-14 to investigate possible biological activity.",
    "Pyrolytic Release: Tested whether soil samples could incorporate carbon from labeled carbon dioxide.",
    "Gas Chromatograph Mass Spectrometer (GCMS): Searched for organic compounds in Martian soil."),
  lista("Additional results:",
    "Thousands of photographs transmitted from Mars.",
    "Measurements of atmospheric and weather conditions.",
    "Chemical analysis of Martian soil.",
    "Limited seismic measurements."),
  "The missions were originally planned for approximately 90 days, but both landers operated considerably longer. NASA reported that the biological experiments produced no clear evidence of living microorganisms.",
  lista("Sources", "https://www.nasa.gov/history/45-years-ago-viking-1-and-2-off-to-mars/")
];

// Spirit y Opportunity
const SO_INTRO = "Spirit and Opportunity were twin robotic rovers sent by NASA to explore the Martian surface and search for evidence of ancient water. Their discoveries showed that liquid water had existed on Mars in the distant past, helping scientists understand whether the planet might once have supported life.";
const SO_FINAL = "Both rovers remain on the Martian surface.";
const SO_CURIOSIDAD = "Fun Facts: Spirit's mission patch featured Marvin the Martian, while Opportunity's featured Duck Dodgers. When NASA ended its attempts to contact Opportunity, the song “I'll Be Seeing You,” performed by Billie Holiday, was played during the team's farewell.";
const SO_COMUN = [
  lista("Scientific achievements:",
    "Identification of geological evidence of ancient liquid water.",
    "Examination of sedimentary rocks and minerals.",
    "Analysis of Martian surface conditions.",
    "Collection of photographic and geological information."),
  "Both rovers were originally designed for approximately 90 Martian days of surface operations. Opportunity operated for nearly 15 years, becoming one of NASA's longest-lasting Mars exploration missions.",
  lista("Sources",
    "NASA, Mars Exploration Rovers: Spirit and Opportunity",
    "NASA/JPL, Mineral in Mars Berries Adds to Water Story",
    "Astronomy.com, Mission complete for Opportunity rover",
    "Astronomy.com, 20 years ago: Spirit and Opportunity rovers launched for Mars",
    "Smithsonian, Mars Exploration Rover",
    "Spaceflight Now, Mars rovers named “Spirit” and “Opportunity”")
];

// Phoenix e InSight
const PI_INTRO = [
  "Phoenix and InSight were NASA missions designed to investigate different characteristics of Mars. Phoenix explored the northern polar region, where it discovered water ice beneath the Martian surface. This discovery provided important information about the history of water on Mars. InSight focused on studying the planet's interior by detecting seismic activity, including Martian earthquakes.",
  "Both spacecraft were stationary landers, meaning they did not have wheels or travel across the surface. Phoenix stopped operating during the Martian winter, while InSight gradually lost power because dust accumulated on its solar panels."
];
const PI_FUENTES = lista("Sources", "https://science.nasa.gov/mission/mars-phoenix/");

/* ---------- Misiones ---------- */

const MISIONES = [
  {
    nombre: "Pioneer 10",
    numero: 1,
    enMarte: false,
    lat: null,
    lon: null,

    casual: PIONEER_CASUAL,
    tecnico: [
      lista("Pioneer 10",
        "Launch: March 2, 1972.",
        "Jupiter encounter: December 4, 1973.",
        "Last contact: January 23, 2003.",
        "Photographs of Jupiter: Approximately 500.",
        "Distance at last contact: Approximately 12.2 billion km.",
        "Travel speed: Approximately 2.6 astronomical units per year."),
      lista("Scientific achievements:",
        "First spacecraft to cross the asteroid belt.",
        "First close-up observations of Jupiter.",
        "Measurements of Jupiter's radiation environment.",
        "Investigation of energetic particles and magnetic fields."),
      "Pioneer 10 lost communication because its radioisotope power source gradually weakened, making communication increasingly difficult.",
      PIONEER_CARACT,
      "Both spacecraft continue moving away from the Sun.",
      PIONEER_FUENTES
    ],

    imagen:  { casual: "img-vid_Marte/pioneer10-casual.jpg", tecnico: "img-vid_Marte/pioneer10-tecnico.jpg" },
    alt:     { casual: "Pioneer 10 spacecraft", tecnico: "Pioneer 10 spacecraft diagram" },
    credito: { casual: "Credit: NASA", tecnico: "Credit: NASA" }
  },

  {
    nombre: "Pioneer 11",
    numero: 2,
    enMarte: false,
    lat: null,
    lon: null,

    casual: PIONEER_CASUAL,
    tecnico: [
      lista("Pioneer 11",
        "Launch: April 5, 1973.",
        "Jupiter encounter: December 2, 1974.",
        "Saturn encounter: September 1, 1979.",
        "Last contact: September 30, 1995.",
        "Travel speed: Approximately 2.5 astronomical units per year."),
      lista("Scientific achievements:",
        "First spacecraft to encounter Saturn.",
        "Close observations of Jupiter and Saturn.",
        "Study of planetary magnetic fields.",
        "Investigation of energetic particles in the outer solar system."),
      "Pioneer 11 lost communication when the spacecraft's orientation and Earth's changing position prevented reliable radio contact.",
      PIONEER_CARACT,
      "Both spacecraft continue moving away from the Sun.",
      PIONEER_FUENTES
    ],

    imagen:  { casual: "img-vid_Marte/pioneer11-casual.jpeg", tecnico: "img-vid_Marte/pioneer11-tecnico.jpeg" },
    alt:     { casual: "Pioneer 11 spacecraft", tecnico: "Pioneer 11 spacecraft diagram" },
    credito: { casual: "Credit: NASA", tecnico: "Credit: NASA" }
  },

  {
    nombre: "Viking 1",
    numero: 3,
    lat: 22.5,        // Chryse Planitia (aprox.)
    lon: -47.95,

    casual: VIKING_CASUAL,
    tecnico: [
      lista("Viking 1",
        "Launch: August 20, 1975.",
        "Landing: July 20, 1976.",
        "Last contact: November 13, 1982.",
        "Landing location: Chryse Planitia."),
      ...VIKING_COMUN
    ],

    imagen:  { casual: "img-vid_Marte/viking1-casual.jpg", tecnico: "img-vid_Marte/viking1-tecnico.jpg" },
    alt:     { casual: "Viking 1 lander on the Martian surface", tecnico: "Viking 1 landing site" },
    credito: { casual: "Credit: NASA", tecnico: "Credit: NASA" }
  },

  {
    nombre: "Viking 2",
    numero: 4,
    lat: 47.7,        // Utopia Planitia (aprox.)
    lon: 134.3,

    casual: VIKING_CASUAL,
    tecnico: [
      lista("Viking 2",
        "Launch: September 9, 1975.",
        "Landing: September 3, 1976.",
        "Last contact: April 11, 1980.",
        "Landing location: Utopia Planitia."),
      ...VIKING_COMUN
    ],

    imagen:  { casual: "img-vid_Marte/viking2-casual.jpg", tecnico: "img-vid_Marte/viking2-tecnico.jpg" },
    alt:     { casual: "Viking 2 lander on the Martian surface", tecnico: "Viking 2 landing site" },
    credito: { casual: "Credit: NASA", tecnico: "Credit: NASA" }
  },

  {
    nombre: "NEAR Shoemaker",
    numero: 5,
    enMarte: false,   // aterrizó en el asteroide 433 Eros
    lat: null,
    lon: null,

    casual: [
      "NEAR Shoemaker was a NASA spacecraft designed to explore the asteroid Eros. It became the first spacecraft to orbit an asteroid and later land on its surface. During its mission, it photographed the asteroid and studied its physical characteristics. The information collected helped scientists understand the composition and structure of asteroids.",
      "Its mission ended after the spacecraft experienced extremely cold temperatures and eventually stopped communicating. NEAR Shoemaker remains on the surface of asteroid Eros.",
      "Fun Fact: The spacecraft was renamed in honor of Eugene M. Shoemaker, a geologist who made important contributions to planetary science."
    ],
    tecnico: [
      lista("NEAR Shoemaker",
        "Launch: February 17, 1996.",
        "Arrival in Eros orbit: February 14, 2000.",
        "Landing: February 12, 2001.",
        "Last contact: February 28, 2001.",
        "Final location: Himeros region, asteroid 433 Eros.",
        "Developer: Johns Hopkins Applied Physics Laboratory."),
      lista("Scientific achievements:",
        "First spacecraft to orbit an asteroid.",
        "First spacecraft to land on an asteroid after orbiting it.",
        "Approximately 230 orbits completed.",
        "More than 160,000 photographs captured.",
        "Flyby of asteroid 253 Mathilde on June 27, 1997."),
      lista("Scientific instruments:",
        "Multispectral imaging camera.",
        "X-ray and gamma-ray spectrometers.",
        "Laser rangefinder.",
        "Magnetometer."),
      "The spacecraft also participated in observations of gamma-ray bursts between December 1999 and February 2001. After landing, NEAR Shoemaker continued transmitting scientific information until February 28, 2001. NASA attempted to restore communication in December 2002 without success.",
      lista("Sources",
        "https://science.nasa.gov/mission/near-shoemaker/",
        "http://nssdc.gsfc.nasa.gov/planetary/near.html (archived copy)")
    ],

    imagen:  { casual: "img-vid_Marte/near-casual.jpg", tecnico: "img-vid_Marte/near-casual.jpg" },
    alt:     { casual: "NEAR Shoemaker spacecraft", tecnico: "Asteroid 433 Eros photographed by NEAR Shoemaker" },
    credito: { casual: "Credit: NASA", tecnico: "Credit: NASA/JHUAPL" }
  },

  {
    nombre: "Mars Pathfinder",
    numero: 6,
    lat: 19.13,       // Ares Vallis (aprox.)
    lon: -33.22,

    casual: [
      "Mars Pathfinder was a NASA mission designed to explore Mars and demonstrate that robotic exploration could be accomplished at a lower cost. The mission carried a small robotic rover called Sojourner, which traveled across the Martian surface to examine nearby rocks and soil. The mission helped scientists learn about the planet's atmosphere, weather, and geological history.",
      "One of the rocks studied, Barnacle Bill, had a composition similar to andesite, a volcanic rock found on Earth. This suggested that Mars had experienced complex geological processes. Today, Sojourner remains on Mars near the lander, which was named the Carl Sagan Memorial Station.",
      "Fun Fact: The rover was named after Sojourner Truth, an American activist. Its name was selected through a student competition won by 12-year-old Valerie Ambroise."
    ],
    tecnico: [
      lista("Mission data",
        "Launch: December 4, 1996.",
        "Landing: July 4, 1997.",
        "Last contact: September 27, 1997.",
        "Official mission termination: March 10, 1998.",
        "Landing location: Ares Vallis, Mars.",
        "Rover: Sojourner.",
        "Launch vehicle: Delta II 7925.",
        "Power system: Solar panels."),
      lista("Scientific results:",
        "More than 16,000 images transmitted by the lander.",
        "Approximately 550 images transmitted by Sojourner.",
        "Measurements of atmospheric pressure, temperature, and wind speed.",
        "Chemical analysis of Martian rocks, including Barnacle Bill.",
        "Successful demonstration of a landing system using parachutes, rockets, and airbags."),
      "The mission exceeded its planned operating lifetime and demonstrated technologies that influenced later Mars exploration missions.",
      lista("Sources",
        "NASA, Mars Pathfinder (archived copy of science.nasa.gov)",
        "NASA/JPL, NASA Facts: Mars Pathfinder (archived PDF)",
        "NASA NSSDC, Mars Pathfinder Preliminary Results",
        "NASA PDS, PIA00680",
        "NASA JPL Robotics, Pathfinder",
        "NASA/JPL, NASA Names First Rover to Explore the Surface of Mars",
        "USGS Astrogeology, first rover to rove on Mars",
        "Astronomy.com, Sojourner: NASA's first Mars rover",
        "Smithsonian, Sojourner")
    ],

    imagen:  { casual: "img-vid_Marte/pathfinder-casual.jpg", tecnico: "img-vid_Marte/pathfinder-tecnico.jpg" },
    alt:     { casual: "Mars Pathfinder lander and the Sojourner rover", tecnico: "Sojourner rover studying the rock Barnacle Bill" },
    credito: { casual: "Credit: NASA/JPL", tecnico: "Credit: NASA/JPL" }
  },

  {
    nombre: "Spirit",
    numero: 7,
    lat: -14.57,      // Cráter Gusev (aprox.)
    lon: 175.48,

    casual: [
      SO_INTRO,
      "Spirit became trapped in soft soil in 2009. Its position made it difficult for its solar panels to collect enough sunlight.",
      SO_FINAL,
      SO_CURIOSIDAD
    ],
    tecnico: [
      lista("Spirit (MER-A)",
        "Launch: June 10, 2003.",
        "Landing: January 4, 2004.",
        "Last contact: March 22, 2010.",
        "Distance traveled: 7.7 km.",
        "Final location: Troy, near Home Plate in Gusev Crater."),
      ...SO_COMUN
    ],

    imagen:  { casual: "img-vid_Marte/spirit-casual.jpg", tecnico: "img-vid_Marte/spirit-tecnico.jpg" },
    alt:     { casual: "Spirit rover on Mars", tecnico: "Spirit rover in Gusev Crater" },
    credito: { casual: "Credit: NASA/JPL-Caltech", tecnico: "Credit: NASA/JPL-Caltech" }
  },

  {
    nombre: "Opportunity",
    numero: 8,
    lat: -1.95,       // Meridiani Planum (aprox.)
    lon: -5.53,

    casual: [
      SO_INTRO,
      "Opportunity continued exploring Mars for almost 15 years, far longer than its original mission. It eventually stopped communicating during a massive dust storm in 2018.",
      SO_FINAL,
      SO_CURIOSIDAD
    ],
    tecnico: [
      lista("Opportunity (MER-B)",
        "Launch: July 7, 2003.",
        "Landing: January 25, 2004.",
        "Last contact: June 10, 2018.",
        "Distance traveled: Approximately 45.16 km.",
        "Final location: Perseverance Valley, Endeavour Crater."),
      ...SO_COMUN
    ],

    imagen:  { casual: "img-vid_Marte/opportunity-casual.jpg", tecnico: "img-vid_Marte/opportunity-tecnico.jpg" },
    alt:     { casual: "Opportunity rover on Mars", tecnico: "Opportunity rover at Endeavour Crater" },
    credito: { casual: "Credit: NASA/JPL-Caltech", tecnico: "Credit: NASA/JPL-Caltech" }
  },

  {
    nombre: "Phoenix",
    numero: 9,
    lat: 68.22,       // Green Valley, Vastitas Borealis (aprox.)
    lon: -125.75,

    casual: [
      ...PI_INTRO,
      "Fun Fact: Phoenix became the first spacecraft to successfully land in the Martian polar region."
    ],
    tecnico: [
      lista("Phoenix",
        "Launch: August 4, 2007.",
        "Landing: May 25, 2008.",
        "Last contact: November 2, 2008.",
        "Landing location: Green Valley, Vastitas Borealis.",
        "Main objective: Investigate water ice, soil chemistry, and environmental conditions in the Martian Arctic."),
      lista("Scientific achievements:",
        "Confirmation of water ice beneath the surface.",
        "Collection of soil samples using a robotic arm.",
        "Analysis of soil composition.",
        "Monitoring of polar weather conditions."),
      PI_FUENTES
    ],

    imagen:  { casual: "img-vid_Marte/phoenix-casual.jpg", tecnico: "img-vid_Marte/phoenix-tecnico.jpg" },
    alt:     { casual: "Phoenix lander in the Martian Arctic", tecnico: "Phoenix robotic arm and soil sample" },
    credito: { casual: "Credit: NASA/JPL-Caltech", tecnico: "Credit: NASA/JPL-Caltech" }
  },

  {
    nombre: "Dawn",
    numero: 10,
    enMarte: false,   // orbita Ceres, en el cinturón de asteroides
    lat: null,
    lon: null,

    casual: [
      "Dawn was a NASA spacecraft designed to explore two important objects in the asteroid belt: Vesta and Ceres. It became the first spacecraft to orbit two different extraterrestrial bodies during a single mission. The spacecraft helped scientists understand the early formation of the solar system.",
      "While studying Ceres, Dawn discovered mysterious bright spots on its surface, which became an important subject of scientific investigation. Its mission ended when it ran out of hydrazine, the fuel needed to maintain its orientation. Dawn remains in orbit around Ceres.",
      "Fun Fact: The Dawn project was almost canceled before launch, but NASA eventually approved the mission, allowing it to become one of the most important explorations of the asteroid belt."
    ],
    tecnico: [
      lista("Dawn",
        "Launch: September 27, 2007.",
        "Arrival at Vesta: July 16, 2011.",
        "Departure from Vesta: September 5, 2012.",
        "Arrival at Ceres: March 6, 2015.",
        "Last communication: October 2018.",
        "End of mission: November 1, 2018.",
        "Total distance traveled: Approximately 6.9 billion km."),
      lista("Scientific achievements:",
        "First spacecraft to orbit an object in the main asteroid belt.",
        "First spacecraft to orbit a dwarf planet.",
        "First spacecraft to orbit two extraterrestrial bodies during one mission.",
        "Detailed investigation of Vesta and Ceres.",
        "Detection of bright deposits on Ceres."),
      lista("Technical characteristics:",
        "Ion propulsion system.",
        "Three ion thrusters.",
        "Solar arrays for electrical power.",
        "Hydrazine thrusters for attitude control.",
        "Scientific cameras and spectrometers."),
      "The spacecraft lost its ability to point its antenna toward Earth after exhausting its hydrazine supply. Dawn did not land on either Vesta or Ceres. It remained in orbit throughout its scientific investigations.",
      lista("Sources",
        "https://science.nasa.gov/solar-system/stories/",
        "https://earthsky.org/space/dawn-mission-asteroid-end-nov2018/")
    ],

    imagen:  { casual: "img-vid_Marte/dawn-casual.jpg", tecnico: "img-vid_Marte/dawn-casual.jpg" },
    alt:     { casual: "Dawn spacecraft orbiting Ceres", tecnico: "Bright deposits on Ceres photographed by Dawn" },
    credito: { casual: "Credit: NASA/JPL-Caltech", tecnico: "Credit: NASA/JPL-Caltech" }
  },

  {
    nombre: "Kepler",
    numero: 11,
    enMarte: false,   // órbita heliocéntrica
    lat: null,
    lon: null,

    casual: [
      "Kepler was a NASA space telescope designed to search for planets outside our solar system. Its mission was to discover exoplanets, which are planets that orbit stars other than the Sun. Kepler helped scientists understand that planets are extremely common throughout our galaxy. It discovered thousands of planets and provided important information about the possibility of Earth-sized planets existing around distant stars.",
      "Although its original mission was planned to last only a few years, Kepler continued operating for approximately nine years. The telescope stopped working when it ran out of fuel needed to maintain its orientation. Today, Kepler remains in orbit around the Sun.",
      "Fun Fact: In December 2017, Kepler photographed Earth as part of a farewell campaign called “Wave at Kepler.”"
    ],
    tecnico: [
      lista("Kepler Space Telescope",
        "Launch: March 6, 2009.",
        "First images: April 8, 2009.",
        "Last contact: October 15, 2018.",
        "End of mission: October 30, 2018.",
        "Original mission duration: 3.5 years.",
        "Actual operating duration: Approximately 9 years.",
        "Extended K2 mission approved: May 16, 2014."),
      lista("Scientific achievements:",
        "Discovery of more than 2,600 confirmed exoplanets by the end of its mission.",
        "Identification of planetary systems outside the solar system.",
        "Evidence that planets are common throughout the Milky Way.",
        "Observations of stars near the constellation Cygnus."),
      lista("Technical characteristics:",
        "Camera: Approximately 95 megapixels.",
        "Observation method: Transit photometry.",
        "Orbit: Heliocentric orbit, trailing Earth.",
        "Orbital semi-major axis: Approximately 1.0133 astronomical units.",
        "Observation region: Included millions of detectable stars."),
      "How it worked: Kepler measured small changes in the brightness of stars. When a planet passed in front of its star, it blocked a small amount of light. By measuring these changes, scientists could identify possible planets and estimate their sizes and orbital periods.",
      "The telescope eventually ran out of the fuel needed to control its orientation, preventing further scientific observations. Kepler remains in a stable orbit around the Sun without communication with Earth.",
      lista("Sources",
        "https://science.nasa.gov/mission/kepler/",
        "https://www.planetary.org/articles/farewell-kepler")
    ],

    imagen:  { casual: "img-vid_Marte/kepler-casual.jpg", tecnico: "img-vid_Marte/kepler-tecnico.jpg" },
    alt:     { casual: "Kepler Space Telescope", tecnico: "Diagram of the transit method used by Kepler" },
    credito: { casual: "Credit: NASA", tecnico: "Credit: NASA" }
  },

  {
    nombre: "InSight",
    numero: 12,
    lat: 4.5,         // Elysium Planitia (aprox.)
    lon: 135.62,

    casual: [
      ...PI_INTRO,
      "Fun Fact: InSight shared a farewell message through social media, thanking the people who followed its mission."
    ],
    tecnico: [
      lista("InSight",
        "Launch: May 5, 2018.",
        "Landing: November 26, 2018.",
        "Last contact: December 15, 2022.",
        "Landing location: Elysium Planitia.",
        "Main objective: Investigate the internal structure of Mars."),
      lista("Scientific achievements:",
        "Detection of more than 1,300 Martian earthquakes.",
        "Collection of seismic information about the crust, mantle, and core.",
        "Measurements related to the planet's internal structure.",
        "Study of heat transfer beneath the Martian surface."),
      "By February 2021, InSight's solar panels were producing approximately 27% of their original power capacity. Its heat probe, known as “the mole,” was unable to penetrate the soil to its planned depth.",
      PI_FUENTES
    ],

    imagen:  { casual: "img-vid_Marte/insight-tecnico.jpg", tecnico: "img-vid_Marte/insight-tecnico.jpg" },
    alt:     { casual: "InSight lander on the Martian surface", tecnico: "InSight seismometer and heat probe" },
    credito: { casual: "Credit: NASA/JPL-Caltech", tecnico: "Credit: NASA/JPL-Caltech" }
  },

  {
    nombre: "Ingenuity",
    numero: 13,
    lat: 18.44,       // Cráter Jezero (aprox.)
    lon: 77.45,

    casual: [
      "Ingenuity was a small robotic helicopter sent to Mars with NASA's Perseverance rover. It became the first aircraft to achieve powered, controlled flight on another planet. Its main purpose was to demonstrate that flying was possible in the thin Martian atmosphere.",
      "Originally, Ingenuity was expected to perform only five test flights. However, it exceeded expectations and completed 72 flights. During its final flight, the helicopter damaged its rotor blades while landing, making further flights impossible. Ingenuity remains on Mars in Jezero Crater.",
      "Fun Fact: Ingenuity carried a small piece of fabric from the Wright brothers' original airplane, Flyer 1, connecting the first powered flight on Earth with the first powered flight on another planet."
    ],
    tecnico: [
      lista("Ingenuity",
        "Launch: July 30, 2020.",
        "Landing on Mars: February 18, 2021.",
        "First flight: April 19, 2021.",
        "Last flight: January 18, 2024.",
        "End of flight mission: January 25, 2024.",
        "Location: Jezero Crater.",
        "Total flights: 72.",
        "Total distance traveled: Approximately 17 km.",
        "Total flight time: Approximately 128.8 minutes.",
        "Maximum altitude: 24 meters.",
        "Maximum speed: 36 km/h."),
      lista("Technical characteristics:",
        "Solar-powered helicopter.",
        "Two counter-rotating rotor blades.",
        "Autonomous flight control system.",
        "Navigation cameras and sensors.",
        "Designed to operate in the thin Martian atmosphere."),
      "During flight 72, the navigation system experienced difficulties tracking the sandy terrain. The helicopter landed with excessive horizontal velocity, damaging its rotor blades. The resulting damage prevented additional flights.",
      lista("Sources",
        "https://www.jpl.nasa.gov/missions/ingenuity",
        "https://www.planetary.org/space-missions/ingenuity")
    ],

    imagen:  { casual: "img-vid_Marte/ingenuity-casual.jpg", tecnico: "img-vid_Marte/ingenuity-tecnico.jpg" },
    alt:     { casual: "Ingenuity helicopter on the Martian surface", tecnico: "Ingenuity helicopter in flight" },
    credito: { casual: "Credit: NASA/JPL-Caltech", tecnico: "Credit: NASA/JPL-Caltech" }
  }
];
