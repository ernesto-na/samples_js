/**
**Todos los numeros divisores de
**un numero introducido en prompt
**
*/
'use strict'

var num= parseInt(prompt("Escribe un numero: ",0));
		var i=num;
	for(i; i>0; i--)
		{
			if(num % i ==0)
			console.log(i)
		}
