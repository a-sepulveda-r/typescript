//CLASES EN TS
//Los miembros de una clase (propiedades y métodos) se escriben usando anotaciones de tipo, similares a las variables.
var Person = /** @class */ (function () {
    function Person() {
        this.name = ""; // Inicializa la propiedad name en el constructor
    }
    return Person;
}());
var person = new Person();
person.name = "Jane";
console.log(person);
//
var Person2 = /** @class */ (function () {
    // name is a private member variable
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2("Jane");
console.log(person2.getName());
var Automovil = /** @class */ (function () {
    function Automovil(name, color) {
        this.name = name;
        this.color = color;
    }
    Automovil.prototype.getName = function () {
        return this.name;
    };
    Automovil.prototype.getColor = function () {
        return this.color;
    };
    return Automovil;
}());
var auto1 = new Automovil('camaro', 'naranjo');
console.log("El " + auto1.getName() + " es de color " + auto1.getColor());
