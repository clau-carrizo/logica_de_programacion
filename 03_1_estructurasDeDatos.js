// ESTRUCTURA DE DATOS
//Son formas de organizar y almacenar información (datos) en una computadora, de manera que sean fáciles de acceder, modificar y gestionar
/* 
Primitivas: Tipos básicos como números, cadenas, booleanos.
Simples: Arrays y objetos para almacenar colecciones de datos.
Compuestas: Sets y Maps para manejar colecciones con características específicas.
Avanzadas: Pilas, colas, listas enlazadas, etc. Para manejar datos de manera más compleja.
Complejas: Grafos y árboles para representar relaciones jerárquicas o conexiones complejas.
Tiempo Real: WeakMap y WeakSet para manejar datos con consideraciones de memoria.
*/

// 1. ARRAYS
// Es una colección ordenada de elementos.
// Se accede a los elementos mediante índices numéricos.

// Creación de Arrays:
//===================

// Usando la sintaxis de corchetes
let array_frutas = ["manzana", "banana", "naranja"];

console.log(array_frutas[2]); //naranja

// Usando el constructor Array
let numeros = new Array(1, 2, 3, 4, 5);

console.log(numeros); //[ 1, 2, 3, 4, 5 ]
console.log(Array); //[ 1, 2, 3, 4, 5 ] [Function: Array]

//--------------------------------------------

//Agregar elementos al final push()
//===================

let frutas = ["manzana", "banana", "naranja"];
let new_frutas = frutas.push("orange");

console.log(frutas); // [ 'manzana', 'banana', 'naranja', 'orange' ]

//Agrega elementos al inicio unshift()
//==========================

let mas_frutas = frutas.unshift("fresas", "melon");
console.log(frutas); // [ 'fresas', 'melon', 'manzana', 'banana', 'naranja', 'orange' ]

//Agrega elementos en un indice especifico splice()
//========================================
/* 
El primer parámetro es el índice donde desea insertar el elemento.
El segundo parámetro es el número de elementos que desea eliminar.
El tercer parámetro es el elemento que desea insertar 
 */
let frutas = ["manzana", "banana", "naranja"];
let espacio_especifico_fruta = frutas.splice(2, 1, "SANDIA");
console.log(frutas); //[ 'manzana', 'banana', 'SANDIA' ]

//Eliminar el último elemento y devolverlo pop()
//========================================

let ultima_fruta = frutas.pop();
console.log(frutas); //[ 'manzana', 'banana', 'SANDIA' ]
console.log(ultima_fruta); // SANDIA

//Eliminar el primer elemento y devolverlo shift()
//========================================

let frutas = ["manzana", "banana", "naranja"];
let primera_fruta = frutas.shift();
console.log(frutas); // [ 'banana', 'naranja' ]

//Elimina elementos desde indice especifico y la cantidad splice()
//========================================

let frutas = ["manzana", "banana", "naranja"];
let eliminando_frutas = frutas.splice(0, 2);

console.log(frutas); //[ 'naranja' ]

//Modificar (actualizar) elementos desde su indice []
//========================================

let frutas = ["manzana", "banana", "naranja"];
frutas[0] = "peras";
console.log(frutas); //[ 'peras', 'banana', 'naranja' ]

//Ordenar los elementos sort() sistema por defecto
//========================================

let frutas = ["manzana", 1, 5, "z", "banana", 2, "naranja"];
frutas.sort();
console.log(frutas); //[ 1, 2, 5, 'banana', 'manzana', 'naranja', 'z' ]
console.log(typeof frutas); //object

//--------------------------------------------
// 2. OBJETOS
//--------------------------------------------

//Colección de pares clave-valor, donde las claves son strings y los valores pueden ser de cualquier tipo
// Se accede a los valores mediante sus claves.

// Creación de Objetos
//====================

//Objeto literal
const my_objecto = {
  nombre: "Claudia",
  valor: 10,
  ciudad: "Barranquilla",
};

console.log(my_objecto); //{ nombre: 'Claudia', valor: 10, ciudad: 'Barranquilla' }
console.log(typeof(my_objecto)); //object

//Constructor funcion
function Card(marca, modelo, anio){
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}
  const myCard = new Card('Toyota', 'Ranger', '2020');

console.log(myCard);// Car { marca: 'Toyota', modelo: 'Ranger', anio: '2020' }
console.log(typeof(myCard)); //object

//_________________________________
// Operaciones basicas con OBJETOS
//_________________________________

// Acceso a las propiedades: mediante anotacion de (.) o []
//=========================

const my_objecto = {
  nombre: "Claudia",
  valor: 10,
  ciudad: "Barranquilla",
};

console.log(my_objecto.nombre);//anotacion de punto
console.log(my_objecto['nombre']);//anotacion de corchete

// Agregar propiedades: mediante anotacion de (.) o []
//====================

my_objecto.newPropiedad = 'new value';
my_objecto['anotherPropiedad'] = 123;

console.log(my_objecto);

// Modificar propiedad
//===================

my_objecto.nombre = 'Mónica';

console.log(my_objecto);

// Eliminar propiedad delete
//===================

delete my_objecto.anotherPropiedad

console.log(my_objecto);

// Iteración sobre propiedades for...in
//===================

const my_objecto = {
  nombre: "Claudia",
  valor: 10,
  ciudad: "Barranquilla",
};

for (let key in my_objecto) {
  console.log(key, my_objecto[key]);
}

// Copiar Objetos con spread() o assing();
//=======================================

const newObjeto = {...my_objecto}; 
const anotherObjeto = Object.assign({}, my_objecto);

console.log(newObjeto); //{ nombre: 'Claudia', valor: 10, ciudad: 'Barranquilla' }
console.log(anotherObjeto); // { nombre: 'Claudia', valor: 10, ciudad: 'Barranquilla' }

//====================
// Métodos de Objetos
//====================
//Los OBJETOS son pares de clave-valor, los valores pueden ser propiedades o métodos.
// Los métodos permiten a los objetos "actuar"

Object.assign()
//Copia los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino
texto
Object.create()
//Crea un nuevo objeto, usando un objeto existente como prototipo
Object.defineProperty()
//Actualiza una propiedad de un objeto, permitiendo un control preciso sobre su configuración
Object.defineProperties()
//Agrega múltiples propiedades a un objeto
Object.entries()
//Devuelve un array de arrays, donde cada sub-array contiene la clave y el valor de las propiedades enumerables de un objeto
Object.freeze()
// Impide que se agreguen, eliminen o modifiquen las propiedades de un objeto
Object.keys()
//Devuelve un array con los nombres de todas las propiedades enumerables de un objeto
Object.values()
//Devuelve un array con los valores de todas las propiedades enumerables de un objeto

// PROTOTYPE Object.prototype
//Los objetos también pueden tener métodos de instancia, disponibles a través 

Object.prototype.hasOwnProperty()
//Comprueba si un objeto tiene una propiedad específica como propiedad directa, en lugar de heredarla
Object.prototype.toString()
//Devuelve una representación de cadena del objeto



















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
    return this.items.length
      ? this.items[this.items.length - 1]
      : "No elements in Stack"; // Devuelve el último elemento sin eliminarlo
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
console.log(stack.pop()); // 2
console.log(stack.peek()); // 1
console.log(stack.size()); // 1
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
// es una colección de valores únicos.
// No permiten valores duplicados y son útiles para almacenar elementos sin duplicación.

const mySet = new Set();

// Agregar elementos
mySet.add(1);
mySet.add(2);
mySet.add(2); // No se agregará, ya que es un duplicado
console.log(mySet.size); //2


mySet.add(value); //Añade un nuevo elemento 
mySet.delete(value); //Elimina un elemento específico 
mySet.has(value); //Comprueba si un valor está presente 
mySet.clear(); //Elimina todos los elementos 
mySet.size; //Devuelve el número de elementos 
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

