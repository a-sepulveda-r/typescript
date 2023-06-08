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
//Parámetros
//Los parámetros de función se escriben con una sintaxis similar a las declaraciones de variables.
//Ejemplo
function multiply(a, b) {
    return a * b;
}
var suma = function (num1, num2) {
    console.log(num1 + num2);
};
suma(2, 2);
//Parámetros opcionales
//Por defecto, TypeScript asumirá que todos los parámetros son obligatorios, pero se pueden marcar explícitamente como opcionales.
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 2, 3));
console.log(add(2, 2));
//Parámetros predeterminados
//Para parámetros con valores predeterminados, el valor predeterminado va después de la anotación de tipo:
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(2, 3));
//Parámetros con nombre
//Escribir parámetros con nombre sigue el mismo patrón que escribir parámetros normales.
var divide = function (_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return (dividend / divisor);
};
console.log(divide({ dividend: 10, divisor: 2 }));
//Casting es para cambiar el tipo de dato
var x = 'hello';
console.log(x.length);
//Usar <> funciona igual que transmitir con as.
var x2 = 'aeraeraer';
console.log(x2.length);
