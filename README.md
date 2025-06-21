# CRUDY: Juega o muere

**Equipo:** The piranhas
**Integrantes:** Diego Zuluaga, Abraham Taborda, Jeronica Cardona  
**Estado del Proyecto:** Finalizado

---

## Descripción del juego

**CRUDY** es una experiencia interactiva de suspenso psicológico y lógica destructiva, inspirada en la saga *SAW*. El jugador despierta en un entorno digital controlado por una inteligencia artificial llamada CRUDY, quien lo somete a una serie de pruebas mortales de lógica, percepción, simulación y engaño.

Cada decisión tiene un peso. Cada error... un castigo.

---

## 🛠Tecnologías utilizadas

- HTML5
- CSS3 + Bootstrap 5
- JavaScript puro
- API de `speechSynthesis` para narración
- Efectos sonoros en formato `.mp3`
- Archivos multimedia (imágenes `.webp`, sonidos `.mp3`)
- Diseño responsivo y ambientación oscura

---

## Instrucciones para clonar y ejecutar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/crudy.git
   ```
2. Abre el archivo `index.html` en cualquier navegador moderno.
3. Asegúrate de tener habilitado el audio y permisos de reproducción automática.
4. Haz clic en cualquier parte de la pantalla para iniciar la experiencia.

---

## 🔍 Funcionalidades principales

- Introducción narrada con voz siniestra y texto progresivo.
- Tres rutas principales: **Lógica**, **Simulación**, **Trampa**.
- Subniveles con juegos de lógica, memoria, paradojas y acertijos imposibles.
- Efectos de sonido ambientales y sonidos específicos por interacción (puertas).
- Comentarios dinámicos e insultantes de CRUDY según desempeño.
- Finales múltiples: victoria, condena cíclica o eliminación total.

---

## Lógica y estructura general

- El juego está dividido en **5 niveles** por ruta.
- Se usa un objeto `estado` en JS para rastrear la puntuación y progresión.
- Cada nivel es una función con contenido condicional y respuestas dinámicas.
- Las decisiones del jugador determinan la navegación entre niveles y finales.
- La **ruta lógica** premia el razonamiento.
- La **ruta simulada** distorsiona la percepción del jugador.
- La **ruta trampa** es un camino sin salida, diseñado para frustrar y condenar.

---

## Aportes del equipo

- **Diego Zuluaga**  
  - Diseño narrativo estilo SAW  
  - Lógica de juego y estructura JS  
  - Diseño de niveles y pruebas  
  - Integración de sonido, voz y efectos  
  - Documentación y pruebas completas  

- **Abraham Taborda**  
  - Desarrollo de interactividad  
  - Implementación de rutas y niveles  
  - Efectos visuales y diseño en CSS  
  - Optimización del flujo de juego  

- **Jeronica Cardona**  
  - Diseño visual y estructura HTML  
  - Testing y validación en navegador  
  - Integración de Bootstrap y responsividad  
  - Soporte en narrativa y guión del juego

---

## Lecciones aprendidas

- Uso de APIs como `speechSynthesis` y manejo de audio HTML.
- Control de flujo condicional y asincronía con `setTimeout`.
- Manejo de estados en juegos sin frameworks.
- Ambientación efectiva con CSS y sonidos sin usar librerías externas.
- Diseño de experiencias narrativas interactivas.

---

## Estado del Proyecto

Finalizado y funcional  
Probado en navegador moderno (Chrome, Edge)
