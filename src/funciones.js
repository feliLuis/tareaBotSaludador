function obtenerSaludoPorHora() {
  const hora = new Date().getHours();
  if (hora < 12) return "Buenos días";
  if (hora < 18) return "Buenas tardes";
  return "Buenas noches";
}

export function generarSaludo(nombre, genero, edad, idioma) {
  let saludo = obtenerSaludoPorHora(idioma);
  let tratamiento = obtenerTratamiento(genero, edad, idioma);
  return `${saludo} ${tratamiento} ${nombre}`.trim();
}