'use strict'


var pelicula = {
titulo:"superman",
anio:"2018",
pais:"USA"
};

var peliculas = [
      {titulo:"vengadores",anio:"2019",pais:"USA"},
      pelicula
];

console.log(peliculas);
var caja_peliculas = document.querySelector("#peliculas");

var index;
  for(index in peliculas){

      var p = document.createElement("p");
      p.append(peliculas[index].titulo);
      caja_peliculas.append(p);

  }
