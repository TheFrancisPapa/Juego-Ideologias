# 📜 HANDOFF DE PROYECTO: EL SILLÓN DEL PODER
> **Documento Vivo de Continuidad, Arquitectura y Estado de Trabajo**
> **Última Actualización:** 2026-10-11
> **Rama Git:** `main` | **Tests:** 126/126 PASADOS

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

## 4. 🎨 Rediseño Visual & UX: Dilema al Frente, Telemetría en Pestañas y HUD Adaptativo

### El Problema Resuelto (Sobrecarga de Información y Ruptura Narrativa):
Al iniciar partida en cualquiera de los 3 modos, la pantalla arrojaba 6 paneles gigantescos apilados verticalmente (Mesa Chica de los 5 Despachos, Sectores Sociales, Macroeconomía, Termómetro Criollo, Salud UMP, Brújula de 12 ejes). Esto causaba:
1. **Dilema Enterrado:** El jugador debía scrollear ~1500px hacia abajo solo para leer su primer dilema.
2. **Inconsistencia de Rol:** En el modo "Desde la Cuna" (a los 0 años de edad) o en "Salto al Barro" (concejal local), la cabecera proclamaba estáticamente *"MANDATARIO EN EJERCICIO - Despacho Presidencial • Casa Rosada"*, con botones de helicóptero presidencial y monitor de Olivos.

### Arquitectura de la Solución:
1. **Barra Superior HUD Dinámica (`player-identity-bar`):**
   - **Identidad según el modo:**
     - `cuna`: `👶 DESDE LA CUNA: INFANCIA Y JUVENTUD` (con origen familiar específico, ej: *Cuna Militante / Barrio Popular • Crianza, Escuela y Conciencia Social*).
     - `militante`: `🚧 SALTO AL BARRO POLÍTICO` (con cargo inicial, ej: *Concejal de Municipio del Conurbano • Militancia, Territorio y Concejo Deliberante*).
     - `presidente`: `🏛️ MANDATARIO EN EJERCICIO` (*Despacho Presidencial • Casa Rosada*).
   - **Badge de Edad en Vivo:** Se actualiza turno a turno (`0 Años`, `6 Años`, `25 Años`, `30 Años`).
   - **Micro-Pills de Telemetría Clave:** Indicadores at-a-glance (`👥 Apoyo: X%`, `💵 Dólar: $X`, `💣 Mecha: X%`, `🏦 BCRA: USD XM`).
   - **Botón de Enlace Rápido:** `[ 📊 Ver Tableros ▾ ]` con smooth scroll hacia la consola inferior.

2. **Tarjeta del Dilema Principal al Frente (`dilemma-card-main`):**
   - Ubicada inmediatamente debajo del HUD, visible al 100% sin scroll al comenzar el turno.
   - Contiene el badge de etapa, área de gobierno, título del dilema, descripción pedagógica, glosario interactivo, botón explicativo y opciones de respuesta graduadas.
   - Aloja el panel de interludio con reacciones de medios, famosos, calle y redes sociales.

3. **Centro de Operaciones y Telemetría en Pestañas (`operations-console`):**
   - Reorganizado debajo del dilema principal en un contenedor elegante con selector de pestañas:
     - 🏛️ **Despachos Rosada (`pane-despachos`):** Grilla de 5 despachos de la Rosada (oculta automáticamente en Cuna y Barro).
     - 👥 **Apoyo Social (`pane-sectores`):** Sectores sociales argentinos (`sectors-grid`).
     - 📈 **Macro & Mecha (`pane-macro`):** Tablero macroeconómico (`macro-grid`) y Termómetro Criollo (`termometro-criollo-grid`).
     - 🩺 **Salud & Vida (`pane-salud`):** Monitor UMP y Reloj de Vida (`salud-supervivencia-grid`, oculta en Cuna y Barro).
     - 🧭 **Brújula 12 Ejes (`pane-brujula`):** Brújula ideológica interactiva en vivo (`brujula-ejes-grid`).
   - **Contratos DOM 100% Preservados:** Todos los IDs originales se mantuvieron idénticos para que las funciones de renderizado (`renderizarSectores`, `renderizarMacro`, etc.) sigan funcionando de forma impecable sin tocar la lógica de negocio.

---

## 5. 🛠️ Corrección Previa: Activación de los 3 Botones de Inicio de Partida
1. **Causa Raíz Real:** Conflicto de ámbito léxico global en navegadores por redeclaración de constantes (`ESQUEMAS_PAUTA`, etc.) entre scripts.
2. **Solución Implementada:** Encapsulación de `motor.js` en una IIFE universal y vinculación de `window.motorJuego`.
3. **Verificación:** Ejecutado en motor real Chromium (Edge headless) con conmutación confirmada en los 3 modos.

---

## 6. ⚠️ Reglas Técnicas y Contratos Inmutables
Para preservar la estabilidad del proyecto en futuros sprints:
1. **Regla de Tests 100%:** `node validar_sistema.js` debe arrojar siempre **126 de 126 pruebas PASADAS**.
2. **Contrato de 10 Marcas:** `MARCAS_ARGENTINAS` debe mantener exactamente 10 marcas históricas (`assert.strictEqual(Object.keys(MARCAS_ARGENTINAS).length, 10)`). Lobbies corporativos adicionales deben alojarse en `LOBBIES_CORPORATIVOS_ARG`.
3. **Desempate Vicepresidencial:** Las variables de desempate en `simularVotacionLey` deben tener scope fuera del bloque condicional de diputados.
4. **Cero Dependencias Binarias Pesadas:** No agregar archivos MP3, WAV ni frameworks que requieran compilación previa; todo debe funcionar abriendo `index.html` en el navegador.
5. **Rigor Constitucional:** Respetar los artículos de la Constitución Nacional (Arts. 23, 30, 40, 48, 50, 54, 55, 56, 57, 68, 69, 77-84, 88, 89, 99 inc. 3).

---

## 7. 📋 Backlog / Próximos Pasos Sugeridos
- [ ] **Guardado y Continuación de Partidas:** Persistir en `localStorage` el snapshot de `motorJuego` para reanudar partidas tras recargar el navegador.
- [ ] **Modo Acta Oficial / Boletín Oficial:** Estilo visual temático símil papel sellado con tipografía mecanografiada para visualizar decretos y resoluciones.
- [ ] **Exportación de Veredicto Final:** Botón para copiar resumen del mandato presidencial o descargar tarjeta en imagen para compartir en redes.
- [ ] **Animaciones de Transición:** Suavizar transiciones entre la pantalla de bienvenida, dilemas y veredicto final.

---

## 8. 🛠️ Comandos de Verificación Rápida
```bash
# 1. Ejecutar suite de pruebas completa:
node validar_sistema.js

# 2. Ver estado de git:
git status

# 3. Ver historial reciente:
git log -n 5 --oneline
```
