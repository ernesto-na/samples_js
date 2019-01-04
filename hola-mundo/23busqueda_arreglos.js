'use strict'

var peliculas = ['Mulan', 'Titanic','Rocky','Shreck', 'Sabrina'];

function recorrerConForIn(arreglo)
{
  document.write("<br>");
  document.write("Usando For In: ");
  document.write("<br>");
  for(let element in arreglo){
      document.write( arreglo[element] + "<br>" );
  }
}

recorrerConForIn(peliculas);

/*var busqueda = peliculas.find(function(pelicula){

console.log("-->" + pelicula);

  return pelicula =="Titanic";
});*/



    var busqueda = peliculas.findIndex(lenguaje => lenguaje == "Titanic");
console.log(busqueda);
