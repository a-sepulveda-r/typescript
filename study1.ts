// explicito
let nombre: string = 'Manolito';
// implicito
let nombre2 = 'Manolito';
console.log(nombre);

//ARRAYS

const names: readonly string[] = ["Dylan"];
//names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?


const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
//snumbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error

//tuplas son array predefinidos
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// Ej Tupla

// define our tuple
let ourTuple2: [number, boolean, string];
// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');
console.log(ourTuple);

//Ejemplo tupla readonly
// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');

//Objetos en Ts

// Try playing around with modifying properties and adding ones to see what happens
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  
  console.log(car);
  
  const nombreCompleto: {primerNombre: string, segundoNombre: string, apellido: string, edad: number} = {
  
   primerNombre: 'Manuel',
   segundoNombre: 'Alberto',
   apellido: 'Gonzalez',
   edad: 34,
  };
  
  console.log(nombreCompleto);

  //Ejemplo con una propiedad opcional
const car2: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car2.mileage = 2000;
console.log(car2);

//índice de firmas
//Las firmas de índice se pueden utilizar para objetos sin una lista definida de propiedades.

//Ejemplo
const nameAgeMap: { [index: string]: number } = {};
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
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);

//Enumeraciones numéricas: completamente inicializadas
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
console.log(StatusCodes.BadRequest);

// Enumeraciones de cadena

enum CardinalDirections2 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections2.North);
// logs "West"
console.log(CardinalDirections2.West);

//Técnicamente, puede mezclar y combinar cadenas y valores de enumeración numéricos, pero se recomienda no hacerlo.