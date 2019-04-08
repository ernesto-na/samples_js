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
        var edad = parseInt(document.querySelector('#edad').value);


        if (nombre.trim() == null || nombre.trim() == ""){
          alert("Nombre incorrecto")
          document.querySelector('#error_nombre').innerHTML="Nombre incorrecto";
          return false;
        }else{
            document.querySelector('#error_nombre').style.display = "none"
        }

        if (apellidos.trim() == null || apellidos.trim() == ""){
          alert("Apellidos incorrecto")
          document.querySelector('#error_apellidos').innerHTML="Apellidos incorrecto";
          return false;
        }{
            document.querySelector('#error_apellidos').style.display = "none"
        }

        if (edad == null || edad == 0 || isNaN(edad)){
          alert("Edad incorrecta")
          document.querySelector('#error_edad').innerHTML="Edad incorrecta";
          return false;
        }{
            document.querySelector('#error_edad').style.display = "none"
        }
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
        box_dashed.style.display = "block";
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
