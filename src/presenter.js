import { generarSaludo } from "./functions.js";

document.addEventListener("DOMContentLoaded", function () {
    const botonSaludar = document.getElementById("saludar-btn");

    botonSaludar.addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value.trim();
        const genero = document.getElementById("genero").value;
        const edad = parseInt(document.getElementById("edad").value, 10);
        const idioma = document.getElementById("idioma").value;

        if (!nombre) {
            document.getElementById("resultado").innerText = 
                idioma === "en" ? "Please enter a name." : "Por favor, ingresa un nombre.";
            return;
        }

        const mensaje = generarSaludo(nombre, genero, edad, idioma);
        document.getElementById("resultado").innerText = mensaje;
    });
});