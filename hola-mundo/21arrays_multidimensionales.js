'use strict'

var categorias = ['Comedia','Terror','Drama'];
var peliculas = ['Mulan', 'Titanic','Rocky'];

function imprimeArregloPeliculas(peliculasArr)
{
  document.write("Contenido: ");
  document.write("<br>");
  for(var i = 0; i<peliculasArr.length; i++){

        document.write(peliculasArr[i]+"<br>");
    }

}

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
    imprimeArregloPeliculas(peliculas);
    var string_peliculas = peliculas.join();
    console.log(string_peliculas);

    var indice =  prompt("¿Qué pelicula quieres borrar?");

    var borrarPelicula = peliculas.indexOf(indice);
    //delete peliculas[borrarPelicula];
    peliculas.splice(borrarPelicula,1)
    peliculas = peliculas.sort();
    imprimeArregloPeliculas(peliculas);

      peliculas = peliculas.reverse();
      imprimeArregloPeliculas(peliculas);
