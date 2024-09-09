// Funciones básicas = Funciones definidas por el usuario

// *** TIPOS DE FUNCIONES ***
/*
Funciones con 
parámetros - mas de un parámetro
valor por defecto 
con retorno - sin retorno 
se puede designar el orden del posicionamiento de los parámetros
*/

// Auto-ejecutable

(function () {
  console.log('Auto-ejecutable');
})();

// Función por Declaración

function greet() {
  return console.log('Hola Mundo');
}
greet();
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

//----------------------------------------------

// *** FORMA DE USO DE FUNCIONES ***


// Simple

function greet() {
  console.log('Hola, JavaScript');
}

greet();

// Con retorno

function return_greet() {
  return 'Hola, JavaScript';
};

console.log(return_greet());

// Sin retorno

let sinReturn = function () {
  console.log('Sin return');
}
sinReturn();

//Con uno o varios argumentos 

function args_greet(greet3, name) {
  console.log(`${greet3}, ${name}`);
}

args_greet("Hi", "Clau")
args_greet(name = "Clau", greet3 = "Hi")

// Con argumento predeterminado

function default_arg_greet(name = 'JS') {
  console.log(`Hola, ${name} !`);
}

default_arg_greet('Claus');
default_arg_greet();

// Sin parámetros

let sinParametros = function () {
  return console.log('Sin parámetros');
};

// Con argumentos y return   

function return_args_greet(greet, name) {

  return console.log(`${greet}, ${name}!`);
}

return_args_greet("Hi", "Claudita")


// Con retorno de varios valores

function multiple_return_greet() {
  return ['Hola', 'JavaScript'];
}

const [greet4, name2] = multiple_return_greet() //Desestructuración del arreglo
console.log(greet4);
console.log(name2);
console.log(greet4, name2);


// Con un número variable de argumentos

function variable_arg_greet(...names) {
  for (let name of names) {
    console.log(`Hola, ${name} !`);
  }
}

variable_arg_greet('Monica', 'Claudia', 'Carrizo');

// Con un número variable de argumentos con palabra clave

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
// *** CLOSERS ***

// funciones dentro de otras funciones

function func_externa() { //1 llama a 2
  function func_interna() { // 3 ejecuta
    console.log('Función interna: Hola, Js');
  }
  func_interna(); //2 llama a 3
}

func_externa(); // ejecuto 1

//--------------------------------------------------------------

// *** FUNCIONES DEL LENGUAJE (BUILT-IN) ***

console.log('Claudia'.length);
console.log(typeof 'Claudia');
console.log('Claudia'.toUpperCase());  //modifica el elemento 

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