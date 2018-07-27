'use strict'


console.log("Rest");
function  nombre_funcion ( param1, param2,...resto_params)
{
console.log("Parametro1: ", param1);
console.log("Parametro2: ", param2);
console.log("resto_params: ",resto_params);
}

var frutas =["kiwi","mango"]

console.log("Rest");
nombre_funcion(...frutas,"naranja","pera","melon","uva","sandia")