# 📜 HANDOFF DE PROYECTO: EL SILLÓN DEL PODER
> **Documento Vivo de Continuidad, Arquitectura y Estado de Trabajo**
> **Última Actualización:** 2026-10-12
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
| `origenes_relaciones.js` | Orígenes familiares de juventud, dilemas de formación adolescente y menú de relaciones peligrosas. |

---

## 4. 🎯 Logros Recientes & Rediseño de Experiencia de Usuario (Sprint Octubre 2026)

### A. Selector de Ritmo de Gestión (1, 3 o 7 Dilemas):
- **Ubicación en Bienvenida:** Añadido en `screen-welcome` como **"Paso 1: ¿Cuántos dilemas querés tratar por etapa / semana?"**.
- **Opciones Seleccionables:**
  - ⚡ **1 Dilema (Modo Exprés / Decreto):** 1 sola decisión clave por etapa (10-15 min).
  - ⚖️ **3 Dilemas (Modo Parlamentario) [Recomendado]:** La Medida, La Reacción y El Desenlace (25-35 min).
  - 🛡️ **7 Dilemas (Modo Trinchera Profunda):** Inmersión día a día de lunes a domingo (45-60 min).
- **Lógica de Motor:** Controlado mediante `motorJuego.limiteDilemasPorFase` y evaluado en `obtenerDilemaActual()`.

### B. Rediseño Total de Modo A: Juventud & Formación (Adolescencia: 14 a 18 Años):
- **Superación del concepto de "Nacer":** Se eliminó la contradicción narrativa de "nacer a los 0 años pero tener 15 años de inmediato".
- **Enfoque 100% Adolescente:**
  - **Estudios:** Materias, talleres, rendimiento académico y promedio escolar.
  - **Salud Integral:** Salud física, resistencia, salud mental y equilibrio psicológico frente al estrés.
  - **Relaciones:** Lazos familiares, amistades de colegio y grupo de pares.
  - **Deportes:** Club de barrio, potrero, entrenamiento y compañerismo.
- **Entornos Familiares de Partida (compatibilidad de IDs):**
  - `cuna_oro`: Familia Tradicional / Barrio Residencial (San Isidro / Recoleta).
  - `cuna_popular`: Hogar Trabajador & Club de Barrio (Conurbano / Periferia).
  - `dinastia_feudal`: Tradición Cívica Institucional (Interior Provincial / Cuyo).

### C. Telemetría Aislada para Adolescencia (Cero Sobrecarga Adulta):
- Al jugar en modo Cuna:
  - **HUD Superior:** Muestra micro-pills específicas de juventud (`📚 Estudios: 75%`, `🏃 Salud Física: 80%`, `🧠 Salud Mental: 75%`, `🤝 Vínculos: 70%`, `⚽ Deporte: 75%`). Se ocultan las variables de adulto (Dólar Blue, BCRA, Mecha de estallido).
  - **Consola Inferior:** Se ocultan los Despachos de la Rosada, la Mesa de Dinero del BCRA y la Macroeconomía. Se activa la pestaña única: **🎒 Mi Vida Adolescente: Hábitos, Rendimiento y Salud Integral**, con tarjetas visuales y barras de progreso.

### D. Hito Vital a los 18 Años (`screen-mayoria-edad`):
- Al concluir los dilemas adolescentes (15 y 18 años), no se arroja al jugador a una urna legislativa inapropiada.
- Se presenta una pantalla de celebración: **🎓 ¡Concluiste tu Adolescencia y Llegaste a los 18!**.
- Resume el desempeño escolar, físico, mental y social.
- Explica la adquisición de plenos derechos cívicos (Art. 37 CN / Ley 26.774) y el **desbloqueo de nuevos retos y métricas adultas** (Sectores sociales, macroeconomía y participación comunitaria).
- El botón **"Dar el Salto a la Vida Adulta y Asumir Nuevos Retos"** transiciona fluidamente a la siguiente etapa formativa / territorial.

### E. Interludio Reactivo Adolescente & Aislamiento Total de la Política Adulta:
- **Erradicación del Circo Político en la Adolescencia:** Cuando el jugador toma una decisión a los 15 o 18 años, ya no se muestran placas rojas de Crónica, zócalos de C5N/LN+, tuits de Milei/Laje/Grabois ni indicadores macroeconómicos del país.
- **Contenedor `#interlude-adolescente-container`:**
  - **Decisión adoptada:** Enfoque escolar, deportivo o de vínculos elegido.
  - **Diferenciales de Desarrollo:** Impacto directo en Estudios, Salud Física, Salud Mental, Vínculos y Deporte (`perfilAdolescente`).
  - **Dilema de Oportunidades:** Tarjeta narrativa con:
    - 🔑 *Puerta que se abre / Oportunidad futura* (ej: recomendación de directivos, prueba en Reserva de Primera, amigo de fierro).
    - ❌ *Costo de oportunidad / Lo que perdiste* (ej: pérdida de titularidad en el club, materias a diciembre, poca presencia en el barrio).
  - **WhatsApp en Vivo:** Mensajes de chat en el celular con compañeros de aula, amigos de inferiores y familia.
- **Corrección de Bug `Paranoia NaN%`:** Resuelto el bug por el cual desestructurar `{ ...motorJuego.saludSupervivencia }` perdía el getter prototípico `paranoia`, asegurando valores numéricos limpios y diffs 100% seguros tanto en modo cuna como en mandatos adultos.

---

## 5. ⚠️ Reglas Técnicas y Contratos Inmutables
Para preservar la estabilidad del proyecto en futuros sprints:
1. **Regla de Tests 100%:** `node validar_sistema.js` debe arrojar siempre **126 de 126 pruebas PASADAS**.
2. **Contrato de 10 Marcas:** `MARCAS_ARGENTINAS` debe mantener exactamente 10 marcas históricas (`assert.strictEqual(Object.keys(MARCAS_ARGENTINAS).length, 10)`). Lobbies corporativos adicionales deben alojarse en `LOBBIES_CORPORATIVOS_ARG`.
3. **Vanilla JS Nativo:** No añadir scripts de empaquetado o dependencias npm requeridas para correr en el navegador; el juego debe poder jugarse abriendo directamente `index.html` en cualquier navegador web moderno.
4. **Handoff Permanente:** Ante cualquier modificación sustancial, actualizar este archivo `HANDOFF.md` y los artefactos de sesión para mantener la trazabilidad completa.
