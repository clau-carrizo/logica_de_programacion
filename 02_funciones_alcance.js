//-------------------------------------------------------

// Funciones básicas = Funciones definidas por el usuario

//-------------------------------------------------------

// *** TIPOS DE FUNCIONES ***
/*
Funciones con parámetros - mas de un parámetro
valor por defecto 
con retorno - sin retorno 
se puede designar el orden del posicionamiento de los parámetros
*/


//----------------------------------------------

// *** FORMA DE USO DE FUNCIONES ***

//----------------------------------------------

// Simple

function greet() {
  console.log('Hola, JavaScript');
}

greet();

// Con retorno

function return_greet(){
  return('Hola, JavaScript ♥!')
}

greet = return_greet();// guardo la Fn dentro de una variable
console.log(greet);
console.log(return_greet());// imprime directamente la Fn

// Con un argumento

function arg_greet(name){
  console.log(`Hola, ${name}`);
}

arg_greet('Shazan!');

//Con varios argumentos 

function args_greet(greet, name) {
  console.log(`${greet}, ${name}`);
}

args_greet("Hi", "Clau")
args_greet(name = "Clau", greet = "Hi") // cambiando la posición 

// Con argumento predeterminado

function default_arg_greet(name = 'JS') {
  console.log(`Hola, ${name} !`);
}

default_arg_greet('Claus');// Hola, Claus !
default_arg_greet();// Hola, JS !

// Con argumentos y return   

function return_args_greet(greet, name) {

  return`${greet}, ${name}!`;
}

console.log(return_args_greet("Hi", "Claudita"));

 ///////////////////////////////////////////////////

// *** MULTIPLE RETORNO
// En JavaScript, no existe un mecanismo nativo para devolver múltiples valores, 
// se puede emular utilizando ARRAYS U OBJETOS

// Con retorno de varios valores

//*** Usando un array: 

function multiple_return_greet() {
  return ['Hola', 'JavaScript'];
}

const[greet, name] = multiple_return_greet();
console.log(greet); //  Hola
console.log(name);   //  JavaScript 
console.log(name, greet);   //  JavaScript Hola 
console.log(multiple_return_greet());   // [ 'Hola', 'JavaScript' ]

//*** Usando un objeto:

function multiple_return_greet() {
  return { greet: 'Hola', name: 'JavaScript' };
}

const { greet, name } = multiple_return_greet();
console.log(greet);  // Hola
console.log(name);   // JavaScript

// las siguientes 2 son habituales de phyton 

//1. Con un número variable de argumentos

function variable_arg_greet(...names) {
  for (let name of names) {
    console.log(`Hola, ${name} !`);
  }
}

variable_arg_greet('Monica', 'Claudia', 'Carrizo'); //argumentos separados por coma (,)

//2. Con un número variable de argumentos con palabra clave

function variable_key_arg_greet(names) {
  for (const key in names) {
    if (names.hasOwnProperty(key)) { //hasOwnProperty es un método que evita iterar sobre prop heredadas
      console.log(`${names[key]} (${key})!`);
    }
  }
}

variable_key_arg_greet({
  language: "Js",
  name: "Claudia",
  alias: "Clau",
  age: 36
});

//----------------------------------------------------
// *** CLOSERS(cierre)*** 
//"Un closure permite que una función acceda a      variables de un ámbito contenedor(scope)."

// funciones dentro de otras funciones

function func_externa() { //1 llama a 2
  function func_interna() { // 3 ejecuta
    console.log('Función interna: Hola, Js');
  }
  func_interna(); //2 llama a 3
}

func_externa(); // ejecuto 1

//--------------------------------------------------------------

// *** FUNCIONES DEL LENGUAJE (BUILT-IN *biltin)  ***
// Métodos predeterminados del lenguaje JS

console.log('Claudia'.length);
console.log(typeof 'Claudia');
console.log('Claudia'.toUpperCase());  //modifica el elemento 

//etc

//---------------------------------------------------------------
// *** SCOPE ***

// Variables locales y globales

global_var = 'JavaScript'

function hello_Js() {
  local_var = 'Hi'
  console.log(`${local_var}, ${global_var}!`);
}

console.log(global_var);
//console.log(local_var); //No se puede acceder desde fuera de la función

hello_Js();

//--------------------------------------------------------------------











const [greet4, name2] = multiple_return_greet() //Desestructuración del arreglo
console.log(greet4);
console.log(name2);
console.log(greet4, name2);









// Sin retorno
// Si una función no devuelve un valor explícitamente, JavaScript devuelve automáticamente undefined

let sinReturn = function () {
  console.log('Sin return');
}
sinReturn();


// Sin parámetros

let sinParametros = function () {
  return console.log('Sin parámetros');
};










// Auto-ejecutable

(function () {
  console.log('Auto-ejecutable');
})();

// Función por Declaración

function greet3() {
  return console.log('Hola Mundo');
}
greet();


//Función por Expresión 

function greet2() {
  return console.log('Hi');
};

greet2();


//Función Anónima

let anonima = function () {
  return console.log('Sin Nombre');
};

anonima();

//Función Flecha

let flecha = function () {
  return console.log('Función Flecha');
};

flecha();

//Callbacks

let funB = function () {
  return console.log('Función B ejecutada');
};

let funA = function (callback) {
  callback();
};
funA(funB);


//Ejercicio Extra

function mostrarNumeros(text1, text2) {
  count = 0;
  for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(text1 + ' ' + text2)
    } else if (number % 3 === 0) {
      console.log(text1)
    } else if (number % 5 === 0) {
      console.log(text2)
    }
    else {
      console.log(number)
      count +=1;
    }
  }
  return count;
}

console.log(mostrarNumeros("Fizz", "Buzz"));