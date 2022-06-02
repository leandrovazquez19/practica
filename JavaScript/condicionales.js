/*
% Sentencia de if:
. Se le llama Sentencia if a "if ()".
. Lo que esta entre {} se le llama Bloque se Codigo.

' if (condition) {
'   console.log("Hola");
' '}
! Si (if) algo (condition) se cumple, entonces hacer esto {console.log("Hola");}


% Sentencia de Else:
. else siempre se coloca debajo del bloque de codigo de if.

' if (conditionTrue) {
'   console.log(true);
' } else {
'   console.log(false);
' }
! Si if (condition) es false entonces (else) hacer esto otro.


% Sentencia de Else Sentencia de if:
. A else se le agrega un condicional
. Se pueden codificar los else if que queramos uno debajo del otro bloque para cumplir la funcion que necesitemos.

' if (condition) {
'    console.log("true");
' } else if (condition) {
'    console.log("true");
' }
! Si if (condition) es false entonces hacer (else) si cumple [else if(condition)].


% While:
. while se utiliza para crear bucles, while significa mientras.

' while (condition) {
    
' }
! Mientras se cumpla la condicion, hacer lo siguiente. Este bucle se repite indefinidamente mientras la condificon sea true.

' var bucles = true;

' while (condition) {
'     console.log("Bucle");  
'     bucles = false;  
' }
! De esta manera cuando creamos una variable y le decimos al final del bloque del codigo de while que es false, el bucle se detendra.

' var control = 0 ;

' while (control < 10) {
'    console.log("Se repite hasta que control sea 10");
'    control++;
' }
! De esta forma podemos controlar cuantas veces se repite el bucle.


% For:
. For es una forma de crear bubles mas facil de entender a la vista porque la informacion de las veces que se repite el bucle esta entre parentecis.
. Dentro del parentecis podemos escribir una variable que en este caso es i (index), una condificon y un operador de crecimieto o decrecimiento.
. Dentro del bloque indicamos que debe hacer cuando el bucle for es true.

' for (var i = 0; i < 5; i++) {
'   console.log("Escribir bucle");;
' }
! En este caso significa, para(for) la variable i = 0, cuando sea menor que 5, aumentar en 1 su valor, cuando esta condicion sea true se pondra en consola "Escribir bucle". 
*/