'use strict'

// setInterval   <----Se ejecuta una sola vez
window.addEventListener('load',() => {

var tiempo  = setInterval( function (){
console.log("Se ejecuta timer");
},3000);
});  //end load
