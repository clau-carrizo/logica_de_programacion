// Tipos de datos por valor 
a = 10;
b = a;
// b = 20;
a = 30;

console.log(a);
console.log(b);

// Tipos de datos por referencia
// (heredan su posición en memoria)

// Definimos un array a con dos elementos
a = [10, 20];

// Asignamos la referencia del array a a la variable b
b = a;

// Agregamos un nuevo elemento (30) al final del array b
// Esto también afecta a a, ya que ambas variables apuntan al mismo array en memoria
b.push(30);

// La línea comentada a continuación no se ejecuta, pero si se descomentara, 
// b se asignaría a un nuevo array [30, 40], lo que rompería la referencia con a.
// b = [30, 40]; // Esto haría que b apunte a un nuevo array, pero a seguiría siendo [10, 20, 30]

// Imprimimos el contenido del array a
console.log(a); // Esto mostrará [10, 20, 30]

// Imprimimos el contenido del array b
console.log(b); // Esto también mostrará [10, 20, 30] porque b es una referencia al mismo array que a


// Funciones con datos por valor

my_num_c = 10;

function my_num_func(my_num){
  my_int = 20;
  
  console.log(my_num); 
}

my_num_func(my_num_c)
console.log(my_num_c);


// Funciones con datos por referencia PUNTEROS

// Definimos un array inicial con dos elementos
my_array_c = [10, 20];

// Definimos la función que recibe un array como parámetro
function my_array_func(my_array) {
  
  // Agregamos un nuevo elemento (30) al final del array recibido
  my_array.push(30);

  // Asignamos la referencia de my_array a una nueva variable my_array_d
  my_array_d = my_array;

  // Agregamos otro elemento (40) al array a través de my_array_d
  my_array_d.push(40);

  // Imprimimos el contenido del array my_array después de las modificaciones
  console.log(my_array); // Esto mostrará [10, 20, 30, 40]

  // Imprimimos el contenido de my_array_d, que es la misma referencia que my_array
  console.log(my_array_d); // Esto también mostrará [10, 20, 30, 40]
}

// Llamamos a la función con my_array_c como argumento
my_array_func(my_array_c);

// Imprimimos el contenido del array original my_array_c para ver si ha cambiado
console.log(my_array_c); // Esto mostrará [10, 20, 30, 40]



// Ejercicio 

// Por Valor 

function porValor(a, b) {
  temp = a; // Guardamos el valor de a en temp
  a = b;    // Asignamos el valor de b a a
  b = temp; // Asignamos el valor guardado en temp (originalmente a) a b
  
  return [a, b]; // Retornamos los nuevos valores de a y b
}

c = 10; // Valor original de c
d = 20; // Valor original de d

let [e, f] = porValor(c, d); // Llamamos a la función porValor con c y d

console.log("Valores originales:");
console.log("c =", c); // Imprime 10
console.log("d =", d); // Imprime 20

console.log("\nNuevos valores:");
console.log("e =", e); // Imprime 20
console.log("f =", f); // Imprime 10

// Por Referencia
function porRef(arr1, arr2) {
  // Intercambiamos las referencias de los arrays
  let temp = arr1; // Guardamos la referencia de arr1 en temp
  arr1 = arr2;     // Asignamos arr2 a arr1
  arr2 = temp;     // Asignamos la referencia guardada en temp a arr2
  
  return [arr1, arr2]; // Retornamos las nuevas referencias
}

let c = [10, 20]; // Array c
let d = [30, 40]; // Array d

let [e, f] = porRef(c, d); // Llamamos a la función y desestructuramos el resultado

console.log("Valores originales:");
console.log("c =", c); // Imprime el array original c [10, 20]
console.log("d =", d); // Imprime el array original d [30, 40]

console.log("\nNuevos valores:");
console.log("e =", e); // Imprime el nuevo valor de e (referencia a d) [30, 40]
console.log("f =", f); // Imprime el nuevo valor de f (referencia a c) [10, 20]




