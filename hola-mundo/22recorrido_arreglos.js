'use strict'
var peliculas = ['Mulan', 'Titanic','Rocky','Shreck', 'Sabrina'];

function recorrerConFor(arreglo)
{
  document.write("<br>");
  document.write("Usando For: ");
  document.write("<br>");
  for(var i = 0; i<arreglo.length; i++){

        document.write(arreglo[i]+"<br>");
    }
}

function recorrerConForIn(arreglo)
{
  document.write("<br>");
  document.write("Usando For In: ");
  document.write("<br>");
  for(var i = 0; i<arreglo.length; i++){

        document.write(arreglo[i]+"<br>");
    }
}

function recorrerConForEach(arreglo)
{
    document.write("<br>");
    document.write("Usando For Each: ");
    arreglo.forEach(function(element) {
    document.write("<li>" + element +"</li>"+ "<br>" );
});
}

recorrerConFor(peliculas);

//recorrerConForIn(peliculas);

recorrerConForEach(peliculas);
