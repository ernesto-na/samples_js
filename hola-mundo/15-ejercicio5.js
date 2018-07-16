//multiplicar cualquier numero
//Se pide el número y la tabla
'use strict'


//do
//{
var tabla = parseInt(prompt("Escribe la tabla: ",1));
console.log(tabla);
document.write("La tabla del: "+tabla);
//confirm("Tabla: "+tabla+" numero: "+num+" = "+tabla*num);
for(var i=1; i>=10; i++)
{
 document.write(tabla+" x "+ i "="+tabla*i);
}

var res=prompt("Continuar.. S/N","S")
//}while(res!="n");

