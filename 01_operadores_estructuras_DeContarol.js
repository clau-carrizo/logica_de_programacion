// *** Tipos de operadores *** 

// Operadores Aritméticos 
// realizan operaciones matemáticas básicas
//-----------------------------------------

// suma
// resta
// multiplicación
// division

// modulo
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

// Operadores de Asignación
// asignan valores a variables y actualizan sus valores
//-----------------------------------------------------

// =  asignación simple
// += asignación con suma
// -= asignación con resta
// *= asignación con multiplicación
// /= asignación con división
// %= asignación con modulo

// Operadores de Comparación
// comparan dos valores y devuelven un valor booleano
//---------------------------------------------------

// ==   Igual a (comparación de valor)
// === Igual a (comparación de valor y tipo)
// !=  No igual a (comparación de valor)
// !== No igual a (comparación de valor y tipo)
// >   Mayor que
// <   Menor que
// >=  Mayor o igual que
// <=  Menor o igual que

// Operadores Lógicos
// Se utilizan para combinar valores booleanos
//--------------------------------------------

// && Y lógico
// || O lógico
// !  Negación lógica

// Operadores de Incremento/Decremento
// Aumentan o disminuyen el valor de una variable en uno

// ++  Incremento
// --  Decremento

//Operadores de Bit a Bit (Bitwise)
// Manipulan los bits de los números
//----------------------------------

// & AND a nivel de bits
// | OR a nivel de bits
// ^ XOR a nivel de bits
// ~ NOT a nivel de bits
// << Desplazamiento a la izquierda
// >> Desplazamiento a la derecha
// >>> Desplazamiento a la derecha sin signo


// Operadores Especiales
//----------------------

// typeof: Devuelve el tipo de dato de una variable.
// instanceof: Verifica si un objeto es una instancia de una clase o constructor.
// void: Evalúa una expresión y devuelve undefined.
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