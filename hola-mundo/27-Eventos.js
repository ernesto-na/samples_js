//Eventos del raton
'use strict'

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
var boton = document.querySelector("#boton");
boton.addEventListener('click',function(){
    cambiarColor();
});

boton.addEventListener('mouseover',function(){
      boton.style.backgroundColor = "yellow";
});

boton.addEventListener('mouseout',function(){
      boton.style.backgroundColor = "#ccc";
});

var nombre = document.querySelector("#campo_nombre")

//Focus
nombre.addEventListener('mouseover',function(){
      console.log("se tiene el focus...")
});
//Blur
nombre.addEventListener('blur',function(){
      console.log("se quita el focus...")
});
//Keydown
nombre.addEventListener('keydown',function(event){
      console.log("se pulsa tecla", String.fromCharCode(event.keyCode) )
});
//Keypress
nombre.addEventListener('keypress',function(event){
      console.log("se presiona tecla", String.fromCharCode(event.keyCode) )
});
//KeyUp
nombre.addEventListener('keyup',function(event){
      console.log("se suelta tecla", String.fromCharCode(event.keyCode) )
});


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




//Conseguir todos los elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var texto1 = todosLosDivs[2];

texto1.innerHTML = "cambiado por js";
texto1.style.background = "red";
texto1.style.color="white";
