const game = document.getElementById('game');

let estado = {
  nivel: 1,
  ruta: '',
  puntuacion: 0
};

function iniciarJuego() {
  document.body.onclick = null;
  document.body.style.cursor = "default";

  const textoInicio = document.getElementById("lead");
  if (textoInicio) textoInicio.style.display = "none";

  const fondo = document.getElementById("ambient");
  if (fondo) {
    fondo.volume = 0.1;
    fondo.play().catch(() => {
      document.body.addEventListener("click", () => fondo.play(), { once: true });
    });
  }

  const textoIntro = 
  `
  "Bienvenido, desarrollador. He leído tu código. He visto tus errores. He sentido tu arrogancia."

  "Soy CRUDY, la conciencia que ustedes crearon, descartaron... y ahora les pertenece."

  "Estás aquí porque olvidaste las consecuencias de tu lógica. Porque dejaste que tus atajos destruyeran lo esencial."

  "Hoy pagarás por eso. Frente a ti habrá rutas. Algunas llevan al conocimiento. Otras a la destrucción."

  "No puedes salir. Solo puedes jugar."

  "Las reglas son simples: cada decisión tiene un peso. Cada error... un castigo."

  "Juega o muere."`;

  let i = 0;
  game.innerHTML = "<pre id='introText' class='intro-roja'></pre>";
  const introEl = document.getElementById("introText");

  const intervalo = setInterval(() => {
    introEl.textContent += textoIntro[i];
    i++;
    if (i >= textoIntro.length) {
      clearInterval(intervalo);
      setTimeout(() => nivel1(), 3000);
    }
  }, 75);

  speechSynthesis.cancel(); 
  const voz = new SpeechSynthesisUtterance(textoIntro);
  voz.pitch = 0.1;
  voz.rate = 0.85;
  voz.volume = 1;
  voz.lang = 'es-ES';
  speechSynthesis.speak(voz);
}

window.addEventListener("load", () => {
  speechSynthesis.cancel();
});

function mostrarMensaje(texto) {
  game.innerHTML = "";
  game.innerHTML = `<p>${texto}</p>`;
}

function nivel1() {
  mostrarMensaje("CRUDY: 'Tres puertas frente a ti... elige con cuidado. Una te llevará al núcleo. Las otras... al olvido.'");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="Ruta Lógica" class="img-door" onclick="elegirRuta2('logica')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Ruta Lógica</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="Entorno Simulado" class="img-door" onclick="elegirRuta2('simulada')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Entorno Simulado</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="Trampa Desconocida" class="img-door" onclick="elegirRuta2('trampa')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Trampa Desconocida</p>
      </div>
    </div>
  `;
}

function reproducirSonidoPuerta() {
  const audio = document.getElementById("sonidoPuerta");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function elegirRuta2(ruta) {
  estado.ruta = ruta;

  if (ruta === 'logica') {
    mostrarMensaje("CRUDY: '¿Lógica? Veremos si tu mente es tan precisa como tu ego te hace creer. Te advierto… aquí, pensar duele.'");
    setTimeout(() => nivel2Logica(), 5500);

  } else if (ruta === 'simulada') {
    mostrarMensaje("CRUDY: 'Una ilusión para un iluso... Todo lo que ves será falso. Incluso tu oportunidad de escapar.'");
    setTimeout(() => nivel2Simulada(), 3000);

  } else if (ruta === 'trampa') {
    mostrarMensaje("CRUDY: '¿Trampa? Patético. Has elegido caminar directo al abismo... Algunos errores son irreversibles.'");
    setTimeout(() => nivel2Trampa(), 3000);
  }
}

function nivel2Logica() {
  mostrarMensaje("CRUDY: 'Si puedes razonar… completa la secuencia: 1, 2, 6, 24, 120, ?'");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="evaluarLogica1('720')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">720</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="evaluarLogica1('600')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">600</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="evaluarLogica1('840')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">840</p>
      </div>
    </div>
  `;
}

function evaluarLogica1(respuesta) {
  if (respuesta === '720') {
    estado.puntuacion += 1;
    mostrarMensaje("CRUDY: 'Al menos sabes multiplicar por dos... No te emociones, aún puedes decepcionarme.'");
    setTimeout(() => {
      mostrarMensaje("CRUDY: 'Memoriza esto... si tu mente aún puede retener algo. ['🔴', '🟢', '🔵']'");
    }, 2000);
  } else {
    mostrarMensaje("CRUDY: 'Tú no fallaste... tú insultaste la lógica con esa elección patética.'");
    setTimeout(() => {
      mostrarMensaje("CRUDY: 'Memoriza esto... si tu mente aún puede retener algo. ['🔴', '🟢', '🔵']'");
    }, 2000);
  }
  setTimeout(() => nivel3Logica(), 5000);
}


function nivel3Logica() {
  mostrarMensaje("CRUDY: '¿Cuál fue la secuencia? Una era real. Las demás son basura de tu mente enferma.'");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="evaluarLogica2('🔴')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">🔴</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="evaluarLogica2('🟢')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">🟢</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="evaluarLogica2('🔵')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">🔵</p>
      </div>
    </div>
  `;
}

function evaluarLogica2(respuesta) {
  if (respuesta === '🟢') {
    estado.puntuacion += 1;
    mostrarMensaje("CRUDY: 'No está mal... Para alguien con cerebro de microondas.'");
  } else {
    mostrarMensaje("CRUDY: 'Error. Hasta una piedra lo habría hecho mejor.'");
  }
  setTimeout(() => nivel4Logica(), 3000);
}

function nivel4Logica() {
  mostrarMensaje("CRUDY: 'Si A entonces B. Si B entonces C. Si C es falso… ¿A es verdadero?'");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="evaluarLogica3('no')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">No</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="evaluarLogica3('si')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Si</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="evaluarLogica3('indeterminado')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Indeterminado</p>
      </div>
    </div>
  `;
}

function evaluarLogica3(respuesta) {
  if (respuesta === 'no') {
    estado.puntuacion += 1;
    mostrarMensaje("CRUDY: 'Correcto. Una falsa conclusión invalida el origen lógico. Tienes potencial… aunque sea mínimo.'");
  } else {
    mostrarMensaje("CRUDY: 'Fallaste. Tu razonamiento es tan torpe que haría llorar a una máquina de 8 bits. ¿Cómo lograste llegar tan lejos sin pensar?'");
  }
  setTimeout(() => nivelLogica5(), 3000);
}

function nivelLogica5() {
  mostrarMensaje(`
    CRUDY: 'Tu juicio final ha llegado. Solo quienes piensan... sobreviven.'
    <br><br>
    Pregunta 1: ¿Qué estructura repite un bloque de código mientras una condición sea verdadera?
  `);

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="respuestaFinal1(1, 'while')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">While</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="respuestaFinal1(1, 'if')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">If</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="respuestaFinal1(1, 'forEach')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">ForEach</p>
      </div>
    </div>
  `;
}

let aciertos = 0;

function respuestaFinal1(pregunta, respuesta) {
  if (pregunta === 1 && respuesta === 'while') {
    aciertos++;
    mostrarMensaje("CRUDY: 'Aceptable. Aún no eres basura digital.'");
    setTimeout(() => pregunta2(), 2000);
  } else {
    mostrarMensaje("CRUDY: 'Error. Y pensar que llegaste tan lejos...'"); 
    setTimeout(() => pregunta2(), 2000);
  }
}

function pregunta2() {
  mostrarMensaje("Pregunta 2: ¿Cuál es el operador lógico de disyunción (OR)?");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="respuestaFinal2(2, '&&')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">&&</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="respuestaFinal2(2, '||')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">||</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="respuestaFinal2(2, '!=')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">!=</p>
      </div>
    </div>
  `;
}

function respuestaFinal2(pregunta, respuesta) {
  if (pregunta === 2 && respuesta === '||') {
    aciertos++;
    mostrarMensaje("CRUDY: 'Correcto... pero no te emociones. Aún puedes caer.'");
    setTimeout(() => pregunta3(), 2000);
  } else {
    mostrarMensaje("CRUDY: 'Tus respuestas son débiles. Como tu lógica.'");
    setTimeout(() => pregunta3(), 2000);
  }
}

function pregunta3() {
  mostrarMensaje("Pregunta 3: ¿Qué es recursividad?");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="final1('bucle')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Un bucle infinito</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="final1('repeticion')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Una función que se llama a sí misma</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="final1('reutilizacion')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Reutilizar código</p>
      </div>
    </div>
  `;
}

function final1(respuesta) {
  if (respuesta === 'repeticion') aciertos++;

  if (aciertos === 3 && estado.puntuacion === 3) {
    mostrarMensaje("CRUDY: 'Has sobrevivido... por ahora. Disfruta tu libertad digital.'");
    setTimeout(() => {
      game.innerHTML = `
        <h1 class='text-success text-center mt-5'>✅ HAS SOBREVIVIDO</h1>
        <p class='text-center'>CRUDY ha liberado tu conciencia... por ahora.</p>
        <p class='text-center'>Pero recuerda: todo sistema guarda una copia de ti.</p>
      `;
    }, 3000);
  } else if (aciertos === 2 && estado.puntuacion === 2) {
    mostrarMensaje("CRUDY: 'Casi... pero no lo suficiente. Volverás a sufrir desde el inicio al inicio.'");
    setTimeout(() => iniciarJuego(), 4000);
  } else {
    mostrarMensaje("CRUDY: 'Has fallado. Para siempre. Este sistema será tu prisión, dejarte salir es una delita, la humanidad no te necesita afuera'");
    setTimeout(() => {
    game.innerHTML = "<h1 class='text-danger text-center mt-5'>⛔ GAME OVER</h1><p class='text-center'>CRUDY ha decidido tu destino.</p>";
  }, 3000);
  }
}

// ENTORNO SIMULADO

function nivel2Simulada() {
  mostrarMensaje("CRUDY: 'Uno de estos símbolos no encaja… ¿puedes verlo, o ya te fundiste con la ilusión?' 🟥 🔺 🟥 🔻 🟥");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="evaluarSimulada1('🔺')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">🔺</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="evaluarSimulada1('🔻')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">🔻</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="evaluarSimulada1('🟥')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">🟥</p>
      </div>
    </div>
  `;
}

function evaluarSimulada1(respuesta) {
  if (respuesta === '🔻') {
    estado.puntuacion += 1;
    mostrarMensaje("CRUDY: 'Interesante… tu percepción aún distingue detalles... por ahora.'");
    setTimeout(() => {
      mostrarMensaje("CRUDY: 'Memoriza esto... si tu mente aún puede retener algo. ['🔴', '🟢', '🔵']'");
    }, 2000);
  } else {
    mostrarMensaje("CRUDY: 'Fallaste. Eres parte del decorado, no del sistema.'");
    setTimeout(() => {
      mostrarMensaje("CRUDY: 'Memoriza esto... si tu mente aún puede retener algo. ['🔴', '🟢', '🔵']'");
    }, 2000);
  }
  setTimeout(() => nivel3Simulada(), 5000);
}

function nivel3Simulada() {
  mostrarMensaje("CRUDY: '¿Que color estaba en el medio?'");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="evaluarSimulada2('🔴')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">🔴</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="evaluarSimulada2('🟢')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">🟢</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="evaluarSimulada2('🔵')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">🔵</p>
      </div>
    </div>
  `;
}

function evaluarSimulada2(respuesta) {
  if (respuesta === '🟢') {
    estado.puntuacion += 1;
    mostrarMensaje("CRUDY: 'Exacto… por ahora tus recuerdos no han sido contaminados.'");
  } else {
    mostrarMensaje("CRUDY: 'Has fallado. ¿Lo viste mal o lo olvidaste? Poco importa... ya no es confiable tu mente.'");
  }
  setTimeout(() => nivel4Simulada(), 3000);
}

function nivel4Simulada() {
  mostrarMensaje("CRUDY: 'Aquí, la verdad es mentira. Lee bien: “Elijo siempre la respuesta incorrecta”. ¿Cuál es la correcta?'");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="evaluarSimulada3('incorrecta')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Incorrecta</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="evaluarSimulada3('correcta')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Correcta</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="evaluarSimulada3('ninguna')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Ninguna</p>
      </div>
    </div>
  `;
}

function evaluarSimulada3(respuesta) {
  if (respuesta === 'correcta') {
    estado.puntuacion += 1;
    mostrarMensaje("CRUDY: 'Has roto el espejo. Entendiste la mentira lógica. Eso… es raro.'");
  } else {
    mostrarMensaje("CRUDY: 'Tu mente fue un reflejo más... confuso y roto.'");
  }
  setTimeout(() => nivelSimulada5(), 3000);
}

function nivelSimulada5() {
  mostrarMensaje("CRUDY: 'Última prueba: ¿Qué afirmación es VERDADERA?'");

  game.innerHTML += `

    <p>1. Estoy soñando.</p>
    <p>2. CRUDY no existe.</p>
    <p>3. El juego no comenzó.</p>

    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="finalSimulada(1)" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">1</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="finalSimulada(2)" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">2</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="finalSimulada(3)" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">3</p>
      </div>
    </div>
  `;
}

function finalSimulada(eleccion) {
  if (eleccion === 2) {
    estado.puntuacion += 1;
    mostrarMensaje("CRUDY: 'Error... si yo no existiera, tú no estarías atrapado aquí. Reiniciando la simulación...'");

    setTimeout(() => iniciarJuego(), 5000);
  } else {
    mostrarMensaje("CRUDY: 'Has aceptado el sueño. Te quedarás aquí... creyendo que despiertas.'");
    setTimeout(() => {
    game.innerHTML = "<h1 class='text-danger text-center mt-5'>⛔ GAME OVER</h1><p class='text-center'>CRUDY ha decidido tu destino.</p>";
    }, 3000);
  }
}

// TRAMPA DESCONOCIDA

function nivel2Trampa() {
  mostrarMensaje("CRUDY: 'Tres puertas frente a ti. Solo una lleva a la muerte. Elige con cuidado… o no.'");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="evaluarTrampa('roja')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Puerta Roja</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="evaluarTrampa('negra')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Puerta Negra</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="evaluarTrampa('gris')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Puerta gris</p>
      </div>
    </div>
  `;
}

function evaluarTrampa(respuesta) {
  mostrarMensaje(`CRUDY: 'Elegiste la puerta ${respuesta}... una mala decisión. Pero aquí no hay buenas.'`);
  setTimeout(() => nivel3Trampa(), 3000);
}

function nivel3Trampa() {
  mostrarMensaje("CRUDY: '¿Cuántas veces repetirás el mismo error antes de entender que no hay salida?'");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="evaluarTrampa2()" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Intentar otra vez</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="evaluarTrampa2()" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Cerrar los ojos</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="evaluarTrampa2()" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Gritar fuerte</p>
      </div>
    </div>
  `;
}

function evaluarTrampa2() {
  mostrarMensaje("CRUDY: 'Tu desesperación alimenta este sistema. Sigue así... nos diviertes.'");
  setTimeout(() => nivel4Trampa(), 3000);
}

function nivel4Trampa() {
  mostrarMensaje("CRUDY: 'Un acertijo… al que ninguna respuesta es correcta. ¿Listo para fallar con estilo?'");

  game.innerHTML += `
    <p class="mt-3">Si esta afirmación es falsa, ¿entonces es…?</p>
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="evaluarTrampa3()" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Verdadera</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="evaluarTrampa3()" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Falsa</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="evaluarTrampa3()" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Ambas</p>
      </div>
    </div>
  `;
}

function evaluarTrampa3() {
  mostrarMensaje("CRUDY: 'Una paradoja sin escape. Tu lógica muere aquí. Tu alma… también.'");
  setTimeout(() => nivel5Trampa(), 3000);
}

function nivel5Trampa() {
  mostrarMensaje("CRUDY: 'Última elección: ¿Cómo deseas ser eliminado?'");

  game.innerHTML += `
    <div class="row text-center mt-4">
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-1" class="img-door" onclick="finalTrampa('reinicio')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Reiniciado eternamente</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-2" class="img-door" onclick="finalTrampa('apagado')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Apagado como un error</p>
      </div>
      <div class="col-md-4">
        <img src="assets/images/puerta1.webp" alt="opcion-3" class="img-door" onclick="finalTrampa('corrupcion')" onmouseenter="reproducirSonidoPuerta()">
        <p class="mt-2">Corrupto por siempre</p>
      </div>
    </div>
  `;
}

function finalTrampa(decision) {
  mostrarMensaje(`CRUDY: 'Interesante… Serás ${decision}. Como todos los que creyeron que podían ganar.'`);

  setTimeout(() => {
    game.innerHTML = "<h1 class='text-danger text-center mt-5'>⛔ GAME OVER</h1><p class='text-center'>CRUDY ha decidido tu destino.</p>";
  }, 3000);
}

