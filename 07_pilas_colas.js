
// PILA / Stack (LIFO)
// En JS, se puede utilizar un array para simular una pila.

// Crear una pila vacía
let stack = [];

// Agregar elementos a la pila (push)
stack.push('elemento1');
stack.push('elemento2');
stack.push('elemento3');
console.log(stack); // [ 'elemento1', 'elemento2', 'elemento3' ]


// Remover elemento en la cima de la pila (pop)
let ultimoElemento = stack.pop();

console.log(stack); // [ 'elemento1', 'elemento2' ]
// Recupero el elemento eliminado en 'ultimoElemento'
console.log(ultimoElemento); // elemento3
console.log(stack);// [ 'elemento1', 'elemento2' ]

//-----------------------------------------------------------

// COLA / Queue (FIFO)

// Crear una cola vacía
let queue = [];

// Agregar elementos a la cola (enqueue) encolar
queue.push('elemento1');
queue.push('elemento2');
queue.push('elemento3');

// pop - funciona como pila
// console.log(queue.pop()); // elemento3

// Remover elementos de la cola (dequeue) desencolar
let primerElemento = queue.shift(); 

console.log(queue); // [ 'elemento1', 'elemento2', 'elemento3' ]
console.log(primerElemento); // 'elemento1'


// Navegador 
function webNavigation() {
  // Inicializamos un stack (pila) para almacenar las URLs
  let stack = [];

  while (true) {
    // Pedimos al usuario que ingrese una acción
    let action = prompt("Añade una URL o interactúa con palabras adelante/atrás/salir:");

    // Si el usuario quiere salir, terminamos el programa
    if (action === "salir") {
      alert("Saliendo del navegador web.");
      break;
    }
    // Si el usuario quiere ir adelante, no hacemos nada (se puede implementar más lógica aquí)
    else if (action === "adelante") {
      // Aquí podrías implementar la lógica para avanzar a la siguiente URL
      alert("Funcionalidad 'adelante' no implementada.");
    }
    // Si el usuario quiere ir atrás, eliminamos la última URL del stack
    else if (action === "atrás") {
      stack.pop();
      // Si el usuario ingresa una URL, la añadimos al stack
    } else {
      stack.push(action);
    }
    // Mostramos la URL actual o un mensaje si no hay ninguna
    if (stack.length > 0) {
      alert(`Has navegado a la web: ${stack[stack.length - 1]}.`);
    } else {
      alert("Estas en la página inicio.");
    }
  }
}
// webNavigation()

function shared_printed() {
  queue = [];

  while (true) {
    action = prompt('Añadir un documento o selecciona imprimir / salir:');

    if (action === "salir") {
      alert("Saliendo de la impresora.");
      break;

    } else if (action === 'imprimir') {
      if (queue.length <= 0) {
        alert('La impresora está vacía, introduce un archivo')
      } else{
        const queueImprimir = queue.shift(0)
        alert(`Imprimiendo: ${queueImprimir}`);
      }

    }else{ queue.push(action)
        alert(`Cola de impresión: ${queue}`);
      }
    }
  }

// shared_printed();


function suma(n1,n2){
  n1 = prompt.parseInt('Ingrese un número');
  n2 = prompt.parseInt('Ingrese otro número');
  const total = n1 + n2;
  alert(total);
}

suma();

// Anonima
let Rectangulos = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};

console.log(Rectangulos.name);
// output: "Rectangulo"

// Nombrada
let Rectangulo = class Rectangulo2 {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};
console.log(Rectangulo.name);
// output: "Rectangulo2"

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal('Buddy');
dog.speak(); // Output: Buddy makes a sound.
