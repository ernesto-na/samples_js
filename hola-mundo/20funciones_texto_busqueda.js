'use strict'
var numero = 44;
var texto1 = "Bienvenido al curso de Javascript de curso Ernesto Nepomuceno";
var texto2 = "es muy buen curso";

//Regresa la posicion de la coincidencia
var busqueda = texto1.indexOf("curso");
console.log("indexOf: "+busqueda);
//Obtiene la posicion de la ultima coincidencia
var busqueda = texto1.lastIndexOf("curso");
console.log("lastIdexOf: "+busqueda);
//Regresa a partir de que caracter aparece
var busqueda = texto1.search("curso");
console.log("search: "+busqueda);

//Regresa un arreglo con las coincidencias
var busqueda = texto1.match(/a/gi);

console.log(busqueda);

var busqueda = texto1.substr(14,5);
console.log(busqueda);

var busqueda = texto1.charAt(44);
console.log(busqueda);

var busqueda = texto1.startsWith("Bi");
console.log(busqueda);

var busqueda = texto1.endsWith("Nepomuceno");
console.log(busqueda);

var busqueda = texto1.includes("Nepomuceno");
console.log(busqueda);
