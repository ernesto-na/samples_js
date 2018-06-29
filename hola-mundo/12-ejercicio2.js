'use strict'
//mostrar la media y la suma de n numeros hasta recibir
//un negativo


var suma =0;
var contador =0;


		do{
			

				var numero = parseInt(prompt("Ingrese el numero: ",0));
					if(isNaN(numero))
					{
						numero=0;
						console.log(numero)
						
					}else if(numero>=0)
				{
					

					suma =suma+ numero;
					contador ++;
					console.log(numero, suma,contador);
					
					
				}		
		


		}
		while(numero>=0)
			var auxProm = parseFloat(suma)/parseFloat(contador);
			confirm("La suma es : "+suma+ " La media es: "+auxProm)
			