/*
% Llamado de elementos y modificacion:

' document.getElementById("ID")
! Sirve para interafctuar con un elemento HTML. En donde dice ID colocamos la ID del elemento HTML con la que queremos interactuar.

' document.getElementById("ID").innerHTML = "Modificacion";
! Con .innerHTML llamamos al texto del elemento para modificarlo, despues agrego = y luego la modificacion.

' var element = document.getElementById("ID");
' console.log(element.innerHTML);
! De esta manera lo que estoy haciendo es a travez de la creacion de la variable element, llamar al texto del elemento de la id que seleccione.

' var element = document.getElementById("ID");
' element.innerHTML = "TEXTO";
! Lo que estoy haciendo es modificar el texto del elemento al que llame a travez de la variable element.


% Crear elementos, anidarlos y mostrarlos:
. Se pueden anidar elementos hijos a los elementos padre.

' <body id= "padre">
' </body>

' var bodyElemento = document.getElementById("padre");
' var createElemento = document.createElement("h1");

' createElemento.innerHTML = "TEXTO";
' bodyElemento.appendChild(createElemento);
! De esta manera lo que estoy haciendo es crear un elemento h1 qie contenga "TEXTO". Luego se anida la variable createElemento a la variable bodyElemento y lo muestra en html.


% Eliminacion de elementos:

' <body id= "padre">
' </body>

' var bodyElemento = document.getElementById("padre");
' var createElemento = document.createElement("h1");
' ' var createElemento1 = document.createElement("p");

' createElemento.innerHTML = "Bienvenido";
' createElemento1.innerHTML = "Texto";

' bodyElemento.removeChild(createElemento1);
! Haciendo esto lo que hago es eliminar el elemento p que cree con removeChild(NombreDeLaVariable).


% Obtencon de la entrada del usuario:

' var entrada = document.getElementById("ID").value;
! De esta manera se obtiene la entrada del usuario.


% Obtencion de un elemento segun su posicion:

' var bodyChildren = document.body.children;
' console.log(bodyChildren[1].innerHTML = "Modificacion");
! De esta manera se trae un elemento hijo de el elemento padre "Body" y modificarlo.

' var bodyChildren = document.body.firstElementChild;
' console.log(bodyChildren);
! Aca con firstElementChild se accede al primer elemento hijo del elemento padre "Body".

' var elementSibling = document.head.nextElementSibling;
' console.log(elementSibling);
! De esta manera se esta accediendo al primer elemento hermano mas cercano que tiene "Head".
' var elementSibling = document.body.firstChild.nextElementSibling;
' console.log(elementSibling);
! De esta manera se esta accediendo al primer elemento hermano mas cercano que tiene "Body" y despues selecciona al elemento hermano mas cercano.


% Acceder y cambiar elementos especificos:

' var variable = document.querySelector("Elemento");
' var variable = document.querySelector("#ID");
' var variable = document.querySelector(".CLASE");
' var variable = document.querySelector(".clase1.clase2");
' var variable = document.querySelector("p.ID");
' variable.innerHTML = "Modificacion";
! De esta forma recupero elementos HTML individuales y los modifico. Solo recupera el primer elemento que encuentra, si hay 2 elementos con la misma etiqueta o clase, solo accede al primero.
*/