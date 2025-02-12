//-------------------------------------------------------

// Funciones básicas = Funciones definidas por el usuario

//-------------------------------------------------------

// *** TIPOS DE FUNCIONES ***
/*
autoejecutable
declarativas
expresion
anonima
flecha
callbacks
simple
retorno
con argumento
con varios argumentos
con argumento predeterminado
con argumento y return
multiple retorno
con un numero variable de argumentos
con un numero variable de argumentos con palabra clave
closers
scope
*///--------------------------------------------------------------

<<<<<<< HEAD
// Auto-ejecutable
/*
Funciones que se ejecutan inmediatamente después de ser definidas.
Uso: Útil para crear un ámbito local y evitar contaminar el ámbito global.
• Úsalas para encapsular código y evitar la contaminación del ámbito global. Son ideales para inicializar módulos o librerías.
*/

(function() {
  console.log("Función autoejecutable");
})();
//--------------------------------------------------------------
// Función por Declaración
/*
Funciones definidas con la palabra clave function.
Uso: Son elevadas (hoisted), por lo que se pueden llamar antes de su declaración. 
• Úsalas cuando necesites que la función esté disponible en todo el ámbito (hoisting). Evita declarar funciones dentro de bloques condicionales, ya que puede llevar a comportamientos inesperados.
*/

function saludar() {
  console.log("Hola");
}

saludar();
//--------------------------------------------------------------
//Función por Expresión 
/*
Funciones asignadas a una variable.
Uso: No son elevadas, por lo que deben declararse antes de usarse.
• Úsalas cuando necesites asignar una función a una variable o pasar una función como argumento. Son más flexibles que las declarativas.
*/

// saludar(); ReferenceError: Cannot access 'saludar' before initialization 
const saludar = function() {
  console.log("Hola");
};
saludar(); //Hola
//--------------------------------------------------------------
//Función Anónima
/*
Funciones sin nombre.
Se usan como callbacks o en funciones de expresión.
• Úsalas como callbacks o en situaciones donde no necesites reutilizar la función. Evita usarlas si la lógica es compleja, ya que puede dificultar la legibilidad.
*/

setTimeout(function() {
  console.log("Función anónima");
}, 1000);
//--------------------------------------------------------------
//Funciones Flecha (Arrow Functions)
/* 
Funciones concisas con sintaxis de flecha (=>)
No tienen su propio this, por lo que son ideales para callbacks.
• Úsalas para funciones cortas y cuando no necesites un this propio. Evita usarlas como métodos de objetos si necesitas acceder al this del objeto.
*/

const saludar = () => console.log("Hola");
//--------------------------------------------------------------
// Callbacks
/*
Funciones pasadas como argumentos a otras funciones.
Para manejar operaciones asíncronas o eventos.
Usa callbacks para operaciones asíncronas, pero evita el "callback hell" (anidación excesiva) utilizando promesas o async/await.
*/

function procesar(callback) {
    callback();
=======

//----------------------------------------------

// *** FORMA DE USO DE FUNCIONES ***

//----------------------------------------------

// Simple

function greet() {
  console.log('Hola, JavaScript');
>>>>>>> ce1d6c9480abff056001b49aa689d24d73b9c1ef
}
procesar(() => console.log("Callback ejecutado"));
//--------------------------------------------------------------
// Funciones Simples
/*
Funciones básicas sin parámetros ni retorno.
Para tareas sencillas.
Manténlas con una sola responsabilidad (principio SOLID). Esto facilita las pruebas y el mantenimiento.
*/

function saludar() {
    console.log("Hola");
}
//--------------------------------------------------------------
// Funciones con Retorno
/*
Funciones que devuelven un valor usando return.
Para calcular y devolver resultados.
• Asegúrate de que el valor de retorno sea claro y coherente. Evita funciones que hagan demasiado (por ejemplo, modificar estado y retornar un valor).
*/

function sumar(a, b) {
    return a + b;
}
//--------------------------------------------------------------
// Funciones con Argumentos
/* 
Funciones que aceptan parámetros.
Para recibir datos externos.
• Usa nombres descriptivos para los parámetros. Evita funciones con demasiados argumentos (más de 3-4), ya que pueden ser difíciles de manejar.
*/

function saludar(nombre) {
    console.log("Hola, " + nombre);
}
//--------------------------------------------------------------
// Funciones con Varios Argumentos
/*
Funciones que aceptan múltiples parámetros.
Para manejar varios datos.
• Si una función requiere muchos argumentos, considera usar un objeto como parámetro para mejorar la legibilidad.
*/

function sumar(a, b, c) {
    return a + b + c;
}
//--------------------------------------------------------------
// Funciones con Argumento Predeterminado
/*
Funciones con valores predeterminados para sus parámetros.
Para evitar errores cuando no se pasan argumentos.
• Usa valores predeterminados para evitar errores cuando no se pasan argumentos. Asegúrate de que los valores predeterminados sean significativos.
*/

function saludar(nombre = "Invitado") {
    console.log("Hola, " + nombre);
}
//--------------------------------------------------------------
// Funciones con Argumento y Return
/*
Funciones que reciben argumentos y devuelven un valor.
Para procesar datos y devolver resultados.
• Separa la lógica de procesamiento de la lógica de retorno. Esto facilita las pruebas unitarias.
*/

<<<<<<< HEAD
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
=======
console.log(return_args_greet("Hi", "Claudita"));

 ///////////////////////////////////////////////////

// *** MULTIPLE RETORNO
// En JavaScript, no existe un mecanismo nativo para devolver múltiples valores, 
// se puede emular utilizando ARRAYS U OBJETOS

// Con retorno de varios valores

//*** Usando un array: 

function multiple_return_greet() {
  return ['Hola', 'JavaScript'];
>>>>>>> ce1d6c9480abff056001b49aa689d24d73b9c1ef
}
//--------------------------------------------------------------
// Funciones con Múltiple Retorno
/*
Funciones que devuelven varios valores (usando arrays u objetos).
Para retornar múltiples resultados.
• Si necesitas devolver múltiples valores, usa objetos o arrays para mantener la claridad.
*/

function calcular(a, b) {
    return [a + b, a - b];
}
//--------------------------------------------------------------
// Funciones con un Número Variable de Argumentos (Rest Parameters)
/*
Funciones que aceptan un número variable de argumentos usando ....
Para manejar una cantidad desconocida de parámetros.
• Asegúrate de documentar bien el uso de estos parámetros.
*/

<<<<<<< HEAD
function sumar(...numeros) {
    return numeros.reduce((a, b) => a + b, 0);
=======
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
>>>>>>> ce1d6c9480abff056001b49aa689d24d73b9c1ef
}
//--------------------------------------------------------------
// Funciones con un Número Variable de Argumentos con Palabra Clave (Rest Parameters con objetos)
/* 
Funciones que aceptan un número variable de argumentos como propiedades de un objeto.
Para manejar configuraciones flexibles.
• Usa objetos para manejar configuraciones flexibles. Esto hace que el código sea más legible y mantenible
*/

<<<<<<< HEAD
function configurar({ opcion1, opcion2, ...rest }) {
    console.log(opcion1, opcion2, rest);
}
//--------------------------------------------------------------
// Closures
/*
Funciones que recuerdan el ámbito en el que fueron creadas.
Para crear funciones con estado privado.
• Usa closures para crear funciones con estado privado o para implementar el patrón de módulo. Ten cuidado con el uso excesivo de memoria, ya que los closures retienen referencias a su ámbito.
*/

function contador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
//--------------------------------------------------------------
// Scope (Ámbito)
/*Definición: El contexto en el que las variables y funciones son accesibles.
• Entiende bien la diferencia entre ámbito global y local. Usa let y const en lugar de var para evitar problemas con el ámbito de bloque.
• Tipos:

Global: Accesible en todo el código.
Local: Accesible solo dentro de una función o bloque.
*/

let global = "Soy global";
function ejemplo() {
    let local = "Soy local";
    console.log(global); // Accesible
}
console.log(local); // Error: local no está definido
/*
//--------------------------------------------------------------
Tipo de Función            Uso Común	                          Ejemplo
Declarativa	Funciones      generales	function                  saludar() { ... }
Expresión	                 Asignar funciones a variables	      const saludar = function() { ... };
Flecha	                   Funciones concisas	                  const saludar = () => console.log("Hola");
Callback	                 Manejo de asincronía	                setTimeout(() => { ... }, 1000);
Autoejecutable	           Inicialización de módulos	          (function() { ... })();
Closures	                 Estado privado o módulos	            function crearContador() { ... }
Rest Parameters	           Argumentos variables	                function sumar(...numeros) { ... 
*/

//--------------------------------------------------------------
=======

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


>>>>>>> ce1d6c9480abff056001b49aa689d24d73b9c1ef
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














