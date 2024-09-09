// Operaciones con STRINGS

// - Concatenación de cadenas**: 

let str1 = "Hola";
let str2 = "Mundo";
let result = str1 + " " + str2; // "Hola Mundo"

// - Interpolación con Template Literals ( `` ) 

let str = "hola";
let str1 = "javascript";
console.log(`Saludo: ${str}, Lenguaje: ${str1}`);

// - Obtener la longitud de una cadena: 

let str = "JavaScript";
let length = str.length; // 10

// - Acceder a un carácter específico: 

let str = "JavaScript";
let char = str.charAt(0); // "J"
let char2 = str[0]; // "J"
let char3 = str[0] + str[1] + str[2] + str[3]; // Java

// - Convertir a mayúsculas o minúsculas: 

let str = "JavaScript";
let upper = str.toUpperCase(); // "JAVASCRIPT"
let lower = str.toLowerCase(); // "javascript"

// - Extraer una subcadena (una porción): 

let str = "JavaScript";
let substr = str.substring(0, 4); // "Java"
let substr2 = str.slice(0, 4); // "Java"

// - Reemplazar parte de una cadena: 

let str = "Hola Mundo";
let newStr = str.replace("Mundo", "JavaScript"); // "Hola JavaScript"

// - Dividir un string en un array 

let str = "Hola, Mundo, JavaScript";
let array = str.split(", ");
console.log(array); // ["Hola", "Mundo", "JavaScript"]

//  Convierte un String en un Array de caracteres: SPLIT
let str = 'JavaScript';
let array = str.split('');
console.log(array);
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// - Convertir un String en un array de caracteres: FROM

let str = "JavaScript";
let charArray = Array.from(str);
console.log(charArray);
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// Invertir un Array 
let array = ['a', 'b', 'c'];
console.log(array.reverse());// ['c', 'b', 'a']

// - Buscar al principio y al final: 

let str = "JavaScript";
let comienza = str.startsWith('Java'); //true
let termina = str.endsWith('Script'); //true

// - Buscar por posición:

let str = "JavaScript";
let str1 = str.indexOf('v'); //2
let str2 = str.indexOf('s'); //-1

// - Buscar una sub-cadena: 

let str = "JavaScript";
let index = str.indexOf("Script"); // 4
let lastIndex = str.lastIndexOf("a"); // 3
let includes = str.includes("Script"); // true

// - Búsqueda por ocurrencia:

let str = "poroto";
let ocurrencia = str.split('o').length - 1; //3

// - Repetir una cadena: 

let str = "JavaScript";
let repeatedStr = str.repeat(3); //"JavaScriptJavaScriptJavaScript"

// - Verifica si una cadena incluye otra cadena: 

str = "hola";
result = str.includes('a'); // true
console.log(result);

// - Convertir de lista a cadena (unir): 

let s1 = 'Hola';
let s2 = 'JavaScript';
let lista = [s1, ', ', s2, '!'];
let cadena = lista.join('-'); // une
console.log(cadena);

// - Transformación numérica

let s1 = '123456';
let s1 = parseInt(s1);
console.log(typeof s1); //number

// - Comprobaciones varias con Expresión Regular

let s1 = '123456';
let caracteres = /^[a-zA-Z]+$/.test(s1) //false
let numeros = /^[0-9]+$/.test(s1) // true
let alfanumerico = /^[a-zA-Z0-9]*$/.test(s1)//true

// ---------------------------------------------------------------
// Ejercicio Extra 

function checkWords(word1, word2) {
// Palíndromo: Se leen igual hacia adelante y hacia atrás. 
  function isPalindromo(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  }

  console.log(`¿${word1} es un palíndromo? ${isPalindromo(word1)}`);
  console.log(`¿${word2} es un palíndromo? ${isPalindromo(word2)}`);


// Anagramas: Se forman reordenando las letras de otra palabra o frase. 
  function isAnagrama(word1, word2) {
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
  }
  console.log(`¿${word1} es anagrama de ${word2}? ${isAnagrama(word1, word2)}`); 

// Isogramas: es una palabra o frase en la que cada letra aparece el mismo número de veces.
  function isIsograma(word){
    const charCount = {};
    for (const char of word){
      charCount[char] = (charCount[char] || 0) + 1;
      if(charCount[char] > 1){
        return false;
      }
    }
    return true;
  }
  console.log(`¿${word1} es un isograma? ${isIsograma(word1)}`);
  console.log(`¿${word2} es un isograma? ${isIsograma(word2)}`);

}

//Palíndromo
checkWords('anilina','termo');

//Anagrama
checkWords('lacteo', 'coleta'); 

//Isograma
checkWords('lacteo', 'papel');


