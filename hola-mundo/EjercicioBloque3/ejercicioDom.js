'use strict'

// setInterval   <----Se ejecuta una sola vez
window.addEventListener('load',() => {
console.log("Inicia load");

  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display = "none";

  formulario.addEventListener('submit',function(){
        console.log("Evento submit");
        var nombre = document.querySelector('#nombre').value
        var apellidos = document.querySelector('#apellidos').value
        var edad = document.querySelector('#edad').value
        box_dashed.style.display = "block";

        /*parrafo.append(nombre);
        parrafo.append(apellidos);
        parrafo.append(edad);
        box_dashed.append(parrafo);*/
          /* opcion 2
        var datos_usuario = [nombre,apellidos,edad];
        var indice;
        for(indice in datos_usuario){
              var parrafo = document.createElement("p");
              parrafo.append(datos_usuario[indice]);
              box_dashed.append(parrafo);
        }   */
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;


        console.log(nombre);
        console.log(apellidos);
        console.log(edad);
  });

});
