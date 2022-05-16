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
! Cualquier cosa despues de return no se ejecuta.

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


% Funciones de Flechas:
. Se utiliza para escribir el codigo mas limpio y mas corto.

' var nombre = () => "Hola";

' var name = (parametro1, parametro2) => {

' }
! De esta manera no necesitamos "function", sino que denominamos una variable = (parametros separador por ,) o parametro sin necesidad de utilizar (), tambien se pueden definir el valor de los parametro de los (), y ejecuta el bloque de codigo dentro de {}.

' const cuenta = (numero = 200) => {
'   const segundoNumero = 0.5;
'   return numero - (numero * segundoNumero);
' }
' cuenta();
! Esto lo que hace es determinar el parametro dentro de la funcion flecha para evitar un valor NuN.

% Comprender Funciones:
. Para hacer una funcion descriptiva, a los nombres de las funciones de les pone verbos como prefijos, luego un nombre que describa bien la funcion.
. display El verbo display en los nombres de las funciones generalmente se utiliza cuando la funcion quiere mostrar un valor de un Array.
. get     El verbo get en los nombres de las funciones generalmente se utilizan cuando la funcion devuelve un valor sin cambiarlo de ninguna manera.
. is      El verbo is en los nombres de las funciones generalmente se utilizan cuando la funcion devuelve un valor booleano.
. sum     El verbo sum en los nombres de las funciones generalmente se utilizan cuando la funcion devuelve una suma.


% Condicionales Dentro de Funciones:

' function getEdad(edad) {
'   if (edad >= 18) {
'       console.log("Es mayor de edad");
'   }
'   else {
'       console.log("Es menor de edad");
'   }
' }
' getEdad(20);
! Esta funcion determina cuando una persona es mayor o menor de edad.


% Bucles Dentro de Funciones:

' function displayTabla(multiplicar) {
'     for (var i = 0; i < 10; i++) {
'         console.log(i * multiplicar);
'     }
' }
' displayTabla(2);
! Esta funcion lo que hace es crear un bucle mostrando la tabla del numero seleccionado en displayTable().

' function name(params, control) {
'     for (var i = 0; i < control; i++) {
'         console.log(params);
'     }
' }
' name("Hola", 4);
! Esto lo que hara es determinar cuantas veces quiero que el bucle se repita. En este caso en consola se repetira "Hola" 4 veces.


% Bucles sobre Arrays:

' var miArray = [1, 2, 3, 4, 5, 6];
' var numero = 5;
' function buscarArray(miArray, numero) {
'   for (var i = 0; i < miArray.length; i++) {
'     if (miArray[i] == numero) {
'       console.log("El numero " + numero + " esta dentro del array" );
'       break;
'     }
'   }
' }
' buscarArray(miArray, numero);
! Esto lo que hace es buscar dentro de "miArray" si esta "numero". primero se crea un array y una variable con el valor que se busca en el array, luego se crea una funcion con los parametros de la variable array y la variable que se busca, despues se indica un bucle que lo que hace es crear una variable index con el valor 0 que cuando es menor que la cantidad de valores del array se debera sumar 1 a index, dentro de ese bucle se crea un condicional que diga que cuando el array en la posicion de index valga lo mismo que la variable que se busca entonces escribir el console.log().
*/