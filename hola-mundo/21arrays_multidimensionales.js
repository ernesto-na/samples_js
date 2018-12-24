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

    peliculas.pop();

    console.log(peliculas);

    console.log

    //ordenamiento arreglo
    peliculas = peliculas.sort();
      for(var i = 0; i<peliculas.length; i++){

            document.write(peliculas[i]+"<br>");
        }
      var string_peliculas = peliculas.join();

      console.log(string_peliculas);

document.write("<br>");



    var indice =  prompt("¿Qué pelicula quieres borrar?");

    var borrarPelicula = peliculas.indexOf(indice);
    //delete peliculas[borrarPelicula];
    peliculas.splice(borrarPelicula,1)
    peliculas = peliculas.sort();
    for(var i = 0; i<peliculas.length; i++){

          document.write(peliculas[i]+"<br>");
      }

document.write("<br>");
      peliculas = peliculas.reverse();
      for(var i = 0; i<peliculas.length; i++){

            document.write(peliculas[i]+"<br>");
        }
