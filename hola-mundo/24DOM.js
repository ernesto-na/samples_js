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
