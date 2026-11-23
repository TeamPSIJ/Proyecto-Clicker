let contador = 0;

const boton = document.getElementById("miBoton");
const sprite = document.getElementById("spriteMouse");
const textoLineas = document.getElementById("CodeLine");

// Cuando presionas el botón del ratón
boton.addEventListener("mousedown", () => {
    sprite.src = "Sprites/Mouseclick UI (32x32)/Mouse2.png";
    contador += 1;
    textoLineas.textContent = "Líneas de Código: " + contador;
});

// Cuando sueltas el botón del ratón
boton.addEventListener("mouseup", () => {
    sprite.src = "Sprites/Mouseclick UI (32x32)/Mouse1.png";
});

// Por si presionas el botón y sacas el ratón fuera antes de soltar
boton.addEventListener("mouseleave", () => {
    sprite.src = "Sprites/Mouseclick UI (32x32)/Mouse1.png";
});