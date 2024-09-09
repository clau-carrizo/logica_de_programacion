// ESTRUCTURA DE DATOS

// 1. ARRAYS
// Es una colección ordenada de elementos. 
// Se accede a los elementos mediante índices numéricos. 

// Los arrays se pueden crear de dos maneras:

// Usando la sintaxis de corchetes
let frutas = ["manzana", "banana", "naranja"];      

console.log(frutas[2]);

// Usando el constructor Array
let numeros = new Array(1, 2, 3, 4, 5);

//--------------------------------------------

// 2. OBJETOS
// Colección de pares clave-valor, donde las claves son strings y los valores pueden ser de cualquier tipo
// Se accede a los valores mediante sus claves.
let persona = {
  nombre: 'Claudia',
  edad: 50,
  ciudad: 'Barranquilla'
};

console.log(persona.ciudad);

//--------------------------------------------

/*  3. STACKS (Pilas)
Colecciones de elementos que siguen el principio de: 
"último en entrar, primero en salir" (LIFO). 
Se pueden implementar utilizando arreglos. 

Las operaciones principales son:

push(element): Añade un elemento al tope de la pila.
pop(): Elimina y devuelve el elemento en el tope de la pila.
peek(): Devuelve el elemento en el tope de la pila sin eliminarlo.
isEmpty(): Devuelve true si la pila está vacía, de lo contrario false.
size(): Devuelve el número de elementos en la pila.
*/
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element); // Agrega un elemento a la pila
  }

  pop() {
    return this.items.length ? this.items.pop() : "Underflow"; // Elimina y devuelve el último elemento o muestra un mensaje si está vacía
  }

  peek() {
    return this.items.length ? this.items[this.items.length - 1] : "No elements in Stack"; // Devuelve el último elemento sin eliminarlo
  }

  isEmpty() {
    return this.items.length === 0; // Verifica si la pila está vacía
  }

  size() {
    return this.items.length; // Devuelve el número de elementos en la pila
  }
}

// Uso de la clase Stack
let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // 2
console.log(stack.pop());   // 2
console.log(stack.peek());   // 1
console.log(stack.size());   // 1
console.log(stack.isEmpty()); // false

//--------------------------------------------

// 4. QUEUES (Colas) 

/* 
Colecciones de elementos que siguen el principio de 
"primero en entrar, primero en salir" (FIFO). 
Se pueden implementar utilizando arreglos.

Las operaciones principales son:

  enqueue(element): Añade un elemento al final de la cola.
  dequeue(): Elimina y devuelve el elemento en el frente de la cola.
  front(): Devuelve el elemento en el frente de la cola sin eliminarlo.
  isEmpty(): Devuelve true si la cola está vacía, de lo contrario false.
  size(): Devuelve el número de elementos en la cola.
*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); // Agregar elemento
  }

  dequeue() {
    return this.items.shift(); // Eliminar y devolver el primer elemento
  }

  front() {
    return this.items[0]; // Devolver el primer elemento sin eliminarlo
  }
}

// Uso de la cola
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.front()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2

//--------------------------------------------

// 5. SETS (conjuntos) 
//es una colección de valores únicos. 
// No permiten valores duplicados y son útiles para almacenar elementos sin duplicación.

let conjunto = new Set();

// Agregar elementos
conjunto.add(1);
conjunto.add(2);
conjunto.add(2); // No se agregará, ya que es un duplicado

//--------------------------------------------

// 6. Maps es una colección de pares clave-valor
// donde las claves pueden ser de cualquier tipo de dato.

let mapa = new Map();

// Agregar pares clave-valor
mapa.set("nombre", "Ana");
mapa.set("edad", 25);
mapa.set("ciudad", "Barranquilla");

console.log(mapa);

//--------------------------------------------
/*
7. Listas Enlazadas (Linked Lists): 
No son una estructura de datos nativa en JavaScript, 
pero se pueden implementar manualmente. 
Son secuencias de nodos, donde cada nodo contiene un valor y una referencia al siguiente nodo.

8. Árboles (Trees): 
Estructuras de datos jerárquicas, compuestas por nodos conectados. 
No son nativas en JavaScript, pero se pueden implementar manualmente.

9. Grafos (Graphs): Colecciones de nodos conectados por bordes. No son nativas en JavaScript, pero se pueden implementar manualmente utilizando objetos o matrices.
*/


const hora = { key: 12 };
hora.key = 24;
console.log(hora);

