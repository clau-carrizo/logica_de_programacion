//clases
class Programmer {
    //constructor del inicializador  
    constructor(nombre, experiencia, lenguajes) {
        this.nombre = nombre,
            this.experiencia = experiencia,
            this.lenguajes = lenguajes
    }
    //función  para imprimir
    mostrarData() {
        console.log(`${this.nombre} ${this.experiencia} ${this.lenguajes} desde función mostrardata()`)
    }
}
/* 
NombreDeLaClase: Nombre de la clase.
Constructor: Se ejecuta automáticamente cuando se crea un nuevo objeto a partir de la clase. Se utiliza para inicializar las propiedades del objeto.
Métodos: Son las funciones que definen el comportamiento de los objetos de la clase.
*/

//creación y asignación de parámetros
let myProgramer = new Programmer('Dav', 2, ['javascript', 'java', 'python'])
myProgramer.mostrarData()
//modificación
myProgramer.experiencia = 5
myProgramer.mostrarData()
myProgramer.lenguajes.push('c#')
//llamando a la función.
myProgramer.mostrarData()


// Extra 
// pila stack (lifo)
class Stack {
    constructor() {
        this.stack = []
    }
    apilar(item) {
        this.stack.push(item)
    }
    desapilar() {
        this.stack.pop()
    }
    retornar() {
        return this.stack.length
    }
    imprimir() {
        for (let item of this.stack){
            console.log('numero de elementos en mi pila :' + item)
        }
    }
}

let myStack = new Stack([1, 2, 3])
myStack.apilar(10)
myStack.apilar(15)
console.log(myStack.retornar())
myStack.desapilar()
myStack.imprimir()

// Cola queue 
class Cola {
    constructor(array) {
        this.array = array
    }
    añadir(num) {
        this.array.push(num)
    }
    eliminar() {
        this.array.shift()
    }
    mostrar() {
        console.log('numero de elemtos en mi pila :' + this.array.length, ', ' + this.array)
    }



}

let myCola = new Cola([])
myCola.añadir('cliente')
myCola.añadir('cliente1')
myCola.añadir('cliente2')
myCola.eliminar()
myCola.mostrar()