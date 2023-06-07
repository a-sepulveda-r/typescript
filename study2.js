//Interfaces
//Las interfaces son similares a los alias de tipo, excepto que solo se aplican a objectlos tipos.
var rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);
var persona = {
    name: 'Juan',
    age: 20
};
console.log(persona);
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
var mercedes23 = {
    speed: 200,
    power: 300,
    color: "red",
    esDescapotableable: true
};
console.log(mercedes23);
//Tipos de unión de TypeScript
var printStatusCode = function (code) {
    console.log("My status code is ".concat(code, "."));
};
printStatusCode(200);
// Funciones 
//El tipo del valor devuelto por la función se puede definir explícitamente.
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//El tipo voidse puede usar para indicar que una función no devuelve ningún valor.
function printHello() {
    console.log('Hello!');
}
printHello();
