/*
% Operadores:
. suma = +
. resta = - 
. multiplicacion = *
. division = / 
. resto de una division = %

' var suma = 3 + 2;
! suma tendria una variable de 5.

' var primerNumero = 5;
' var segundoNumero = 2;
' var resultado = primerNumero - segundoNumero;
' var resultado = primerNumero + 3;
' var primerNumero++;
' var segundoNumero--;
! Se pueden hacer operaciones con  variables.
! ++ suma 1 al valor de la variable.
! -- resta 1 al valor de la variable.

' var resto = 15 % 7;
! esta operacion dara como resultado 1 que es el resto de dividir 15 entre 7.

' var a = 5;
' a += 5;
' a -= 5;
' a *= 5:
' a /= 5;
! Tambien podemos sumar, restar, multiplicar o dividir de esta forma. Estamos sumando, restando, multiplicando o dividiendo a la variable a.

' var numero = 20;
' var result = "10" + 10;
' var result2 = "Puesto:" + numero;
' var result3 = "Llueve?:" + true;
! Cuando unimos un numero o un booleano o una variable que contenga un numero con un string, automaticamente el resultado es un string.


% Comparadores:
. <   Menor que
. >   Mayor que 
. <=  Menor o igual que
. >=  Mayor o igual que
. === Igual que
. !== Desigual que

' var primerNumero = 4;
' var segundoNumero = 5;
' var miNombre = "Leandro";
' var miMismoNombre = "Leandro";
' var otroNombre = "Matias";

' console.log(10 <= 10);                                true
' console.log(4 <= 2);                                  false
' console.log(primerNumero === segundoNumero);          false
' console.log(miNombre === miMismoNombre);              true
' console.log(miNombre !== otroNombre);                 true


% Operadores Logicos:
. && = AND (true  solo si todas las operaciones son true.)
. || = OR  (true cuando 1 de las operaciones es true.)
. !  = NOT (convertir la expresión en un booleano. Si es true lo hace false y viceversa.)

% Template Strings:
. Facilitan la adicion de variables y expresiones dentro de una cadena.
. Las cadenas van entre ``, a esto se le llama literal string.
. Las variables van entre ${}.

' let nombre = "Leandro";
' console.log(`Bienvenido ${nombre}! Como esta?`);
! Esto lo que hace es escribir en consola "Bienvenido Leandro! Como esta?".

' let primerNumero = 20;
' let segundoNumero = 50;
' console.log(`La suma entre ${primerNumero} y ${segundoNumero} es: ${primerNumero + segundoNumero}`);
! Tambien podemos realizar operaciones dentro de las llaves de ${}.

' const saludo = (nombre) => {
'   return `Biendenido denuevo ${nombre}`
' }
' console.log(saludo`Leandro`);
! En este caso omitimos los parentecis cuando estamos llamando a una funcion con un literal string.$

' let primerPelicula = `Superman`;
' let segundaPelicula = `Batman`;
' let peliculas = `${primerPelicula}, ${segundaPelicula}`;
' console.log(peliculas);
! De esta manera estoy llamando a la variable peliculas a escribir en consola `Superman, Batman`.
*/