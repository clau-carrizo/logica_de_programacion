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

function calcularTotal(precio, cantidad) {
  return precio * cantidad;
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

function sumar(...numeros) {
    return numeros.reduce((a, b) => a + b, 0);
}
//--------------------------------------------------------------
// Funciones con un Número Variable de Argumentos con Palabra Clave (Rest Parameters con objetos)
/* 
Funciones que aceptan un número variable de argumentos como propiedades de un objeto.
Para manejar configuraciones flexibles.
• Usa objetos para manejar configuraciones flexibles. Esto hace que el código sea más legible y mantenible
*/

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














