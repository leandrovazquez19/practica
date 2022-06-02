/*
var img = document.getElementById("dog");
var mensaje = document.getElementById("message");

img.addEventListener("touchmove", displayMessage);

function displayMessage() {
  mensaje.innerText = "Whoff!";
}

function cancelMessage() {
  mensaje.innerHTML = "";
}
*/
function potencia(num, exponente) {
  var resultado = Math.pow(num, exponente);
  resultado = Math.round(resultado);
  console.log(resultado);
}
potencia(64, 1/3);
