// explicito
var nombre = 'Manolito';
// implicito
var nombre2 = 'Manolito';
console.log(nombre);
//ARRAYS
var names = ["Dylan"];
//names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
//snumbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var head = numbers[0]; // no error
//tuplas son array predefinidos
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// Ej Tupla
// define our tuple
var ourTuple2;
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');
console.log(ourTuple);
//Ejemplo tupla readonly
// define our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
//Objetos en Ts
// Try playing around with modifying properties and adding ones to see what happens
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
var nombreCompleto = {
    primerNombre: 'Manuel',
    segundoNombre: 'Alberto',
    apellido: 'Gonzalez',
    edad: 34,
};
console.log(nombreCompleto);
//Ejemplo con una propiedad opcional
var car2 = {
    type: "Toyota"
};
car2.mileage = 2000;
console.log(car2);
//índice de firmas
//Las firmas de índice se pueden utilizar para objetos sin una lista definida de propiedades.
//Ejemplo
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Manuel = 27; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
//Enumeraciones de TypeScript//
//Una enumeración es una "clase" especial que representa un grupo de constantes (variables inmutables).
//Las enumeraciones vienen en dos sabores stringy numeric. Vamos a empezar con numérico.
//Enumeraciones numéricas: inicializadas
//Puede establecer el valor de la primera enumeración numérica y hacer que se incremente automáticamente a partir de eso:
//Ejemplo
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);
//Enumeraciones numéricas: completamente inicializadas
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
console.log(StatusCodes.BadRequest);
