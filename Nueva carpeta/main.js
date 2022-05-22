/*class Juego{
  constructor(nombre, nivel, clase){
    this.nombre = nombre;
    this.nivel = nivel;
    this.clase = clase;
  }
  getBienvenida(){
    console.log("Bienvenido a Log Valley " + this.nombre );
  }
  getNivel(){
    if (this.nivel === 50) {
      console.log(`Felicidades! Tu nivel actual es ${this.nivel}, has alcanzado el nivel maximo.`);
    } else {
      console.log(`Tu nivel actual es ${this.nivel}! Sigue asi.`);
    }
  }
  getClase(){
    console.log("Tu clase es " + this.clase);
  }
}

class Personaje extends Juego{
  nivelMaximo(){
    if ((this.nivel >= 50 && this.clase === "Mago")      || 
        (this.nivel >= 50 && this.clase === "Tanque")    || 
        (this.nivel >= 50 && this.clase === "Caballero") || 
        (this.nivel >= 50 && this.clase === "Tirador")) {
      console.log("Tienes todas las habilidades");
    }
    else {
      console.log("No tienes todas las habilidades");
    }
  }
}

var user1 = new Personaje("Leandro", 38, "Mago");
var user2 = new Personaje("Joaquin", 50, "Tanque");
var user3 = new Personaje("Gabriel", 50, "Caballero");
var user4 = new Personaje("Matias", 19, "Tirador");
var user5 = new Personaje("Axel", 46, "Mago");
var user6 = new Personaje("Fabi", 50, "Caballero");
var user7 = new Personaje("Xavi", 50, "Tanque");

user2.getBienvenida();
user2.getNivel();
user2.getClase();
user2.nivelMaximo();


class Animales {
  constructor(nombre, sonido){
    this.nombre = nombre;
    this.sonido = sonido;
  }
  getNombre(){
    console.log(`Mi nombre es: ${this.nombre}`);
  }
  getSonido(){
    console.log(`${this.sonido}`);
  }
}

class MisMascotas extends Animales{
  constructor(nombre, sonido){
    super(nombre, sonido)
  }
}

var leandro = new MisMascotas("Sami", "Miau");

leandro.getSonido = function () {
  console.log(`Miauuuuuuuuuuuuuuuuuuuu`);
}

leandro.getSonido();
*/


