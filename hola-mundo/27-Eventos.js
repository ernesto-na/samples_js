//Eventos del raton
'use strict'
  var boton = document.querySelector("#boton");
  var bg;
  function cambiarColor()
  {
    console.log("entrando: ");
     bg = boton.style.backgroundColor;
      if(bg == "green"){
              boton.style.backgroundColor = "red";

        }else{
            boton.style.backgroundColor = "green";
        }
      return true;
  }
/*function cambiarColor(){
  var bg = boton.style.background;
  /*  if(bg == "green"){
          bg = "red";
    }else{
        bg = "green";
    }
    return == true;
}*/
function redirigir(url){

    window.location.href = url;

}
function redirect(url){
    window.open(url,"","width=400,height=300");
}
function getBom(){
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(screen.width);
console.log(screen.height);
console.log(window.location);
console.log(window.location.href);

}
//getBom();
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
