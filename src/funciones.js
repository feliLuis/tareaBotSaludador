export function obtenerSaludoPorHora(idioma) {
  const hora = new Date().getHours();
  if (idioma === "en") {
      if (hora < 12) return "Good morning";
      if (hora < 18) return "Good afternoon";
      return "Good evening";
  } else {
      if (hora < 12) return "Buenos días";
      if (hora < 18) return "Buenas tardes";
      return "Buenas noches";
  }
}

export function obtenerTratamiento(genero, edad, idioma) {
  if (edad > 30) {
      if (idioma === "en") {
          return genero === "M" ? "Mr." : "Mrs.";
      } else {
          return genero === "M" ? "Sr." : "Sra.";
      }
  }
  return "";
}

export function generarSaludo(nombre, genero, edad, idioma) {
  let saludo = obtenerSaludoPorHora(idioma);
  let tratamiento = obtenerTratamiento(genero, edad, idioma);
  return `${saludo} ${tratamiento} ${nombre}`.trim();
}