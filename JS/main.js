(() => {
  if (!document.querySelector(".recorrido")) return;   // si no es la portada, no hace nada

const recorrido = document.querySelector(".recorrido");

function actualizar() {
  const r = recorrido.getBoundingClientRect();
  const total = recorrido.offsetHeight - window.innerHeight;
  const t = Math.min(Math.max(-r.top / total, 0), 1);   // 0 al inicio, 1 al final
  recorrido.style.setProperty("--t", t.toFixed(3));

  // agrega "ui-oculta" cuando ya casi no se ven las etiquetas, y la quita al volver arriba
  recorrido.classList.toggle("ui-oculta", t > 0.24);

  recorrido.classList.toggle("tarjetas-activas", t > 0.6);
}
window.addEventListener("scroll", actualizar, { passive: true });
actualizar();

// ---- ESTRELLAS ----
const contenedorEstrellas = document.querySelector(".estrellas");
const CANTIDAD = 45;

for (let i = 0; i < CANTIDAD; i++) {
  const e = document.createElement("span");
  e.className = "estrella" + (i % 3 === 0 ? " brilla" : "");
  e.style.setProperty("--x", (Math.random() * 100).toFixed(1) + "%");
  e.style.setProperty("--y", (Math.random() * 100).toFixed(1) + "%");
  e.style.setProperty("--tam", (2 + Math.random() * 3).toFixed(1) + "px");
  e.style.setProperty("--fase", Math.random().toFixed(2));
  e.style.setProperty("--vel", (2 + Math.random() * 3).toFixed(1));
  contenedorEstrellas.appendChild(e);
}

// ---- ÓRBITAS ----
// Para "dibujar" una línea hay que decirle su largo total
document.querySelectorAll(".linea").forEach((l) => {
  const L = l.getTotalLength();
  l.style.strokeDasharray = L;
  l.style.setProperty("--L", L);
});

// Si la persona pidió menos movimiento en su sistema, pausa los planetas
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelector(".orbitas").pauseAnimations();
}

// Para que recargue desde el inicio de la página al presionar F5

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

// Para memoria al usar las flechas de navegación del navegador

window.addEventListener("pageshow", (e) => {
  if (e.persisted) window.scrollTo(0, 0);
});

// ---- ESTRELLAS ----
function crearEstrellas(contenedor, cantidad, parpadean) {
  for (let i = 0; i < cantidad; i++) {
    const e = document.createElement("span");
    e.className = "estrella" + (parpadean && i % 3 === 0 ? " brilla" : "");
    e.style.setProperty("--x", (Math.random() * 100).toFixed(1) + "%");
    e.style.setProperty("--y", (Math.random() * 100).toFixed(1) + "%");
    e.style.setProperty("--tam", (2 + Math.random() * 3).toFixed(1) + "px");
    e.style.setProperty("--fase", Math.random().toFixed(2));
    e.style.setProperty("--vel", (2 + Math.random() * 3).toFixed(1));
    contenedor.appendChild(e);
  }
}

crearEstrellas(document.querySelector(".estrellas"), 45, true);                 // portada: parpadean con el scroll
document.querySelectorAll(".estrellas-tarjeta").forEach((c) => crearEstrellas(c, 18, false)); // tarjetas: fijas

})();

// ============================================================
// LUNA y MARTE (luna.html y marte.html usan este mismo código)
// ============================================================

(() => {
  if (!document.getElementById("luna-canvas")) return;   // si no es la página de la Luna o de Marte, no hace nada

  const escena = document.getElementById("escena");
  const canvas = document.getElementById("luna-canvas");
  const contMarc = document.getElementById("marcadores");
  const reducir = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Estrellas de fondo (fijas) ----
  const fondo = document.getElementById("fondo-estrellas");
  for (let i = 0; i < 80; i++) {
    const e = document.createElement("span");
    e.className = "estrella";
    e.style.setProperty("--x", (Math.random() * 100).toFixed(1) + "%");
    e.style.setProperty("--y", (Math.random() * 100).toFixed(1) + "%");
    e.style.setProperty("--tam", (2 + Math.random() * 3).toFixed(1) + "px");
    fondo.appendChild(e);
  }

  // ---- Escena 3D: una esfera con la textura de la superficie ----
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
  const luna = new THREE.Group();
  scene.add(luna);

  const material = new THREE.MeshStandardMaterial({ color: 0xb9b4ab, roughness: 1, metalness: 0 });
  luna.add(new THREE.Mesh(new THREE.SphereGeometry(1, 96, 64), material));

  new THREE.TextureLoader().load(
    canvas.dataset.textura,
    (tx) => { tx.encoding = THREE.sRGBEncoding; tx.anisotropy = 8; material.map = tx; material.color.set(0xffffff); material.needsUpdate = true; },
    undefined,
    () => console.warn("No se encontró " + canvas.dataset.textura + ": se muestra una esfera gris.")
  );

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const luz = new THREE.DirectionalLight(0xffffff, 1.1);
  luz.position.set(-3, 2, 4);
  scene.add(luz);

  function ajustar() {
    const w = escena.clientWidth, h = escena.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.position.set(0, 0, Math.max(4, 3.8 / camera.aspect)); // en pantallas angostas se aleja
    camera.updateProjectionMatrix();
  }
  addEventListener("resize", ajustar);
  ajustar();

  // ---- Puntos de las misiones: se ubican con latitud y longitud ----
  // Las misiones con enMarte: false (o sin lat/lon) NO llevan punto: van en una lista de botones abajo.
  const desfase = Number(canvas.dataset.desfase) || 0;
  const marcadores = [];
  let otras = null;

  MISIONES.forEach((m, i) => {
    const numero = String(m.numero).padStart(2, "0");

    if (m.enMarte === false || m.lat == null || m.lon == null) {
      if (!otras) {
        otras = document.createElement("nav");
        otras.className = "otras";
        otras.setAttribute("aria-label", "Missions that are not on the surface");
        const t = document.createElement("span");
        t.className = "otras-titulo";
        t.textContent = "Elsewhere in space";
        otras.appendChild(t);
        escena.appendChild(otras);
      }
      const o = document.createElement("button");
      o.type = "button";
      o.className = "otra";
      o.innerHTML = "<b></b><span></span>";
      o.querySelector("b").textContent = numero;
      o.querySelector("span").textContent = m.nombre;
      o.addEventListener("click", () => abrir(i, o));
      otras.appendChild(o);
      return;
    }

    const lat = (m.lat * Math.PI) / 180;
    const phi = (((m.lon + desfase + 180) / 360) * 2 * Math.PI);
    const pos = new THREE.Vector3(-Math.cos(phi) * Math.cos(lat), Math.sin(lat), Math.sin(phi) * Math.cos(lat));

    const b = document.createElement("button");
    b.type = "button";
    b.className = "marcador";
    b.setAttribute("aria-label", `${m.nombre}, misión ${m.numero}`);
    b.innerHTML = '<span class="cartel"><span class="nom"></span><span class="num"></span></span>';
    b.querySelector(".nom").textContent = m.nombre;
    b.querySelector(".num").textContent = numero;
    b.addEventListener("click", () => abrir(i, b));
    contMarc.appendChild(b);
    marcadores.push({ el: b, pos });
  });

  const v = new THREE.Vector3(), n = new THREE.Vector3(), c = new THREE.Vector3();
  function colocar() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    luna.updateMatrixWorld();
    marcadores.forEach(({ el, pos }) => {
      v.copy(pos).applyMatrix4(luna.matrixWorld);          // posición real en el espacio
      n.copy(v).normalize();
      c.copy(camera.position).sub(v).normalize();
      const visible = n.dot(c) > 0.12;                      // solo si está en la cara que vemos
      el.style.visibility = visible ? "visible" : "hidden";
      if (!visible) return;
      v.project(camera);                                    // de 3D a coordenadas de pantalla
      el.style.left = ((v.x + 1) / 2) * w + "px";
      el.style.top = ((1 - v.y) / 2) * h + "px";
    });
  }

  // ---- Giro horizontal con flechas ----
  const PASO = Math.PI / 6;                                 // 30° por clic
  let objetivo = -Math.PI / 2, actual = objetivo;           // arranca mostrando la cara visible (longitud 0)
  const girar = (d) => { objetivo += d * PASO; };
  document.getElementById("btn-izq").addEventListener("click", () => girar(-1));
  document.getElementById("btn-der").addEventListener("click", () => girar(1));

  (function animar() {
    actual += (objetivo - actual) * (reducir ? 1 : 0.08);
    luna.rotation.y = actual;
    colocar();
    renderer.render(scene, camera);
    requestAnimationFrame(animar);
  })();

  // ---- Ventana de la misión ----
  const modal = document.getElementById("modal");
  const titulo = document.getElementById("m-titulo");
  const texto = document.getElementById("m-texto");
  const fig = document.getElementById("m-fig");
  const img = document.getElementById("m-img");
  const credito = document.getElementById("m-credito");
  const tabs = document.querySelectorAll(".tab");
  let actualM = null, origen = null;

  // imagen, alt y crédito pueden ser un texto simple o un objeto { casual: "...", tecnico: "..." }
  const segunModo = (valor, modo) => (valor && typeof valor === "object" ? valor[modo] || "" : valor || "");

  function mostrar(modo) {
    tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.modo === modo)));
    texto.setAttribute("aria-labelledby", "tab-" + modo);
    texto.replaceChildren(...(actualM[modo] || []).map((t) => { const p = document.createElement("p"); p.textContent = t; return p; }));
    texto.classList.remove("cambia"); void texto.offsetWidth; texto.classList.add("cambia"); // repite la animación

    const src = segunModo(actualM.imagen, modo);
    fig.hidden = !src;                                      // sin imagen: se oculta el recuadro
    img.onload = () => { fig.hidden = false; };
    img.onerror = () => { fig.hidden = true; };             // si el archivo no existe, tampoco se muestra
    if (src) img.src = src; else img.removeAttribute("src");
    img.alt = segunModo(actualM.alt, modo) || actualM.nombre;
    credito.textContent = segunModo(actualM.credito, modo);
  }

  function abrir(i, boton) {
    actualM = MISIONES[i]; origen = boton;
    titulo.textContent = actualM.nombre;
    texto.classList.remove("cambia");
    mostrar("casual");
    texto.classList.remove("cambia");                       // al abrir manda la animación de entrada
    modal.classList.add("abierta");
    modal.setAttribute("aria-hidden", "false");
    escena.classList.add("difuminada");
    document.getElementById("m-cerrar").focus();
  }

  function cerrar() {
    modal.classList.remove("abierta");
    modal.setAttribute("aria-hidden", "true");
    escena.classList.remove("difuminada");
    if (origen) origen.focus();
  }

  tabs.forEach((t) => t.addEventListener("click", () => mostrar(t.dataset.modo)));
  document.getElementById("m-cerrar").addEventListener("click", cerrar);
  modal.addEventListener("click", (e) => { if (e.target === modal) cerrar(); });
  addEventListener("keydown", (e) => {
    const abierta = modal.classList.contains("abierta");
    if (e.key === "Escape" && abierta) cerrar();
    if (!abierta && e.key === "ArrowLeft") girar(-1);
    if (!abierta && e.key === "ArrowRight") girar(1);
  });
})();
