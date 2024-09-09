//https://www.javascript.com/

// comentario de una línea 

/*
comentario en varias líneas
el shortcut es Shift + Alt + a
*/

let my_variable = 'Mi variable'
var my_variable1 = 'Otra variable'

const lenguaje = 'JavaScript';

// En Js hay 7 tipos de datos primitivos

// 1. string Una secuencia de caracteres que representan un valor de texto.
let nombre = 'Claudia'; // cadena de texto

// 2. number Un número entero o un número con coma flotante
let edad = 36; //número entero
let temperatura = 36.6 // número decimal (float)

// 3. boolean
let esEstudiante = true; // valor booleano (true o false)

// 4. undefined
let sinValor ; //Una propiedad de alto nivel cuyo valor no está inicializado

// 5. null
let valorNulo = null; //representa la ausencia intencionada de cualquier valor

// 6. symbol
let identificador = Symbol('id'); //un símbolo único e inmutable

// 7. BigInt. Un número entero con precisión arbitraria.
let granEntero = 9007199254740992n;


console.log("Nombre:", `${nombre}`);
console.log("Edad:", `${edad}`); 
console.log("Temperatura:", `${temperatura}`);
console.log("Es estudiante:", `${esEstudiante}`); 
console.log("Sin valor:", `${sinValor}`); 
console.log("Valor nulo:", `${valorNulo}`); 
console.log("Identificador:", identificador); 
console.log("gran entero:", `${granEntero}`); 

// ver tipos de datos

console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(valorNulo));
console.log(typeof(valorNulo));
console.log(typeof(identificador));
console.log(typeof(granEntero));

