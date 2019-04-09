'use strict'
var formulario = document.querySelector('#formpeliculas');

formulario.addEventlistener('submit', function(){

var titulo = document.querySelector('#addpelicula').value;

  if( titulo.length >= 1  ){

      localStorage.setItem(titulo,titulo);
  }


});
