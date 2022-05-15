/*
% Function:
. Crea codigo reutilizable.
. Name  es el nombre de la function.
. Params son los parametros.
. Lo que este entre {} es el cuerpo de la funcion donde se ejecutaran la secuencia de intrucciones que se aplicaran.

' function name(params) {
'   console.log("Hola: " + params);    
' }

' name("Leandro");

! Esta funcion lo que haria es escribir en la consola lo siguiente: "Hola: Leandro"

' function name(params) {
'   var nombres = "Tu nombre es: " + params;
'   return nombres;
' }
' console.log(name("Leandro"));
! return lo que hace es devolver un valor, en este caso cuando llamamos a la funcion con console.log devuelve "Tu nombre es: Leandro".

' function name(params) {
'   var nombres = "Tu nombre es: " + params;
'   return nombres;
' }
' var result = name("Leandro");
' console.log(result);
! Tambien se puede almacenar el valor de retorno en una variable. En este caso console.log(result) muestra "Tu nombre es: Leandro".
! En caso de no poner un retorn la funcion devuelve el valor undefined.

' function name(params, params2) {
'   console.log("Se agendo a: " + params + " " + params2);
' }
! Se pueden agregar mas de 1 parametro.

% Comprender Funciones:
. Para hacer una funcion descriptiva, a los nombres de las funciones de les pone verbos como prefijos, luego un nombre que describa bien la funcion.
. display El verbo display en los nombres de las funciones generalmente se utiliza cuando la funcion quiere mostrar un valor de un Array.
. get     El verbo get en los nombres de las funciones generalmente se utilizan cuando la funcion devuelve un valor sin cambiarlo de ninguna manera.
. is      El verbo is en los nombres de las funciones generalmente se utilizan cuando la funcion devuelve un valor booleano.
. sum     El verbo sum en los nombres de las funciones generalmente se utilizan cuando la funcion devuelve una suma.
*/