// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "Sueño contigo cuando estoy solo", time: 12 },
    { text: "Cariño, no te vayas porque ya voy a casa", time: 13 },
    { text: "Pasala conmigo", time: 15 },
    { text: "No me importa si el Sol se va", time: 20 },
    { text: "Cariño, no llores cuando me vaya", time: 27 },
    { text: "Te prometo que eres todo lo que quiero", time: 30 },
    { text: "Esto es para ti, cariño", time: 32 },
    { text: "Escucha, es tu canción", time: 34 },
    { text: "Oye cariño, solo pienso en ti", time: 41.6 },
    { text: "Desde que me despierto en las mañanas hasta me voy a dormir", time: 42.6 },
    { text: "Como quisiera que fueras mía, pienso en ti todo el tiempo", time: 48 },
    { text: "Siempre siento que vuelo, cariño, tú me haces sentir bien", time: 53 },
    { text: "Perdido en las palabras que me dices", time: 56 },
    { text: "Y pasando tiempo juntos, es el último anhelo", time: 59 },
    { text: "Estoy en la cima del mundo, nena, ¿puedes verme?", time: 64 },
    { text: "Encontré a la chica perfecta, quiero hacerte mi reina", time: 68 },
    { text: "Una y otra vez llego a sentirme demasiado triste", time: 71 },
    { text: "Porque mi sueño no se ha hecho una realidad", time: 73 },
    { text: "Pero el tiempo dirá, el tiempo dirá", time: 78 },
];

// Animar las letras
function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 6
    );

    if (currentLine) {
        // Calcula la opacidad basada en el tiempo en la línea actual
        var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
        var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

        // Aplica el efecto de aparición
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        // Restablece la opacidad y el contenido si no hay una línea actual
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation =
        "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
    setTimeout(function () {
        titulo.style.display = "none";
    }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);