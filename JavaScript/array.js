/*
% Array:
. Un array son objetos que se definen dentro de una variable que los hacen mutables. Mutable significa que se puede modificar, e inmutable significa que no se puede modificar.

' var variable = 2 + 4;
' var miArray = ["Primer Objeto", "Segundo Objeto", 24, variable, [2, 3, 4]];
! Si hago console.log(miArra[3]) me mostrara "6".

' var miArray = [1, 2, 3, 4];
' miArray[2] = 10;
! Esto cambiara el valor de la posicion 2 del array por un 10 dejando miArray = [1, 2, 10, 4]

' var miArray = [1, 2, 3, 4, 5]
' console.log(miArray.length)
! Poner miArray.length lo que hara es contabilizar cuandos el numero de elementos del array. En este caso mostrara 5.

' var array [1, 2, 3, 4, 5, 6]
' var longitud = array.length;
! Tambien podemos almacenar la longitur de un array en una variable.

' var miArray = ["Leandro", "Matias", "Axel"];
' for (var i = 0; i < miArray.length; i++){
'   console.log(miArray[i]);        
' }
! Esto lo que hara es crear un bucle donde escriba todos los elementos del array ("Leandro", "Matias", "Axel") se escriban en consola. Para la variable i = 0, mientras i sea menor que la cantidad de elementos de miArray, sumar 1 a i y escribir en consola miArray[i].

% Push:
. Es un metodo con la funcion de agregar un elemento al final de un array

' var numeros = [1, 2, 3, 4, 5, 6, 7];
' numeros.push (8);
! Este array resultaria en numeros = [1, 2, 3, 4, 5, 6, 7, 8]

% Pop:
. Es un metodo con al funcion de quitar el ultimo elemento de un array.
. Pop almacena ese ultimo elemento asique se puede utilizar.

' var numeros = [1, 2, 3, 4, 5, 6, 7];
' numeros.pop()
! Este array resultaria en numeros = [1, 2, 3, 4, 5, 6]

' var numeros = [1, 5, 4, 3, 6]
' var ultimoNumero = numeros.pop();
! Este array resultaria en [1, 5, 4, 3] y ultimoNumero pasaria a valer 6.


% Unshift:
. Es metodo con la funcion de agregar un elemento al principio de un array.

' var estaciones = ["Verano", "Otoño", "Invierno"];
' estaciones.unshift("Primavera");


% Shift:
. Es un metodo con al funcion de quitar el primer elemento de un array.

' var estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
' estaciones.shift();
! Este array resultaria en ["Verano", "Otoño", "Invierno"].


% JSON:

' var array = [1, 2, 3, 4, 5];
' console.log(JSON.stringify(array));
! Esto lo que hace es mostrar un array en consola de una mejor forma.
*/