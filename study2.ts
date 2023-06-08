//Interfaces
//Las interfaces son similares a los alias de tipo, excepto que solo se aplican a objectlos tipos.

interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };

  console.log(rectangle);

  interface Persona {
    name: string,
    age: number
  }

  const persona: Persona = {
    name: 'Juan',
    age: 20
  };

  console.log(persona);

//Ampliación de interfaces
//Las interfaces pueden ampliar la definición de cada una.
//Extender una interfaz significa que está creando una nueva interfaz con las mismas propiedades que la original, más algo nuevo

interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };

interface AUTO {
    speed: number,
    power: number
    color: string
}

interface autoDescaportable extends AUTO {
    esDescapotableable: boolean
}

const mercedes23: autoDescaportable = {
    speed: 200,
    power: 300,
    color: "red",
    esDescapotableable: true
}

console.log(mercedes23);

//Tipos de unión de TypeScript

const printStatusCode = (code: string | number) => {
    console.log(`My status code is ${code}.`);    
}

printStatusCode(200);

// Funciones 
//El tipo del valor devuelto por la función se puede definir explícitamente.

// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());
//El tipo voidse puede usar para indicar que una función no devuelve ningún valor.

function printHello(): void {
  console.log('Hello!');
}
printHello();

//Parámetros
//Los parámetros de función se escriben con una sintaxis similar a las declaraciones de variables.
//Ejemplo
function multiply(a: number, b: number) {
  return a * b;
}
const suma = (num1:number, num2:number) => {
  console.log(num1 + num2);
}
 suma(2, 2);

 //Parámetros opcionales
//Por defecto, TypeScript asumirá que todos los parámetros son obligatorios, pero se pueden marcar explícitamente como opcionales.

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

console.log(add(2, 2, 3));
console.log(add(2, 2));

//Parámetros predeterminados
//Para parámetros con valores predeterminados, el valor predeterminado va después de la anotación de tipo:
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

console.log(pow(2,3));

//Parámetros con nombre
//Escribir parámetros con nombre sigue el mismo patrón que escribir parámetros normales.

const divide = ({ dividend, divisor }: { dividend: number, divisor: number }) => (
   dividend / divisor
)

console.log(divide({dividend: 10, divisor: 2}));

//Casting es para cambiar el tipo de dato

let x: unknown = 'hello';

console.log((x as string).length);

//Usar <> funciona igual que transmitir con as.
let x2: unknown = 'aeraeraer';
console.log((<string>x2).length);