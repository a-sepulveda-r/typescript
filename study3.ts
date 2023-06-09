//CLASES EN TS
//Los miembros de una clase (propiedades y métodos) se escriben usando anotaciones de tipo, similares a las variables.
class Person {
  name: string;

  constructor() {
    this.name = ""; // Inicializa la propiedad name en el constructor
  }
}

const person = new Person();
person.name = "Jane";

console.log(person);

//
class Person2 {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}
      
const person2 = new Person2("Jane");

console.log(person2.getName());

class Automovil {
  public constructor(private name: string, private color: string){}

  public getName(): string {
    return this.name;
  }

  public getColor(): string {
    return this.color;
  }
}

const auto1 = new Automovil('camaro', 'naranjo');

console.log("El " +auto1.getName() + " es de color " + auto1.getColor());