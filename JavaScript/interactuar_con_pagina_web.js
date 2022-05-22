Llamado de elementos y modificacion:

document.getElementById("ID")
Sirve para interafctuar con un elemento HTML. En donde dice ID colocamos la ID del elemento HTML con la que queremos interactuar.

document.getElementById("ID").innerHTML = "Modificacion";
Con .innerHTML llamamos al texto del elemento para modificarlo, despues agrego = y luego la modificacion.

var element = document.getElementById("ID");
console.log(element.innerHTML);
De esta manera lo que estoy haciendo es a travez de la creacion de la variable element, llamar al texto del elemento de la id que seleccione.

var element = document.getElementById("ID");
element.innerHTML = "TEXTO";
Lo que estoy haciendo es modificar el texto del elemento al que llame a travez de la variable element.


Crear elementos, anidarlos y mostrarlos:
Se pueden anidar elementos hijos a los elementos padre.

<body id= "padre">
</body>

var bodyElemento = document.getElementById("padre");
var createElemento = document.createElement("h1");

createElemento.innerHTML = "TEXTO";
bodyElemento.appendChild(createElemento);
De esta manera lo que estoy haciendo es crear un elemento h1 qie contenga "TEXTO". Luego se anida la variable createElemento a la variable bodyElemento y lo muestra en html.


Eliminacion de elementos:

<body id= "padre">
</body>

var bodyElemento = document.getElementById("padre");
var createElemento = document.createElement("h1");
var createElemento1 = document.createElement("p");

createElemento.innerHTML = "Bienvenido";
createElemento1.innerHTML = "Texto";

bodyElemento.removeChild(createElemento1);
Haciendo esto lo que hago es eliminar el elemento p que cree con removeChild(NombreDeLaVariable).