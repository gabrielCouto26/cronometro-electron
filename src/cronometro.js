let centesimas = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

const btnIniciar = document.getElementById("iniciar")
const btnParar = document.getElementById("parar")
const btnContinuar = document.getElementById("continuar")
const btnReiniciar = document.getElementById("reiniciar")

function iniciar() {
  control = setInterval(cronometro, 10);

  btnIniciar.disabled = true;
  btnParar.disabled = false;
  btnContinuar.disabled = true;
  btnReiniciar.disabled = false;
}

function parar() {
  clearInterval(control);
  btnParar.disabled = true;
  btnContinuar.disabled = false;
}

function reiniciar() {
  clearInterval(control);
  centesimas = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;

  Centesimas.innerHTML = ":00";
  Segundos.innerHTML = ":00";
  Minutos.innerHTML = ":00";
  Horas.innerHTML = "00";

  btnIniciar.disabled = false;
  btnParar.disabled = true;
  btnContinuar.disabled = true;
  btnReiniciar.disabled = true;
}

function cronometro() {
  if (centesimas < 99) {
    centesimas++;
    if (centesimas < 10) { centesimas = "0" + centesimas }
    Centesimas.innerHTML = ":" + centesimas;
  }
  if (centesimas == 99) {
    centesimas = -1;
  }
  if (centesimas == 0) {
    segundos++;
    if (segundos < 10) { segundos = "0" + segundos }
    Segundos.innerHTML = ":" + segundos;
  }
  if (segundos == 59) {
    segundos = -1;
  }
  if ((centesimas == 0) && (segundos == 0)) {
    minutos++;
    if (minutos < 10) { minutos = "0" + minutos }
    Minutos.innerHTML = ":" + minutos;
  }
  if (minutos == 59) {
    minutos = -1;
  }
  if ((centesimas == 0) && (segundos == 0) && (minutos == 0)) {
    horas++;
    if (horas < 10) { horas = "0" + horas }
    Horas.innerHTML = horas;
  }
}

btnIniciar.addEventListener('click', iniciar)
btnParar.addEventListener('click', parar)
btnContinuar.addEventListener('click', iniciar)
btnReiniciar.addEventListener('click', reiniciar)