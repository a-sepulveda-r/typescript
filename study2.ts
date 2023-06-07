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

