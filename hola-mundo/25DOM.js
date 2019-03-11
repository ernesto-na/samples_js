'use strict'
function cambiaColor(color){

  caja.style.color = color;
}
//var  caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "Oracle";
caja.style.background = "red";
caja.style.padding="20px"
caja.style.color="white";
caja.className="holaclase"


console.log(caja);

//Conseguir todos los elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var texto1 = todosLosDivs[2];

texto1.innerHTML = "cambiado por js";
texto1.style.background = "red";
texto1.style.color="white";

console.log(texto1);
