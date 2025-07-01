document.getElementById("formEdad").addEventListener("submit", function(event) {
  event.preventDefault();

  const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  let mensaje = "";

  if (edad < 12) {
    mensaje = "Nivel Primario";
  } else if (edad >= 12 && edad <= 15) {
    mensaje = "Nivel Secundario Inicial";
  } else if (edad >= 16 && edad <= 18) {
    mensaje = "Nivel Secundario Final";
  } else {
    mensaje = "Edad fuera de rango educativo establecido";
  }

  document.getElementById("resultado").textContent = `Edad: ${edad} años. ${mensaje}`;
});
