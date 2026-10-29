//1. POSTURAS DE DEDO REUTILIZABLES: [nudillo, 1ª, 2ª] en grados
const EXT      = [0, 0, 0];        // dedo recto
const PUNO     = [88, 100, 65];    // dedo cerrado en puño
const GARRA    = [65, 85, 25];     // dedo en garra corta (letra E)
const CURVA    = [35, 40, 25];     // dedo curvo abierto (letra C)
const REDONDO  = [50, 55, 35];     // dedo curvo que cierra un círculo (O, F)
const CERRADO_D = [55, 65, 35];    // dedos que forman el círculo de la D
const GANCHO   = [10, 95, 25];     // dedo en gancho (letra X)

//Indice del punto de la punta de cada dedo (para t: 'i', 'm', 'a', 'q')
const PUNTAS = {i: 8, m: 12, a: 16, q: 20};

//Movimiento de "sacudida" de lado a lado (LL, Ñ y RR)
const SACUDIDA = [
  {m: [0, 0, 0], r: [0, 0, 0]},
  {m: [0, 0, 0], r: [0, 0, -14]},
  {m: [0, 0, 0], r: [0, 0, 14]},
  {m: [0, 0, 0], r: [0, 0, -14]},
  {m: [0, 0, 0], r: [0, 0, 0]}
];

//2. EL ALFABETO
const SENAS = {
  // A: puño con el pulgar estirado pegado al lado del índice
  a: {d: [PUNO, PUNO, PUNO, PUNO], t: [-0.52, 0.0, 0.2]},
  // B: mano abierta, dedos juntos, pulgar cruzado sobre la palma
  b: {d: [EXT, EXT, EXT, EXT], t: [0.1, -0.45, 0.12]},
  // C: mano curva en forma de C
  c: {d: [CURVA, CURVA, CURVA, CURVA], ab: 0.4, t: [-0.3, -0.05, 0.65]},
  // D: índice arriba; los otros dedos curvos tocan la punta del pulgar
  d: {d: [EXT, CERRADO_D, CERRADO_D, CERRADO_D], t: 'm'},
  // E: dedos en garra, pulgar debajo de las puntas
  e: {d: [GARRA, GARRA, GARRA, GARRA], t: [0.0, -0.5, 0.4]},
  // F: índice y pulgar forman un círculo; los otros tres dedos arriba
  f: {d: [REDONDO, EXT, EXT, EXT], ab: 1, t: 'i'},
  // G: mano de lado, índice y pulgar paralelos apuntando a la derecha
  g: {d: [EXT, PUNO, PUNO, PUNO], t: [-0.5, 0.1, 0.15], r: [0, 0, -90]},
  // H: índice y medio juntos apuntando de lado
  h: {d: [EXT, EXT, PUNO, PUNO], t: [0.0, -0.35, 0.45], r: [0, 0, -90]},
  // I: meñique arriba, resto en puño
  i: {d: [PUNO, PUNO, PUNO, EXT], ab: 0.6, t: [0.0, -0.2, 0.5]},
  // J: como la I, y el meñique dibuja una J hacia abajo y a la izquierda
  j: {d: [PUNO, PUNO, PUNO, EXT], ab: 0.6, t: [0.0, -0.2, 0.5], marcos: [
    {m: [0.05, 0.25, 0],  r: [0, 0, 0]},
    {m: [0.05, -0.05, 0], r: [0, 0, 0]},
    {m: [0, -0.25, 0],    r: [0, 0, 35]},
    {m: [-0.15, -0.25, 0], r: [0, 0, 75]}
  ]},
  // K: índice arriba, medio separado, pulgar apoyado en la base del medio
  k: {d: [EXT, EXT, PUNO, PUNO], phi: [-8, 22, 0, 0], t: [0.02, 0.2, 0.12]},
  // L: índice arriba y pulgar a un lado (forma de L)
  l: {d: [EXT, PUNO, PUNO, PUNO], t: [-1.0, -0.45, 0.05]},
  // LL: la L con sacudida de lado a lado
  ll: {d: [EXT, PUNO, PUNO, PUNO], t: [-1.0, -0.45, 0.05], marcos: SACUDIDA},
  // M: tres dedos sobre el pulgar
  m: {d: [PUNO, PUNO, PUNO, PUNO], t: [0.32, -0.46, 0.1]},
  // N: dos dedos sobre el pulgar
  n: {d: [PUNO, PUNO, PUNO, PUNO], t: [0.12, -0.46, 0.1]},
  // Ñ: la N con sacudida
  'ñ': {d: [PUNO, PUNO, PUNO, PUNO], t: [0.12, -0.46, 0.1], marcos: SACUDIDA},
  // O: todos los dedos tocan el pulgar formando una O
  o: {d: [REDONDO, REDONDO, REDONDO, REDONDO], ab: 0.5, t: 'm'},
  // P: como la K pero apuntando hacia abajo
  p: {d: [EXT, EXT, PUNO, PUNO], phi: [-8, 22, 0, 0], t: [0.02, 0.2, 0.12], r: [0, 0, 180]},
  // Q: como la G pero apuntando hacia abajo
  q: {d: [EXT, PUNO, PUNO, PUNO], t: [-0.5, 0.1, 0.15], r: [0, 0, 180]},
  // R: índice y medio cruzados
  r: {d: [EXT, EXT, PUNO, PUNO], phi: [14, -10, 0, 0], t: [0.0, -0.35, 0.45]},
  // RR: la R con sacudida
  rr: {d: [EXT, EXT, PUNO, PUNO], phi: [14, -10, 0, 0], t: [0.0, -0.35, 0.45], marcos: SACUDIDA},
  // S: puño con el pulgar cruzado por delante de los dedos
  s: {d: [PUNO, PUNO, PUNO, PUNO], t: [0.05, -0.2, 0.52]},
  // T: puño con el pulgar asomando entre el índice y el medio
  t: {d: [PUNO, PUNO, PUNO, PUNO], t: [-0.21, -0.15, 0.45]},
  // U: índice y medio juntos arriba
  u: {d: [EXT, EXT, PUNO, PUNO], t: [0.0, -0.35, 0.45]},
  // V: índice y medio separados
  v: {d: [EXT, EXT, PUNO, PUNO], phi: [-12, 12, 0, 0], t: [0.0, -0.35, 0.45]},
  // W: índice, medio y anular abiertos
  w: {d: [EXT, EXT, EXT, PUNO], phi: [-14, 0, 14, 0], t: [0.4, -0.38, 0.28]},
  // X: índice en gancho
  x: {d: [GANCHO, PUNO, PUNO, PUNO], t: [0.05, -0.2, 0.5]},
  // Y: pulgar y meñique estirados
  y: {d: [PUNO, PUNO, PUNO, EXT], ab: 0.6, t: [-1.0, -0.45, 0.1]},
  // Z: el índice dibuja una Z en el aire
  z: {d: [EXT, PUNO, PUNO, PUNO], t: [0.05, -0.2, 0.5], marcos: [
    {m: [-0.25, 0.2, 0],  r: [0, 0, 0]},
    {m: [0.25, 0.2, 0],   r: [0, 0, 0]},
    {m: [-0.25, -0.2, 0], r: [0, 0, 0]},
    {m: [0.25, -0.2, 0],  r: [0, 0, 0]}
  ]}
};

//3. FUNCIONES VECTORIALES PEQUEÑAS
const suma  = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const resta = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const por   = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const largo = a => Math.hypot(a[0], a[1], a[2]) || 1e-6;

//Punto que está a distancia L de "desde", en dirección a "hacia"
const aDistancia = (desde, hacia, L) => suma(desde, por(resta(hacia, desde), L / largo(resta(hacia, desde))));

//4. EL PULGAR: LLEGAR A UNA COORDENADA
function resolverPulgar(base, meta){
  const L = LARGOS_PULGAR;
  const dist = largo(resta(meta, base));
  const rumbo = por(resta(meta, base), 1 / dist);
  // Cadena inicial: sobre la línea a la meta, con un arco hacia la cámara (+z)
  // para que el pulgar siempre se doble hacia la palma.
  let acum = 0;
  const c = [base, 0, 0, 0].map(function (_, i) {
    if (i === 0) return base;
    acum += L[i - 1];
    return suma(suma(base, por(rumbo, Math.min(acum, dist))), [0, 0, i < 3 ? 0.08 : 0]);
  });
  for (let vuelta = 0; vuelta < 15; vuelta++){
    // atrás: la punta va a la meta
    c[3] = meta;
    for (let i = 2; i >= 1; i--) c[i] = aDistancia(c[i + 1], c[i], L[i]);
    c[0] = base;
    // adelante: la base se queda fija
    for (let i = 1; i <= 3; i++) c[i] = aDistancia(c[i - 1], c[i], L[i - 1]);
  }
  return [c[1], c[2], c[3]];
}

//5. GIRAR Y MOVER TODA LA MANO
function girarMano(p, r, m){
  const [rx, ry, rz] = r.map(g => g * Math.PI / 180);
  const C = [0, -0.3, 0];
  return p.map(function (q) {
    const [x, y, z] = resta(q, C);
    const x1 = x * Math.cos(rz) - y * Math.sin(rz), y1 = x * Math.sin(rz) + y * Math.cos(rz);
    const y2 = y1 * Math.cos(rx) - z * Math.sin(rx), z2 = y1 * Math.sin(rx) + z * Math.cos(rx);
    const x3 = x1 * Math.cos(ry) + z2 * Math.sin(ry), z3 = -x1 * Math.sin(ry) + z2 * Math.cos(ry);
    return suma([x3, y2, z3], suma(C, m));
  });
}

//6. COMPILAR: DE spec A 21 COORDENADAS
function compilar(spec, marco){
  const aRad = g => g * Math.PI / 180;
  const p = [MUNECA.slice(), BASE_PULGAR.slice(), [0, 0, 0], [0, 0, 0], [0, 0, 0]];

  // Cuatro dedos: cada hueso apunta según los ángulos acumulados de las articulaciones
  for (let f = 0; f < 4; f++){
    const ini = 5 + f * 4;
    const phi = spec.phi ? aRad(spec.phi[f]) : ABANICO[f] * (spec.ab || 0);
    let [x, y] = NUDILLOS[f], z = 0, th = 0;
    p[ini] = [x, y, z];
    for (let i = 0; i < 3; i++){
      th += aRad(spec.d[f][i]);
      const v = dir(phi, th);
      x += v[0] * LARGOS[f][i]; y += v[1] * LARGOS[f][i]; z += v[2] * LARGOS[f][i];
      p[ini + 1 + i] = [x, y, z];
    }
  }

  // Pulgar: llega a la coordenada t (o a la punta de otro dedo)
  const meta = typeof spec.t === 'string' ? p[PUNTAS[spec.t]] : spec.t;
  const pulgar = resolverPulgar(p[1], meta);
  p[2] = pulgar[0]; p[3] = pulgar[1]; p[4] = pulgar[2];

  // Giro y movimiento de toda la mano, redondeado a 2 decimales
  const r = marco ? marco.r : (spec.r || [0, 0, 0]);
  const m = marco ? marco.m : [0, 0, 0];
  const final = girarMano(p, r, m).map(q => q.map(v => Math.round(v * 100) / 100));
  return {p: final, ry: 0};
}

//7. LLENAR senasGrabadas
Object.keys(SENAS).forEach(function (letra) {
  const spec = SENAS[letra];
  if (spec.marcos){
    senasGrabadas[letra] = {
      cuadros: spec.marcos.map(marco => compilar(spec, marco)),
      revisada: false
    };
  } else {
    const pose = compilar(spec);
    pose.revisada = false;
    senasGrabadas[letra] = pose;
  }
});