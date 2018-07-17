//multiplicar cualquier numero
//Se pide el número y la tabla
'use strict'


do
{
		var tabla = parseInt(prompt("Escribe la tabla: ",1));
		console.log(tabla);
		document.write("La tabla del: "+tabla +"<br>");

		for(var i=0; i<=10; i++)
		{
			document.write(tabla +" x "+ i+"="+tabla * i +"<br>");
		}
		var res = prompt("¿Continuar?","s")
}while(res!="n")
