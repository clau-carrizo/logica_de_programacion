// Recursividad innecesaria porque esto es más optimo con un Bucle

function funcionRecursiva(number) {
  // Caso Base - Condición
  if (number === 0) {
      return;
    }
  // Imprime el numero actual
  console.log(number);
  

  //Caso Recursivo - Llama a la función con el number decreciente
  funcionRecursiva(number - 1);
}
  // Llamo a la función con el numero elegido
funcionRecursiva(100);

// ---------------------------------------------------------------
// CALCULAR FACTORIAL

function factorial(n) {
  if (n < 0) return 'Los números negativos no son válidos';
  if (n === 0 && 1) return 1; // Caso base
  else{
    return n * factorial(n - 1); // Caso recursivo
  }
}

console.log(factorial(-1));//120

// ---------------------------------------------------------------
// FIBONACCI 

function fibonacciRecursivo(n) {
  // Caso base: los primeros dos números de la sucesión
  if (n <= 0){
    console.log('La posición debe ser mayor que 0');
    return 0
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1
  }

  // Llamada recursiva
  // Calcular el número de fibonacci en esa posición
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
  }

// Ejemplo de uso
const posicion = 7;
console.log(`El valor en la posición ${posicion} de la sucesión de Fibonacci es: ${fibonacciRecursivo(posicion)}`);

