# 📜 HANDOFF DE PROYECTO: EL SILLÓN DEL PODER
> **Documento Vivo de Continuidad, Arquitectura y Estado de Trabajo**
> **Última Actualización:** 2026-10-11
> **Rama Git:** `main` | **Último Commit:** `d1a2cad` | **Tests:** 126/126 PASADOS

---

## 1. 📌 Identificación y Enlaces Clave
- **Nombre:** *El Sillón del Poder (Juego IDEOLOGÍAS)*
- **Repositorio Remoto:** [GitHub - TheFrancisPapa/Juego-Ideologias](https://github.com/TheFrancisPapa/Juego-Ideologias.git)
- **Directorio Local:** `c:\Users\Usuario\Documents\Juego IDEOLOGIAS`
- **Punto de Entrada Web:** `index.html` (Single Page Application, abrir directo en navegador)
- **Suite de Pruebas Automatizadas:** `validar_sistema.js` (Ejecutar: `node validar_sistema.js`)

---

## 2. 🏛️ Arquitectura del Proyecto
El proyecto está diseñado con una arquitectura **Vanilla JS Modular**, sin bundlers (Webpack/Vite) ni frameworks externos pesados:
1. **Frontend:** `index.html` con Tailwind CSS (CDN), FontAwesome 6 (CDN) y Google Fonts (`Cinzel` y `Inter`).
2. **Audio:** `sonidos_sillon.js` - Sintetizador procedural 100% nativo vía **Web Audio API** (cero archivos de audio externos).
3. **Módulos JS (36 archivos):** Doble exportación universal:
   - Entorno Node.js: `module.exports = { ... }` para pruebas automáticas.
   - Entorno Navegador: `window.miModulo = { ... }` para consumo directo en el cliente.
4. **Validación:** `validar_sistema.js` ejecuta 126 pruebas sincrónicas sobre todos los sistemas, variables y reglas constitucionales.

---

## 3. 🧩 Módulos y Subsistemas Principales

| Archivo | Rol y Responsabilidad Institucional |
|---|---|
| `index.html` | Interfaz completa, modales de los despachos, pantalla de juego y veredicto final. |
| `motor.js` | Motor de estado (`MotorJuego`), ciclo de vida de turnos, sectores, macro y termómetros. |
| `dilemas.js` | Catálogo de dilemas de las 3 etapas (Militancia, Congreso, Presidencia) y de hitos cívicos. |
| `doce_ejes.js` | Definición de los 12 ejes ideológicos bipolares, períodos históricos y líderes argentinos. |
| `sistema_legislativo.js` | Simulación bicameral (Diputados 257, Senado 72), DNU (Ley 26.122), Veto (Art. 83 CN), Desempate Vice (Art. 57 CN). |
| `botonera_normativa_congreso.js` | Los 4 caminos del poder normativo y su impacto doctrinario en los 12 ejes. |
| `sonidos_sillon.js` | Motor de audio criollo: Golpe de sello, Placa de Crónica TV, Campana City, Latido UMP, Flash, Click. |
| `comodoro_py_justicia.js` | Fauna judicial (jueces de Comodoro Py), etapas procesales, fueros (Arts. 68/69 CN) y cárcel de Ezeiza. |
| `side_inteligencia.js` | Calle 25 de Mayo, Sr. 5 y Sr. 8, fondos reservados y operaciones de contrainteligencia. |
| `geopolitica_cancilleria.js` | Cancillería, tablero multilateral, diplomacia, FMI, Swap chino y embajadores. |
| `gabinete_ministros.js` | Los 6 asientos del Salón Blanco, fusibles políticos y renuncias indeclinables. |
| `prensa_pauta_medios.js` | Bolsillos de pauta, conferencias 9 AM, periodistas acreditados y entrevistas de Prime Time. |
| `sala_crisis_estallido.js` | Mecha social, saqueos, Estado de Sitio (Art. 23 CN) y Sala de Crisis en AMBA. |
| `caida_evacuacion_expresidente.js` | Umbral de colapso, escape en helicóptero H-01, Ley de Acefalía 20.972 y vida de expresidente. |
| `operativo_retorno_expresidente.js` | Trinchera digital, rosca del perdón con gobernadores/CGT y Operativo Retorno triunfal. |
| `calesita_macroeconomia_bcra.js` | Calesita de 4 estaciones, pantalla de la Mesa de Dinero del BCRA y timba cambiaria. |
| `ecuacion_unificada_simulador.js` | Algoritmo integrado de votos en urnas, mecha social y semana crítica del viernes negro. |
| `rosca_federal_provincias.js` | Ligas provinciales, caja de ATN, quórum del Senado (34/37) y tijeretazo de boleta. |
| `dinastias_nepotismo.js` | Clan familiar en Olivos, doble comando conyugal, nepotismo y reencarnación en el heredero. |
| `ritmo_cadena_semanal.js` | Ciclo semanal (Lunes a Domingo), agenda política y radar de hipocresía. |
| `salud_supervivencia.js` | Unidad Médica Presidencial (UMP), signos vitales, coronarias, paranoia y catálogo de muertes. |
| `origenes_relaciones.js` | Cuna socioeconómica inicial y el menú de las 5 relaciones peligrosas. |

---

## 4. 🚀 Lo que se Implementó en el Último Sprint (Visual & Audio)

1. **La Mesa Chica de la Rosada:**
   - Se reemplazó la barra de 18 botones apiñados por una **Consola de Mando de 5 Despachos Operativos**:
     - 🏛️ **Gobierno & Leyes:** Congreso & DNU, Gabinete, Rosca Federal, Estado Cívico.
     - 💵 **Economía & City:** Mesa BCRA, Pantalla Sillón, Balance Semanal.
     - 🕵️ **Inteligencia & Ley:** SIDE (25 de Mayo), Comodoro Py, Relaciones Peligrosas, Ficha SEN.
     - 📺 **Medios & Clan:** Medios & Pauta, Clan Familiar Olivos, Cancillería, Búnker Retorno.
     - 🚨 **Crisis & UMP:** Sala de Crisis AMBA, Monitor UMP, Evacuación H-01.
   - Se mantuvieron intactos **todos los IDs y selectores del DOM** que el motor actualiza en tiempo real.

2. **Audio Procedural Criollo (Experimental):**
   - Creado `sonidos_sillon.js` e integrado en `index.html`.
   - Botón minimalista de solo icono (`w-8 h-8`, squircle `🔊` / `🔇`) en el header sticky con tooltip experimental y estado persistido en `localStorage`.
   - Disparadores de audio conectados a:
     - Selección de opciones en dilemas (`reproducirClick()` en militante/diputado, `reproducirSello()` en presidente).
     - Firma de DNU, promulgación de leyes o vetos (`reproducirSello()`).
     - Alerta de Sala de Crisis, protocolo de helicóptero o fallecimiento (`reproducirPlacaCronica()`).
     - Mesa de Dinero del BCRA (`reproducirCampanaCity()`).
     - Monitor de signos vitales UMP (`reproducirLatido()`).
     - Entrevistas y Comodoro Py (`reproducirFlash()`).

3. **Brújula Ideológica en Vivo (12 Ejes):**
   - Widget interactivo desplegable en `screen-game` que actualiza y visualiza en tiempo real cómo impacta cada decisión en los 12 ejes con porcentaje e indicación del polo dominante.

4. **Estética Televisiva y Sellos Oficiales:**
   - Clase `.scanlines` CRT retro para transmisiones de Crónica TV.
   - Sellos con tinta `.sello-oficial`, `.sello-dnu`, `.sello-aprobado` para trámites del Boletín Oficial.

5. **Limpieza de Interfaz (Pantalla de Bienvenida):**
   - Removido el botón de desarrollo `"Ver Cuadro Constitucional: Diputados, Senadores y Presidente (Arts. 48, 54, 55, 56 y 89 CN)"` de `screen-welcome`, despejando la pantalla inicial de accesos puramente teóricos.

6. **Prueba Automatizada #126:**
   - Agregada en `validar_sistema.js` validando la clase `AudioCriollo` y sus métodos sin fallos en entorno headless.

## 5. 🛠️ Corrección Crítica: Activación de los 3 Botones de Inicio de Partida
En la última revisión se detectó que al presionar cualquiera de los 3 botones de inicio en la pantalla de bienvenida (*Nacer y Crecer [0 Años]*, *Saltar al Barro Político*, *Tomar el Mando Ejecutivo [Art. 89 CN]*), el juego no avanzaba debido a un fallo silencioso en el navegador:
1. **Causa Raíz:** Módulos de datos fundamentales (`sectores.js`, `doce_ejes.js`, `ideologias.js`, `dilemas.js`, `clasicos_futbol_argentino.js`, `famosos_argentinos.js`, `voz_de_la_calle.js`, `glosario.js`) solo exportaban mediante `module.exports` para Node.js, pero no asignaban sus constantes al objeto global `window` en el navegador.
2. **Consecuencia:** Al invocar `prepararPantallaJuego()`, la función `renderizarSectores()` intentaba acceder a `SECTORES_ARG`, arrojando `ReferenceError: SECTORES_ARG is not defined` antes de ocultar `screen-welcome` y mostrar `screen-game`. Además, `motor.js` quedaba con ejes e ideologías vacíos en el browser.
3. **Solución Implementada:**
   - Se incorporó la doble exportación universal en todos los módulos (`if (typeof window !== 'undefined') { window.CONSTANTE = CONSTANTE; }`).
   - Se blindó `renderizarSectores()` y las lecturas de `SECTORES_ARG` en `index.html` con comprobaciones defensivas de fallback.
   - Se exportó `activarListenersGlosario` y se securizó su invocación ante entornos sin soporte directo de eventos.
   - Se verificó con simulación headless DOM y la suite completa de 126 pruebas. Los 3 botones inician la partida de manera impecable e instantánea.

---

## 6. ⚠️ Reglas Técnicas y Contratos Inmutables
Para preservar la estabilidad del proyecto en futuros sprints:
1. **Regla de Tests 100%:** `node validar_sistema.js` debe arrojar siempre **126 de 126 pruebas PASADAS**.
2. **Contrato de 10 Marcas:** `MARCAS_ARGENTINAS` debe mantener exactamente 10 marcas históricas (`assert.strictEqual(Object.keys(MARCAS_ARGENTINAS).length, 10)`). Lobbies corporativos adicionales deben alojarse en `LOBBIES_CORPORATIVOS_ARG`.
3. **Desempate Vicepresidencial:** Las variables de desempate en `simularVotacionLey` deben tener scope fuera del bloque condicional de diputados.
4. **Cero Dependencias Binarias Pesadas:** No agregar archivos MP3, WAV ni frameworks que requieran compilación previa; todo debe funcionar abriendo `index.html` en el navegador.
5. **Rigor Constitucional:** Respetar los artículos de la Constitución Nacional (Arts. 23, 30, 40, 48, 50, 54, 55, 56, 57, 68, 69, 77-84, 88, 89, 99 inc. 3).

---

## 6. 📋 Backlog / Próximos Pasos Sugeridos
- [ ] **Guardado y Continuación de Partidas:** Persistir en `localStorage` el snapshot de `motorJuego` para reanudar partidas tras recargar el navegador.
- [ ] **Modo Acta Oficial / Boletín Oficial:** Estilo visual temático símil papel sellado con tipografía mecanografiada para visualizar decretos y resoluciones.
- [ ] **Exportación de Veredicto Final:** Botón para copiar resumen del mandato presidencial o descargar tarjeta en imagen para compartir en redes.
- [ ] **Animaciones de Transición:** Suavizar transiciones entre la pantalla de bienvenida, dilemas y veredicto final.

---

## 7. 🛠️ Comandos de Verificación Rápida
```bash
# 1. Ejecutar suite de pruebas completa:
node validar_sistema.js

# 2. Ver estado de git:
git status

# 3. Ver historial reciente:
git log -n 5 --oneline
```
