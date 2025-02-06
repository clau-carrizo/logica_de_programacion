// Interpolación 
  const nombre = 'Claudia';
  const edad = 25;
  const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
  console.log(mensaje); // "Hola, mi nombre es Claudia y tengo 25 años."

// // *** Tipos de operadores *** 
/* Aritméticos
  Asignación 
  Comparación
  Lógicos
  Identidad
  Pertenencia
  Bit

*/



// Operadores Aritméticos 
// realizan operaciones matemáticas básicas
//-----------------------------------------

// suma
// resta
// multiplicación
// division

// módulo (%):el resto de la división entre dos números.

const modulo = 15 % 8; // 7

//exponenciación o potencia
const exponenciacion = 2 ** 3 // 8

// Solucionar problemas de precisión

const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1)); // asigna cantidad de valores luego del punto
console.log(resultado === 0.3); //  comprueba datos (valor y tipo)

//OPERACIONES AVANZADAS 
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7) 
const aleatorio = Math.random()

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);

// *** Operadores de Asignación
// asignan a variables y actualizan sus valores
//---------------------------------------------

// =  asignación simple
let my_number = 8;
console.log(my_number);
// += asignación con suma
console.log(my_number += 1);
// -= asignación con resta
// *= asignación con multiplicación
// /= asignación con división 
// //= asignación con división entera
// %= asignación con modulo
console.log(my_number % 2);
// ** exponente y asignación


// *** Operadores de Comparación
// comparan dos valores y un valor booleano
//-----------------------------------------

// ==   Igual a (comparación de valor)
console.log(`Igualdad: 10 == 3 -> ${10 == 3}`);//false
// === Igual a (comparación de valor y tipo)
// !=  No igual a (comparación de valor)
console.log(`Igualdad: 10 == 3 -> ${10 != 3}`);//true
// !== No igual a (comparación de valor y tipo)
// >   Mayor que
console.log(`Mayor que : 10 > 3 -> ${10 > 3}`);//true
// <   Menor que
// >=  Mayor o igual que
// <=  Menor o igual que

// *** Operadores Lógicos
// Se utilizan para combinar valores booleanos
//--------------------------------------------

// && Y lógico
console.log(`&& : 10 + 3 == 13 AND 5 - 1 == 4 -> es ${10 + 3 == 13 && 5 - 1 == 4}`);//true

true && true; //true
true && false; //false
false && true; //false
123 && 'abc'; //'abc'

// || O lógico
console.log(`||: 10 + 3 == 13 O 5 - 1 == 4 -> es ${10 + 3 == 13 || 5 - 1 == 4}`);//true

true || false; //true
false || false; //false
'abc' || null; //'abc'
console.log(`${0 || 'gato'}`); //'gato'

// !  Negación lógica  .  Invierte el valor del operando
console.log(`NOT : not 10 + 3 == 14 es ${!(10 + 3 == 14)}`);//true

!true; //false
!false; //true

var spam = ''; 
var booSpam = !spam; //true porque la cadena vacía se considera falsa

// *** Operadores de Identidad 
// aplican a numeros, cadenas de texo, objetos.
// compara el valor de la posición de memoria

// Caso True

let obj1 = { valor: 10 };
let obj2 = obj1; // Ambas variables apuntan al mismo objeto en memoria

console.log(obj1 === obj2); // true

// Caso false

let obj3 = { valor: 10 };
let obj4 = { valor: 10 }; // Aunque tienen el mismo contenido, son objetos diferentes

console.log(obj3 === obj4); // false


//Operadores de pertenencia
//para conjuntos, estructuras

console.log(`'u' en 'Claudia': ${'Claudia'.includes('u')}`); // true

//Negación
const nombre1 = 'Claudia';
const letra = 'x';

console.log(`'${letra}' no está en '${nombre1}': ${!nombre1.includes(letra)}`); // true



//Operadores de Bit a Bit (Bitwise)
// Manipulan los bits de los números
//----------------------------------

a = 10;// 1010
b = 3; // 0011
// & AND 1 & 1 = 1 != ! 1 & 0 = 0
console.log(`AND; 10 & 3 = ${10 & 3}`); // 0010 = 2
// | OR Si un operador es 1 el resultado es 1
console.log(`OR; 10 | 3 = ${10 | 3}`); // 1011 = 11
// ^ XOR si los operadores son diferentes el resultado es 1
console.log(`XOR; 10 ^ 3 = ${10 ^ 3}`); // 1001 = 9
// ~ NOT intercambia los valores (negándolos)
console.log(`NOT; 10 ~ 3 = ${~(10 & 3)}`) ; // 1101 = 13

// << Desplazamiento a la izquierda
// >> Desplazamiento a la derecha
// >>> Desplazamiento a la derecha sin signo



// Operadores de Incremento/Decremento
// Aumentan o disminuyen el valor de una variable en uno

// ++  Incremento
// --  Decremento


// Operadores Especiales
//----------------------

// typeof:el tipo de dato de una variable.
// instanceof: Verifica si un objeto es una instancia de una clase o constructor.
// void: Evalúa una expresión yundefined.
// delete: Elimina una propiedad de un objeto.

//------------------------------------------------------------

// *** Estructuras de control

//------------------------------------------------------------

// Condicionales

let my_string = 'Monica';


if (my_string == 'Claudia') {
  console.log('my_string es "Claudia"')
}
else if (my_string == 'Monica') {
  console.log('my_string es "Monica"')
}
else{
  console.log('my_string no es "Claudia"')
}

// Iterativas

// Sirve para recorrer una estructura de mas de un elemento
// o para ejecutar una misma acción varias veces

for (let i = 0; i < 11; i++) {
  console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//----------------------------------------------------------------

function numberBetween () {
  for(let number = 10 ; number <=55; number++){
    if (number % 2 === 0 && number != 16 && number % 3 !== 0){
      console.log(number);
    }
  }
}
numberBetween();