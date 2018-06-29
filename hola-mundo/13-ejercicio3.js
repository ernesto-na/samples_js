/*Hacer un programa que muestre todos
*los numeros  entre dos numeros dados
*
*/
'use strict'
		var numero1 = parseInt(prompt("Ingrese el primer numero",0));
		var numero2 = parseInt(prompt("Ingrese el primer numero",0));

		if(numero1<=numero2)
			{
				for(var i=numero1+1; i<numero2; i++)
				{
					if(i%2 !=0)
					{
					console.log(i )
					}
				}
			}
		else (numero2<=numero1)
			{
				for(var i=numero2+1; i<numero1; i++)
				{
					if(i%2 !=0)
					{
					console.log(i )
					}
				}
			}

		//console.log(numero1)
		//console.log(numero2)