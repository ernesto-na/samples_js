//multiplicar cualquier numero
//Se pide el número y la tabla
'use strict'

//var todasTablas = 1;
//do
//{
		//var tabla = parseInt(prompt("Escribe la tabla: ",1));
		//console.log(tabla);
		
for(var j=1; j<=10; j++)
{

	document.write("La tabla del: "+j +"<br>");
		for(var i=0; i<=10; i++)
		{
			document.write(j +" x "+ i+"="+j * i +"<br>");
		}
		document.write("<br>");
//
}		
		var res = prompt("¿Continuar?","s")
//}while(res!="n")
