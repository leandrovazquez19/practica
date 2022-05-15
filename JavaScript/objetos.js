/* 
% Objeto:
. Un objeto es un conjunto de contenidos relacionados agrupados en una sola variable.
. Se crea una variable con un nombre, se sigue con {} y dentro el nombre de la propiedad seguido de : y luedo el valor de la propiedad.
. Si el objeto tiene varias propiedades, cada 1 de las propiedades se las separa con una ",".

' var gato {
'   nombre: "Kiara",
'   comidaFavorita: "Pescado",
'   edad: 5,
'   sexoFemenino: true
' };
' console.log(gato.nombre);
! De esta manera se puede acceder a una propiedad en especifico del objeto. 

' var perro {
'   nombre: "Simba",
'   comidaFavorita: "Carne",
'   edad: 5
' }
' perro.edad = 7;
! De esta manera se cambia el valor de una propiedad.

% Metodos del objeto:
. Se le denomina metodos del objeto cuando un objeto tiene como propedad una function(){}.

' var perro = {
'   nombre: "Simba",
'   ladrido: function () {
'     console.log("Woof Woof!");
'   }
' }
' perro.ladrido();
! Esto lo que hace es llamar a la funcion que esta dentro de la variable perro en la propiedad ladrido.
! Pueden llevar parametros y return.

% This:
. Hace referencia al objeto que contiene el metodo.
. This solo se puede usar para acceder a las propiedades de un objeto dentro del metodo del objeto.

' var myCereal = {
'   name: "Trix",
'   display: function() {
'     console.log(this);
'   }
' }
! Esto lo que hace es mostrarme en consola todos las propiedades del objeto myCereal.

' var myCereal = {
'   name: "Trix",
'   display: function() {
'     console.log(this.name);
'   }
' }
! Esto lo que hace es mostrarme el valor de la propiedad name que tiene myCereal.

' var myCereal = {
'   name: "Trix",
'   display: function() {
'     this.name = "Cap'n Crunch";
'     console.log(this.name);
'   }
' }
! De esta manera se puede cambiar el valor de una propiedad del objeto.
*/