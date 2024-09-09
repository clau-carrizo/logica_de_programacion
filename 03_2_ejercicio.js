/* ESTRUCTURA DE DATOS -- ITERABLES

Los iterables permiten la manipulación y recorrido de colecciones de datos de manera eficiente. 
Los tipos integrados (NATIVOS) Array, String, Map, y Set 
mientras que los desarrolladores pueden crear sus propios iterables personalizados mediante la implementación del método Symbol.iterator
*/

// ARRAYS
let frutasQueMeGustan = ['mango', 'fresa', 'papaya'];

// Iteración de elementos
console.log("Iteración de elementos:");

// Usando un bucle for
for (let i = 0; i < frutasQueMeGustan.length; i++) {
  console.log(frutasQueMeGustan[i]);
}

// Usando forEach
frutasQueMeGustan.forEach((elemento) => {
  console.log(elemento);
});

// Usando map (aunque no se recomienda solo para imprimir)
frutasQueMeGustan.map((elemento) => {
  console.log(elemento);
});

/*  Métodos Incorporados para manipular arreglos.

push(): Agrega uno o más elementos al final del arreglo.
pop(): Elimina el último elemento del arreglo y lo devuelve.
shift(): Elimina el primer elemento del arreglo y lo devuelve.
unshift(): Agrega uno o más elementos al inicio del arreglo.
slice(): Crea una copia superficial de una porción del arreglo.
splice(): Cambia el contenido de un arreglo eliminando o reemplazando elementos existentes y/o agregando nuevos elementos.
fill(): Rellena todos los elementos de un arreglo desde un índice inicial hasta un índice final con un valor estático.
indexOf(): Devuelve el primer índice en el que se puede encontrar un elemento dado en el arreglo, o -1 si el elemento no está presente.
lastIndexOf(): Devuelve el último índice en el que se puede encontrar un elemento dado en el arreglo, o -1 si el elemento no está presente.
includes(): Determina si un arreglo incluye un determinado elemento, devolviendo true o false según corresponda.
find(): Devuelve el valor del primer elemento del arreglo que cumple la función de prueba proporcionada.
findIndex(): Devuelve el índice del primer elemento del arreglo que cumple la función de prueba proporcionada.
findLast(): Devuelve el valor del último elemento del arreglo que cumple la función de prueba proporcionada.
findLastIndex(): Devuelve el índice del último elemento del arreglo que cumple la función de prueba proporcionada.
sort(): Devuelve el arreglo ordenado.
concat(): Se usa para unir dos o más arreglos y devuelve una nueva matriz.
join(): Une todos los elementos de un arreglo en una cadena.
flat(): Crea una nueva matriz con todos los elementos de sub-arreglo concatenados en ella hasta un nivel especificado.

/* Métodos de Iteración y Transformación
No modifican el array original

map(): Transforma cada elemento de un arreglo y devuelve un nuevo arreglo con los resultados.
filter(): Filtra los elementos de un arreglo según una condición y devuelve un nuevo arreglo con los elementos que cumplen esa condición.
reduce(): Acumula los valores de un arreglo en un único valor mediante una función reductora.

*/
// Inserción de elementos
console.log("\nInserción de elementos:");
frutasQueMeGustan.push('plátano'); // Agrega al final
frutasQueMeGustan.unshift('aguacate'); // Agrega al inicio
frutasQueMeGustan.splice(2, 1, 'uva'); // Reemplaza el elemento en la posición 2
console.log(frutasQueMeGustan);

// Borrado de elementos
console.log("\nBorrado de elementos:");
frutasQueMeGustan.pop(); // Elimina el último elemento
frutasQueMeGustan.shift(); // Elimina el primer elemento
frutasQueMeGustan.splice(1, 1); // Elimina el elemento en la posición 1
console.log(frutasQueMeGustan);

// Actualización de elementos
console.log("\nActualización de elementos:");
frutasQueMeGustan[2] = 'piña'; // Actualiza el elemento en la posición 2
frutasQueMeGustan.splice(1, 1, 'manzana'); // Reemplaza el elemento en la posición 1
frutasQueMeGustan.fill('tamarindo', 2, 3); // Llena con 'tamarindo' desde la posición 2 hasta la 3
console.log(frutasQueMeGustan);

// Búsqueda de elementos
console.log("\nBúsqueda de elementos:");
console.log(frutasQueMeGustan);
console.log(frutasQueMeGustan.indexOf('manzana')); // Encuentra el índice de 'manzana'

frutasQueMeGustan.push('manzana'); // Agrega otra 'manzana'
console.log(frutasQueMeGustan.lastIndexOf('manzana')); // Encuentra el último índice de 'manzana'

console.log(frutasQueMeGustan.includes('manzana')); // Verifica si 'manzana' está en el arreglo
console.log(frutasQueMeGustan.includes('naranja')); // Verifica si 'naranja' está en el arreglo

console.log(
  frutasQueMeGustan.find((valor) => {
    return valor === 'tamarindo'; // Busca 'tamarindo'
  })
);

console.log(
  frutasQueMeGustan.findIndex((valor) => {
    return valor === 'manzana'; // Encuentra el índice de 'manzana'
  })
);

console.log(
  frutasQueMeGustan.findLast((valor) => {
    return valor === 'manzana'; // Busca 'manzana' desde el final
  })
);

console.log(
  frutasQueMeGustan.findLastIndex((valor) => {
    return valor === 'manzana'; // Encuentra el último índice de 'manzana'
  })
);


// - Ordenar Arrays -
let nuevoArray = [12, 10, 34, 25, 82];
console.log("Array original:", nuevoArray);

// Ordenar de menor a mayor
nuevoArray.sort((a, b) => a - b); 
console.log("Ordenado de menor a mayor:", nuevoArray);

let nuevoArray2 = [12, 10, 34, 25, 82];
console.log("Array original 2:", nuevoArray2);

// Ordenar de mayor a menor
nuevoArray2.sort((a, b) => b - a);
console.log("Ordenado de mayor a menor:", nuevoArray2);

// - Concatenación -
console.log("Concatenación de arrays:", nuevoArray.concat(nuevoArray2));

// - Otros -
console.log("Frutas unidas:", frutasQueMeGustan.join(' '));

let nuevoArray3 = [
  [1, 3],
  [23, 43],
  [21, 67],
  [12, 23],
];

// Aplanar el array
console.log("Array aplanado:", nuevoArray3.flat());


/* SETS  
son estructuras de datos que mantienen una colección de valores únicos(ignora los duplicados) de cualquier tipo.
No es ordenado.
Excelentes para guardar y recorrer datos.
Pero no para buscar datos.
realiza operaciones de conjunto como unión, intersección y diferencia
*/
const animales = new Set(['gallina', 'foca', 'lagarto']);
console.log("Set de animales:", animales);

// - Inserción -
animales.add('gato');
animales.add('perro');
animales.add('araña');
animales.add('gato'); // No se ejecuta debido a que los sets no admiten duplicados
console.log("Set después de inserciones:", animales);

// - Borrado -
animales.delete('lagarto');
animales.delete('perro');
console.log("Set después de borrados:", animales);

// - Ordenado -
// Los sets no tienen índice, por lo que no es posible ordenarlos sin convertirlos en un array
const miNuevoSet = new Set([12, 23, 45, 87, 43, 67, 12, 87]);
console.log("Nuevo set:", miNuevoSet);

let arrayDelSet = Array.from(miNuevoSet).sort((a, b) => a - b);
console.log("Array ordenado desde el set:", arrayDelSet);

// - Otros -
console.log("¿El set tiene 'foca'?", animales.has('foca'));

animales.size;
console.log("Cuál es el número de elementos del set? " ,animales);

animales.clear();
console.log("Set después de limpiar:", animales);

/* MAPS 
No es Ordenado  
crea un nuevo array aplicando una función a cada elemento del array original.
*/
const miMap = new Map([
  ['clave1', 'valor1'],
  ['uno', 1],
  ['dos', 2],
]);
console.log("Mapa original:", miMap);

/*El método map() toma una función callback como argumento y la aplica a cada elemento del array. 
La función callback recibe tres argumentos:
element: El elemento actual del array sobre el que se está iterando.
index (opcional): El índice del elemento actual.
array (opcional): El array original sobre el que se está iterando.
*/

// - Iteración de elementos -
miMap.forEach((element) => {
  console.log("Elemento del mapa:", element);
});

// - Inserción -
miMap.set('nombre', 'Ric');
console.log("Mapa después de inserción:", miMap);

// - Actualización -
miMap.set('nombre', 'Josue'); // Se utiliza el mismo método
console.log("Mapa después de actualización:", miMap);

// - Borrado -
miMap.delete('dos'); // Elimina una clave-valor existente
console.log("Mapa después de borrado:", miMap);

// - Otras operaciones -
console.log("Valor de 'nombre':", miMap.get('nombre')); // Obtiene el valor de una clave
console.log("Valor de 'uno':", miMap.get('uno'));

console.log(`Mi map contiene la clave 'dos': ${miMap.has('dos')}`); // Verifica si el map contiene una clave
console.log("Tamaño del mapa:", miMap.size); // Indica la cantidad de claves-valor


// OBJETOS
const persona = {
  nombre: 'Ricardo',
  edad: 21,
  sexo: 'masculino',
  casado: false,
  estatura: 159,
};
console.log("Objeto persona:", persona);

// - Inserción -
persona.pasatiempos = ['escribir', 'dibujar', 'leer'];
console.log("Objeto persona después de inserción:", persona);

// - Borrado -
delete persona.estatura;
console.log("Objeto persona después de borrar 'estatura':", persona);

// - Actualización -
persona.pasatiempos[1] = 'escuchar música';
persona.edad = 22;
console.log("Objeto persona después de actualizaciones:", persona);

// Obtener claves y valores
console.log("Claves del objeto persona:", Object.keys(persona)); // Devuelve un array con las claves del objeto
console.log("Valores del objeto persona:", Object.values(persona)); // Devuelve un array con los valores del objeto

// Copia del objeto
const copiaDePersona = Object.assign({}, persona);
copiaDePersona.nombre = 'Luis';
console.log("Copia del objeto persona:", copiaDePersona);
