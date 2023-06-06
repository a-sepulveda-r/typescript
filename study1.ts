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