'use strict'
if(typeof(Storage) !== 'undefined' ){
    console.log("Local Storage disponible");
}else{
    console.log("Local Storage NO disponible");
}

//Guardar datos
localStorage.setItem("titulo","Ernesto N.");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

var usuario = {
nombre: "ernesto",
email: "test@gmail.com",
web:"www.google.com"
};


localStorage.setItem("usuario",JSON.stringify(usuario));

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

  document.querySelector("#datos").append(userjs.web + " "+userjs.nombre);

localStorage.removeItem("#usuario");
localStorage.clear();
