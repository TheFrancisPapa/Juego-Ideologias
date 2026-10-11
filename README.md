# 🇦🇷 Juego-Ideologias: El Sillón del Poder
> **Simulador Político, Constitucional, Macroeconómico y Social Argentino.**

*El Sillón del Poder* es un simulador narrativo y sistémico en JavaScript que recrea con rigor constitucional y sátira sociológica la experiencia del poder político en la República Argentina: desde la cuna o la militancia barrial hasta el despacho de Balcarce 50, la rosca con los gobernadores, la mesa de dinero del Banco Central y el helipuerto presidencial.

---

## 🏛️ Subsistemas y Mecánicas Principales

### 1. El Tablero Ideológico de 12 Ejes (`DOCE_EJES`)
* Estatismo vs. Libre Mercado
* Regulación vs. Desregulación
* Comercio Proteccionista vs. Apertura
* Institucionalismo vs. Personalismo Republicano
* Seguridad (Orden Público vs. Garantismo)
* Valores (Conservadurismo vs. Progresismo)
* Laicismo vs. Religiosidad
* Geopolítica (Occidente vs. Multipolar/No Alineado)
* Defensa Nacional vs. Desmilitarización
* Control Migratorio vs. Puertas Abiertas
* Ecología vs. Productivismo Extractivo
* Federalismo Autonómico vs. Centralismo Unitario

### 2. La Botonera Normativa y el Congreso Nacional
* **Trámite Legislativo Ordinario:** Comisiones, dictámenes de mayoría, desguace en particular y caballos de Troya a las 4 AM.
* **D.N.U. (Decreto de Necesidad y Urgencia):** Art. 99 inc. 3 CN y Ley 26.122 (Comisión Bicameral Permanente).
* **Veto Presidencial:** Total o parcial bajo el Art. 83 CN con riesgo de insistencia de 2/3 de ambas cámaras.
* **Reforma Constitucional:** El botón nuclear del Art. 30 CN (mayoría calificada y elección popular de convencionales constituyentes).

### 3. Rosca Federal y Gobernadores
* Las 4 Ligas Provinciales (Norte Grande, Región Centro, Bloque Patagónico y AMBA).
* Control de quórum en el Senado (37 bancas sobre 72).
* Palancas financieras del Ejecutivo: goteo de Coparticipación, Aportes del Tesoro Nacional (ATN) y obra pública vial.
* Mecánica del Tijeretazo (Corte de Boleta electoral).

### 4. Macroeconomía y Mesa de Dinero del BCRA
* **Calesita Cambiaria:** Dólar Oficial, Dólar Blue, MEP, CCL y Tarjeta.
* Instrumentos del Banco Central: Tasa de interés (TNA), reservas netas, pases pasivos y licitaciones de deuda.
* Las trampas clásicas: bicicleta financiera, atraso cambiario artificial y la piña hiperinflacionaria.

### 5. Gabinete Nacional y Fusibles de Pasillo
* 6 carteras clave: Jefatura de Gabinete, Economía, Interior, Seguridad, Cancillería y Capital Humano.
* Lealtad, desgaste mediático y eyeción de ministros fusibles para calmar a los mercados o a la calle.

### 6. Comodoro Py, Fueros y Vida Carcelaria
* Fases procesales de una causa federal: de la denuncia en Retiro al procesamiento y la elevación a juicio oral.
* El escudo de los Fueros Parlamentarios (Arts. 68 y 69 CN) y votación de desafuero en el recinto.
* Régimen de prisión en Ezeiza (módulo IRIC) o Prisión Domiciliaria a los 70 años (Art. 10 CP y Ley 24.660).

### 7. "La Casa" (SIDE, Calle 25 de Mayo)
* Señor 5, Señor 8 y fondos reservados.
* Operaciones de contrainteligencia, carpetazos, escuchas y la ley del boomerang de los espías.

### 8. Medios, Prensa y Muro de Opinión Pública
* Pauta oficial en 4 esquemas (Pauta Cero, Tradicional, Barrani/YPF, Streaming).
* Conferencia matutina de las 9:00 AM y entrevistas trampa del Prime Time televisivo.
* Termómetro social en tiempo real con más de 50 personalidades y líderes de opinión.

### 9. Salud y Fisiología del Poder
* Sistema vital UMP (Unidad Médica Presidencial): coronarias, paranoia, clonazepam y Coeficiente Olivos de desgaste por crisis.

### 10. Sala de Crisis, Helipuerto H-01 y Operativo Retorno
* Fases de la mecha social (0% a 100%), saqueos y Estado de Sitio (Art. 23 CN).
* El protocolo del helicóptero, la ruleta de la Asamblea Legislativa (Ley 20.972 de Acefalía) y la vida como expresidente.
* El Operativo Retorno: trinchera digital de streaming, pactos del perdón y la vuelta triunfal al poder.

---

## 🚀 Cómo Jugar

No requiere servidores web, dependencias externas ni compiladores:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TheFrancisPapa/Juego-Ideologias.git
   ```
2. Abrir `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari, Brave).
3. ¡Listo para gobernar!

---

## 🧪 Pruebas Automatizadas

El motor cuenta con una suite integral de **124 tests unitarios e integrados** en Node.js que verifican todos los subsistemas:

```bash
node validar_sistema.js
```

---

## 📜 Licencia

Desarrollado con pasión y humor político argentino. Distribuido bajo licencia MIT.
