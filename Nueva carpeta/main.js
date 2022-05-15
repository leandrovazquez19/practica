var pan = 100;
var salchicha = 150;
var ketchup = 250;
var mayonesa = 250;
var mostaza = 250;
var lechuga = 170;
var papas = 200;
var miVilletera = 3000;
var miLista = 0;
var teQuedan;
var teFaltan;

miLista += pan * 3;
console.log("3 Pan: " + pan * 3);
miLista += salchicha * 3;
console.log("3 Salchicha: " + salchicha * 3);
miLista += ketchup;
console.log("Ketchup: " + ketchup);
miLista += mayonesa;
console.log("Mayonesa: " + mayonesa);
miLista += mostaza;
console.log("Mostaza: " + mostaza);
miLista += lechuga;
console.log("Lechuga: " + lechuga);
miLista += papas * 20;
console.log("20 Papas: " + papas * 20);

console.log("Total de la compra: " + miLista + "$"); 

 if (miLista < miVilletera) {
    console.log("Compra con Exito");
    teQuedan = miVilletera - miLista;
    console.log("Te quedan: " + teQuedan + "$");
} else {
    console.log("Dinero insuficiente");
    teFaltan = -1 * (miVilletera - miLista) ;
    console.log("Te faltan: " + teFaltan); 
}

var myCereal = {
  name: "Trix",
  display: function() {
      console.log(this.name);
  }
}
myCereal.display();
