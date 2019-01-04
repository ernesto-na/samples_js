'use strict'

var peliculas = ['Mulan', 'Titanic','Rocky','Shreck', 'Sabrina'];

var precios =[10,20,30,40,50,60];
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

    var busqueda_precios = precios.some(precio => precio >= 20);



console.log(busqueda);

console.log(busqueda_precios);
