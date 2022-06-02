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


% Cambiar Atributos:

' var cambiarAtributo = document.querySelector("Elemento");
' cambiarAtributo.atributo = "Modificacion";
! De esta forma se puede cambiar el atributo de un elemento.

' var cambiarStyle = document.querySelector("link");
' cambiarStyle.href = "direccion";
! De esta forma se puede cambiar una hoja de estilo por completo.

' var cambiarStyle = document.querySelector("p");
' var container = document.querySelector("div");
' container.innerText = cambiarStyle.style.color;
! De esta forma escribira de que color es p en un div.

' var cambiarStyle = document.querySelector("p");
' cambiarStyle.style.color = "#d7465f";
! Asi es como se cambia el estilo de un elemento, se debe agregar el valor entre comillas.
! Si el modificador de Style es de varias palabras se debe colocar en formato Camel Case de la siguiente manera "backgroundColor".

' var imagen = document.querySelector("img");
' var atributo = imagen.getAttribute("src");
! De esta manera estoy guardando el valor del atributo en una variable.

' var imagen = document.querySelector("img");
' imagen.setAttribute("src", "utl");
! Aca lo que se esta haciendo es cambiando el atributo seleccionado.


% Traer varios elementos y clases:

' var elemento = document.getElementsByTagName("p");
' var div = document.querySelector("div");
' div.innerText = elemento[0].innerHTML;
! De esta manera lo que estoy haciendo es crear una variable con los elementos "p" y luego escribir en un div el primer elemento "p".

' var elemento = document.getElementsByClassName("class class");
' var div = document.querySelector("div");
' div.innerText = elemento.length;
! Aca estoy trayendo una clase y escribiendo en un div cuantos elementos tiene la clase en total. Se pueden agregar mas de 1 clase en un mismo getElementsByClassName, se deben separar con un espacio.

' var elemento = document.querySelectorAll("h1");
' var elemento = document.querySelectorAll(".clase");
' var elemento = document.querySelectorAll("h1.clase");
' var elemento = document.querySelectorAll(".clase, .clase2");
' var elemento = document.querySelectorAll("h1, .clase, .clase2");
' var div = document.querySelector("p");
' div.innerText = elemento[2].innerHTML;
! querySelectorAll sirve tanto para seleccionar elementos y clases. Tambien podemos buscar clases dentro de elementos en especifico y 2 clases distintas.


% Mejor manera de agregar y quitar clases:
. De esta manera cuando agreguemos o quitemos una clase no se anularan las clases anteriores.

' var elemento = document.querySelector("p");
' elemento.classList.add("bold", "backgroundColor", "color");
! Sirve para agregar una clase.

' var elemento = document.querySelector("p");
' elemento.classList.remove("bold" , "backgroundColor", "color");
! Sirve para quitar una clase.

' var elemento = document.querySelector("p");
' elemento.classList.toggle("bold", "backgroundColor", "color");
! Esto lo que hace es intercambiar entre add y remove cuando se presiona un boton.


% Propiedades de eventos:
. Se utilizan para no ensuciar el HTML y que sea mas legible.
. Un controlador de eventos se le llama a una funcion llamada despues de que se activa un evento.

' var button = document.querySelector("button");
' var parrafo = document.querySelector("p");
' button.onclick = name;
' function name() {
'     parrafo.innerText = "Bienvenidos";
' }
! Con el ".onclick" hacemos la misma funcion que el onclick como atributo de button, nadamas que no hace falta poner ().

' var div = document.querySelector("div");
' div.ondblclick = changueColor;
' function changueColor() {
'     div.classList.toggle("pink");
' }
! De esta manera cuando hacemos doble click lo que hacemos es cambiar la clase a pink cambiando que lo que haria es cambiar el backgroundColor a rosa.

' var textarea = document.querySelector("textarea");
' textarea.onscroll = changueColor;
' function changueColor() {
'     textarea.classList.add("lightblue");
' }
! Esto lo que haria es que cuando se haga scroll sobre textarea se agregaria una clase lightblue que cambiaria el backgroundColor a lightblue.

' var input = document.querySelector("input");
' var parrafo = document.getElementById("p");
' input.onchange = copiarTexto;
' function copiarTexto() {
'   parrafo.innerText = input.value;
' }
! Esto lo que hace es que cuando se produzca un cambio en el valor de input se escribira en "p".

' var input = document.querySelector("input");
' var parrafo = document.getElementById("p");
' input.oninput = contarDigitos;
' function contarDigitos() {
'     parrafo.innerText = input.value.length;
' }
! Esto lo que hace es contar los digitos que se van colocando en input.


% Forma moderna de agregar eventos a los elementos:
. Permite agregar multiples controladores de eventos a un mismo evento.
. Los nombres de eventos se les quita on.

' var input = document.querySelector("input");
' input.addEventListener("click", changueColor)
' function changueColor() {
'     input.classList.toggle("pink");
' }
! Esto agregaria un evento, igualaria a onclick, addEventListener("nombre-evento", funcion).

' var input = document.querySelector("div");
' input.addEventListener("click", changueColor);
' function changueColor() {
'     input.classList.toggle("pink");
' input.removeEventListener("click", changueColor);
' }
! Esto lo que haria es que cuando se haga click en el div se cambie de color a rosa y luego se remeve el evento, haciendo que por mas que se haga click denuevo el div se quedara rosa.


% Eventos Touch:
. Son eventos tactiles.

' var img = document.getElementById("img");
' img.addEventListener("touchstart", getNombre);
' img.addEventListener("touchend", getNombre);
' img.addEventListener("touchmove", gerNombre);
' img.addEventListener("touchcancel", getNombre);
! El primero activa la funcion cuando el usuario toca el elemento img.
! El segundo activa la funcion cuando el usuario dejo de tocar el elemento img.
! El tercero activa al funcion cuando el usuario mantiene el elemento img.
! El cuarto activa la funcion cuando el usuario interrume el toque del elemento img.
*/