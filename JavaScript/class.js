Clases
Las clases son plantillas para objetos que nos permiten crear objetos mas rapido.
El nombre de las clases comienzan con mayusculas.
Necesitan un metodo llamado constructor() para crear nuevos objetos

class Peliculas {
  constructor(nombre, duracion){
  }
}

class Book {
  constructor(autor, titulo){
    this.autor = autor;
    this.titulo = titulo;
  }
}

var book1 = new Book ("Leo Tolstoy", "War and Peace");
var book2 = new Book ("Dr.Seuss", "Oh, the Places You'll Go!");
console.log(book1);
Con new Book() podemos agregar facilmente valores nuevos a los objetos que vamos creando.

class VirtualPet{
  constructor(name){
    this.name = name;
  }
  eat(comida){
   if (comida == "Carne") {
     console.log("Ñam Ñam");
   } else{
     console.log("Quiero CARNE!");
   }
  }
}
var perro = new VirtualPet("Simba");
perro.eat("Carne");
Podemos agregar una funcion sin necesitar de "function", en este caso cuando llameos a perro.eat() nos devolvera "Ñam Ñam".

class Sport{
  constructor(name){
    this.name = name;
    this.scoreValue = 0;
    this.periods = 4;
    this.result = 0;
  }
  score(){
    this.result = this.result + this.scoreValue;
    console.log(this.result);
  }
}
var sport1 = new Sport("Football");  
var sport2 = new Sport("Soccer");

sport1.scoreValue = 6;
sport2.scoreValue = 1;

sport1.score();
sport2.score();

