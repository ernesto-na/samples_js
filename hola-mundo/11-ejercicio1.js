/*
Programa que pida dos numeros y que nos diga cual es el mayor, el
menor y si son iguales
*/
'use strict'

var num1 =0;
var num2 =0;

while(num1<=0 || num2<=0 || isNaN(num1) ||isNaN(num2))
{
	num1 =prompt("Escriba el primer número",0);
	num2 =prompt("Escriba el segundo numero número",0);
}


console.log(num1 +" "+num2);

if(num1>num2)
{
	confirm("El numero mayor es: "+num1);
	console.log("El numero mayor es: "+num1);
}
else if (num2>num1)
{
	confirm("El numero mayor es: "+num2);
	console.log("El numero mayor es: "+num2);
}
else if(num2==num1)
{
	confirm("El numero "+num1+" es igual a "+ num2);
	console.log("El numero "+num1+" es igual a "+ num2);
}

