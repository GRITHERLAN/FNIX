const mostrarReloj = () => {
  let fecha = new Date();

  const tiempo = [formatoHora(fecha.getHours()), formatoHora(fecha.getMinutes()), formatoHora(fecha.getSeconds())];

  document.getElementById('hora').innerHTML = `${tiempo[0]}:${tiempo[1]}:${tiempo[2]}`;

  const fechas = [formatoFecha(fecha.getDay()), formatoFecha(fecha.getMonth()), fecha.getFullYear()];

  document.getElementById('fecha').innerHTML = `Dia:${fechas[0]} Mes:${fechas[1]} Año:${fechas[2]}`;

  document.getElementById('contenedor').classList.toggle('animar');
};

const formatoHora = (hora) => {
  if (hora < 10) {
    hora = '0' + hora;
  }
  return hora;
};

const formatoFecha = (fecha) => {
  if (fecha < 10) {
    fecha = '0' + fecha;
  }
  return fecha;
};

setInterval(mostrarReloj, 1000);
