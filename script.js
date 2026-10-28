//CAMBIAR PAGINA
const botonesMenu = document.querySelectorAll('#nav button');
let demoIniciada = false;

function mostrar(nombre){
  //A la sección elegida se le pone la clase "activo"; a las demás se les quita
  document.querySelectorAll('section').forEach(function (seccion) {
    seccion.classList.toggle('activo', seccion.id === nombre);
  });
  //Lo mismo con el botón del menú: el activo se ve como círculo azul
  botonesMenu.forEach(function (boton) {
    boton.classList.toggle('activo', boton.dataset.t === nombre);
  });
  //Sube la página para no quedar a media pantalla
  window.scrollTo(0, 0);
  //La primera vez que se abre el traductor corre la demo con la palabra de ejemplo
  if (nombre === 'traductor' && !demoIniciada){
    demoIniciada = true;
    mostrarSenas();
  }
}

//Clic en un botón del menú: muestra la sección que indica su data-t
botonesMenu.forEach(function (boton) {
  boton.onclick = function () {
    mostrar(boton.dataset.t);
  };
});

//Botones de la portada: llevan a la sección que indica su data-go
document.querySelectorAll('[data-go]').forEach(function (boton) {
  boton.onclick = function () {
    mostrar(boton.dataset.go);
  };
});

//COLORES
const lienzo = document.getElementById('mano');
const pincel = lienzo.getContext('2d');

function colorCSS(nombre){
  return getComputedStyle(document.documentElement).getPropertyValue(nombre).trim();
}
//MODELO DE MANO

// Letras en orden
const ABECEDARIO = 'abcdefghijklmnñopqrstuvwxyz';
//posición de la muñeca
const MUNECA = [0, -1.05, 0];
//dónde nace el pulgar
const BASE_PULGAR = [-0.24, -0.75, 0.05];
//[x, y] del nudillo de cada dedo (índice, medio, anular, meñique)
const NUDILLOS = [[-0.36, -0.03], [-0.06, 0.09], [0.24, 0.0], [0.51, -0.21]];
//Largo de los 3 huesos de cada dedo
const LARGOS = [[.39,.27,.21], [.42,.30,.21], [.39,.27,.21], [.30,.21,.18]];
//Largo de los 3 huesos del pulgar
const LARGOS_PULGAR = [.30, .27, .24];
//Angulo lateral natural de cada dedo en radianes (separación)
const ABANICO = [-0.30, -0.10, 0.10, 0.30];


const dir = (phi, th) => [Math.sin(phi)*Math.cos(th), Math.cos(phi)*Math.cos(th), Math.sin(th)];

function construirMano(pose){
  const p = [MUNECA.slice()];
  let [x, y, z] = BASE_PULGAR;
  p[1] = [x, y, z];

  //Pulgar: 3 huesos que se doblan según su curva
  const cp = pose.curvas[0], angP = -0.95 + cp*1.2, pasosP = [0.4, 0.7, 0.5];
  let th = 0;
  for (let i = 0; i < 3; i++){
    th += cp * pasosP[i];
    const d = dir(angP, th);
    x += d[0]*LARGOS_PULGAR[i]; y += d[1]*LARGOS_PULGAR[i]; z += d[2]*LARGOS_PULGAR[i];
    p[2+i] = [x, y, z];
  }

  //Los otros cuatro dedos: se doblan hacia la palma en cada articulación
  const pasos = [1.4, 1.5, 1.0];
  for (let f = 0; f < 4; f++){
    const ini = 5 + f*4, phi = ABANICO[f]*pose.abre;
    x = NUDILLOS[f][0]; y = NUDILLOS[f][1]; z = 0; th = 0;
    p[ini] = [x, y, z];
    for (let i = 0; i < 3; i++){
      th += pose.curvas[f+1] * pasos[i];
      const d = dir(phi, th);
      x += d[0]*LARGOS[f][i]; y += d[1]*LARGOS[f][i]; z += d[2]*LARGOS[f][i];
      p[ini+1+i] = [x, y, z];
    }
  }
  return p;
}

//Poses de ejemplo para letras que aún no tengan seña. ry = giro de la mano
const POSES = [
  {curvas:[0,0,0,0,0], abre:1,  ry:0},    {curvas:[1,1,1,1,1], abre:0,  ry:0.5},
  {curvas:[1,0,1,1,1], abre:0,  ry:-0.5}, {curvas:[1,0,0,1,1], abre:1,  ry:0.3},
  {curvas:[0,1,1,1,1], abre:0,  ry:-0.3}, {curvas:[1,0,0,0,1], abre:.6, ry:0.6},
  {curvas:[0,0,1,1,1], abre:1,  ry:-0.6}
];

//Mano relajada: así empieza y termina cada animacion
const REPOSO = {curvas:[.35,.35,.35,.35,.35], abre:.3, ry:0};
const senasGrabadas = {};
const estadoDe = pose => ({p: construirMano(pose), ry: pose.ry || 0});

//DIBUJA LA MANO

//Pares de puntos que se unen con un hueso
const HUESOS = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[9,10],[10,11],[11,12],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];
//Tamaño de la mano en pantalla
const ESCALA = 165;
//Distancia de la cámara
const CAMARA_Z = 6;
//Giro extra que el usuario da arrastrando: x = arriba/abajo, y = izquierda/derecha
const giro = {x: 0, y: 0};

//Convierte un punto 3D en un punto de la pantalla 2D.

function proyectar(q, ry, rx){
  const x1 = q[0]*Math.cos(ry) + q[2]*Math.sin(ry);
  const z1 = -q[0]*Math.sin(ry) + q[2]*Math.cos(ry);
  const y2 = q[1]*Math.cos(rx) - z1*Math.sin(rx);
  const z2 = q[1]*Math.sin(rx) + z1*Math.cos(rx);
  const f = CAMARA_Z / (CAMARA_Z - z2);
  return {
    x: lienzo.width/2 + x1*ESCALA*f,
    y: lienzo.height/2 - y2*ESCALA*f,
    z: z2,
    f: f
  };
}

//Dibuja en el canvas la pose guardada en ESTADO
function dibujar(){
  pincel.clearRect(0, 0, lienzo.width, lienzo.height);
  const azul = colorCSS('--azul'), blanco = colorCSS('--tarjeta');
  const pts = estado.p.map(function (q) {
    return proyectar(q, estado.ry + giro.y, giro.x);
  });

  //Palma: polígono azul transparente que une muñeca, pulgar y nudillos
  pincel.beginPath();
  [0, 1, 5, 9, 13, 17].forEach(function (i, k) {
    if (k === 0) pincel.moveTo(pts[i].x, pts[i].y);
    else pincel.lineTo(pts[i].x, pts[i].y);
  });
  pincel.closePath();
  pincel.globalAlpha = 0.25;
  pincel.fillStyle = azul;
  pincel.fill();
  pincel.globalAlpha = 1;

  //Huesos: se dibujan primero los lejanos para que los cercanos queden encima
  const huesos = HUESOS.map(function (h) { return {a: pts[h[0]], b: pts[h[1]]}; });
  huesos.sort(function (m, n) { return (m.a.z + m.b.z) - (n.a.z + n.b.z); });
  pincel.lineCap = 'round';
  pincel.strokeStyle = azul;
  huesos.forEach(function (h) {
    pincel.lineWidth = 11 * (h.a.f + h.b.f) / 2;
    pincel.beginPath();
    pincel.moveTo(h.a.x, h.a.y);
    pincel.lineTo(h.b.x, h.b.y);
    pincel.stroke();
  });

  //Articulaciones: circulitos blancos con borde azul
  pts.slice().sort(function (m, n) { return m.z - n.z; }).forEach(function (q) {
    pincel.beginPath();
    pincel.arc(q.x, q.y, 8 * q.f, 0, Math.PI * 2);
    pincel.fillStyle = blanco;
    pincel.fill();
    pincel.lineWidth = 3;
    pincel.strokeStyle = azul;
    pincel.stroke();
  });
}

//Girar la mano arrastrando con mouse o dedo
const ayuda = document.getElementById('mano-ayuda');
//Ultima posición del puntero mientras se arrastra (null = no se arrastra)
let arrastre = null;

//Al presionar: empieza el arrastre y se oculta el texto de ayuda
lienzo.addEventListener('pointerdown', function (e) {
  arrastre = [e.clientX, e.clientY];
  lienzo.setPointerCapture(e.pointerId);
  ayuda.hidden = true;
});

//Al mover: suma el movimiento al giro y redibuja
lienzo.addEventListener('pointermove', function (e) {
  if (!arrastre) return;
  giro.y += (e.clientX - arrastre[0]) * 0.01;
  //El giro vertical se limita para que la mano no se voltee de cabeza
  giro.x = Math.max(-1.2, Math.min(1.2, giro.x + (e.clientY - arrastre[1]) * 0.01));
  arrastre = [e.clientX, e.clientY];
  dibujar();
});
//Termina el arrastre
function soltar(){ arrastre = null; }
lienzo.addEventListener('pointerup', soltar);
lienzo.addEventListener('pointercancel', soltar);

//Doble clic: regresa la mano a su vista normal
lienzo.addEventListener('dblclick', function () {
  giro.x = 0;
  giro.y = 0;
  dibujar();
});


//5. ANIMAR ENTRE POSES

function mezclar(a, b, t){
  return {
    p: a.p.map(function (q, i) {
      return [
        q[0] + (b.p[i][0] - q[0]) * t,
        q[1] + (b.p[i][1] - q[1]) * t,
        q[2] + (b.p[i][2] - q[2]) * t
      ];
    }),
    ry: a.ry + (b.ry - a.ry) * t
  };
}

//Suaviza el avance: arranca y frena despacio
function suave(t){
  return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;
}

//Espera "ms" milisegundo
function espera(ms){
  return new Promise(function (resolver) { setTimeout(resolver, ms); });
}

//Pose que se está viendo ahora
let estado = estadoDe(REPOSO);
//Numero de la animación actual; si cambia, la animación anterior se corta
let ejecucion = 0;

//Anima la mano desde el estado actual hasta una pose destino.

function animar(destino, duracion, id){
  return new Promise(function (resolver) {
    const origen = estado, inicio = performance.now();
    function paso(ahora){
      //llego otra animación: se corta
      if (id !== ejecucion){ resolver(); return; }
      const t = Math.min((ahora - inicio) / duracion, 1);
      estado = mezclar(origen, destino, suave(t));
      dibujar();
      if (t < 1) requestAnimationFrame(paso);
      else resolver();
    }
    requestAnimationFrame(paso);
  });
}


//6. DE TEXTO A SECUENCIA DE SEÑAS
function armarSecuencia(texto){
  const pasos = [];
  //xMinúsculas y sin acentos, protegiendo la ñ para que no pierda su virgulilla
  const limpio = texto.toLowerCase()
    .replace(/ñ/g, '\u0001')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\u0001/g, 'ñ');

  limpio.split(/\s+/).filter(Boolean).forEach(function (palabra, n) {
    //Entre palabras mete un descanso
    if (n) pasos.push({etiqueta: '', est: estadoDe(REPOSO), aviso: '', espacio: true});

    const letras = [...palabra];
    for (let i = 0; i < letras.length; i++){
      let letra = letras[i];
      //"ll" y "rr" son una sola seña
      const par = letra + (letras[i + 1] || '');
      if ((par === 'll' || par === 'rr') && senasGrabadas[par]){ letra = par; i++; }

      const pos = ABECEDARIO.indexOf(letra[0]);
      //ignora números y símbolos
      if (pos < 0) continue;

      const real = senasGrabadas[letra];
      if (!real){
        //Sin seña real: usa una pose de ejemplo
        pasos.push({
          etiqueta: letra,
          est: estadoDe(POSES[pos % POSES.length]),
          aviso: 'Pose de ejemplo, no es seña oficial'
        });
      } else {
        pasos.push({
          etiqueta: letra,
          est: real.cuadros ? real.cuadros[real.cuadros.length - 1] : real,
          cuadros: real.cuadros,
          aviso: real.revisada ? '' : 'Puede que las señas no sean certeras aun'
        });
      }
    }
  });
  return pasos;
}

async function reproducir(pasos){
  //si se pulsa "Mostrar señas" otra vez, esta ejecución se corta
  const id = ++ejecucion;
  //duración: mayor = más lento
  const factor = Number(document.getElementById('velocidad').value);
  const letraGrande = document.getElementById('mano-letra');
  const aviso = document.getElementById('mano-aviso');
  const limpiar = function () {
    document.querySelectorAll('.recuadro.actual').forEach(function (r) { r.classList.remove('actual'); });
  };

  for (let i = 0; i < pasos.length; i++){
    if (id !== ejecucion) return;
    const paso = pasos[i];
    limpiar();
    const caja = document.getElementById('r' + i);
    if (caja) caja.classList.add('actual');
    letraGrande.textContent = paso.etiqueta.toUpperCase();
    aviso.textContent = paso.aviso;
    aviso.hidden = !paso.aviso;

    //Seña con movimiento: pasa por todos sus cuadros; si no, va directo a la pose final
    const cuadros = paso.cuadros || [paso.est];
    const duracion = cuadros.length > 1 ? 400 : 700;
    for (const cuadro of cuadros){
      await animar(cuadro, duracion * factor, id);
      if (id !== ejecucion) return;
    }
    //pausa para poder verla
    await espera((paso.espacio ? 200 : 800) * factor);
  }

  //Al terminar, la mano regresa a reposo
  if (id === ejecucion){
    limpiar();
    letraGrande.textContent = '';
    aviso.hidden = true;
    await animar(estadoDe(REPOSO), 600 * factor, id);
  }
}

//Lee el texto del campo, crea un recuadro por letra y lanza la animación
function mostrarSenas(){
  const pasos = armarSecuencia(document.getElementById('txt').value);
  const caja = document.getElementById('tiles');
  caja.innerHTML = '';
  pasos.forEach(function (p, i) {
    caja.insertAdjacentHTML('beforeend', p.espacio
      ? '<div class="espacio"></div>'
      : '<div class="recuadro" id="r' + i + '"><div class="imagen">' + p.etiqueta.toUpperCase() + '</div></div>');
  });
  reproducir(pasos);
}

document.getElementById('go').onclick = mostrarSenas;
//Enter dentro del campo de texto también muestra las señas
document.getElementById('txt').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') mostrarSenas();
});


//7. SEÑAS A LETRAS: ESCUCHAR Y BORRAR

//"Escuchar": el navegador lee en voz alta el texto detectado (español de México)
document.getElementById('speak').onclick = function () {
  try {
    const texto = document.getElementById('said').textContent;
    if (!texto) return;
    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = 'es-MX';
    speechSynthesis.speak(voz);
    //si el navegador no tiene voz, no pasa nada
  } catch (e) {}
};

//"Borrar": vacía el texto detectado
document.getElementById('clear').onclick = function () {
  document.getElementById('said').textContent = '';
};

// Dibuja la mano en reposo desde el inicio
dibujar();