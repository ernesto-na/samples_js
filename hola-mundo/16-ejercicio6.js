'use strict'
/*
*	Calculadora
*	- Pida dos numeros por pantalla
*	- Si metememos uno mal que lo pida otra vez
*	-En el cuerpo de la página, en una alerta y por la consola el resultado de
*	-sumar, restar, multiplicar y dividir esas dos cifras
*/
	do
	{
		var num1= parseInt(prompt("Ingrese numero uno",1));	
	}while(isNaN(num1));
	console.log(num1);
	do
	{
		var num2= parseInt(prompt("Ingrese un número dos",1));	
	}while(isNaN(num2));
	console.log(num2);

	//document.write("Suma: "+num1 +" + "+ num2 + " = "+parseInt(num1+num2)+" <br>")
	//document.write("Suma: "+num1 +" - "+ num2 + " = "+parseInt(num1-num2)+" <br>")
	//document.write("Suma: "+num1 +" * "+ num2 + " = "+parseInt(num1*num2)+" <br>")
	//document.write("Suma: "+num1 +" / "+ num2 + " = "+parseInt(num1/num2)+" <br>")

	var res2 = "Suma: "+num1 +" + "+ num2 + " = "+parseInt(num1+num2)+" \n"
	+"Resta: "+num1 +" - "+ num2 + " = "+parseInt(num1-num2)+" \n"
	+"Multiplicacion: "+num1 +" * "+ num2 + " = "+parseInt(num1*num2)+" \n"
	+"División: "+num1 +" / "+ num2 + " = "+parseInt(num1/num2)+" \n";


	var res = "Suma: "+num1 +" + "+ num2 + " = "+parseInt(num1+num2)+" <br>"
	+"Resta: "+num1 +" - "+ num2 + " = "+parseInt(num1-num2)+" <br>"
	+"Multiplicacion: "+num1 +" * "+ num2 + " = "+parseInt(num1*num2)+" <br>"
	+"División: "+num1 +" / "+ num2 + " = "+parseInt(num1/num2)+" <br>";

	document.write(res);

	console.log(res2);




