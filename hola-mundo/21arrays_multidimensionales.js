'use strict'

var categorias = ['Comedia','Terror','Drama'];
var peliculas = ['Mulan', 'Titanic','Rocky'];

var cine = [categorias,peliculas];

//console.log(cine[1][2]);

      var elemento = "";
  do{

      elemento = prompt("Introduce una pelicula");
      peliculas.push(elemento);

    }while (elemento!='ACABAR');

    console.log(peliculas);
