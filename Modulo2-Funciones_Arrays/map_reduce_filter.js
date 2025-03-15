/*
Map, reduce y filter son todos métodos de arreglo en JavaScript. Cada uno iterará sobre un
arreglo y realizará una transformación o cálculo. Cada uno devolverá un nuevo arreglo basado en el resultado de la función. En este artículo, aprenderás por qué y cómo usar cada uno de ellos.

Aquí hay un divertido resumen de Steven Luscher:

Map/filter/reduce in a tweet:

map([?, ?, ?], cook)
=> [?, ?, ?]

filter([?, ?, ?], isVegetarian)
=> [?, ?]

reduce([?, ?], eat)
=> ?

— Steven Luscher (@steveluscher) June 10, 2016


Map

El método map() se utiliza para crear un nuevo arreglo a partir de una existente, aplicando una
función a cada uno de los elementos de la primera arreglo.

Sintaxis

var nuevo_arreglo = arr.map(function callback(elemento, indice, arreglo) {
    // Valor devuelto para nuevo_arreglo
}[, thisArg])

En la callback, solo se requiere el elemento arreglo. Por lo general, se realiza alguna acción
sobre el valor y luego se devuelve un nuevo valor.

Ejemplo
En el siguiente ejemplo, cada número de un arreglo se duplica.

const numeros = [1, 2, 3, 4];
const duplicar = numeros.map(elemento => elemento * 2);
console.log(duplicar); // [2, 4, 6, 8]

Filter
El método filter() toma cada elemento de un arreglo y aplica una instrucción condicional contra él.
Si este condicional devuelve true, el elemento se envía al arreglo de salida.
Si la condición devuelve false, el elemento no se envía al arreglo de salida.

Sintaxis

var nuevo_arreglo = arr.filter(function callback(elemento, indice, arreglo) {
    // Devuelve verdadero o falso
}[, thisArg])

La sintaxis de filter es similar a map, excepto que la función callback debe devolver true para
mantener el elemento, o false de lo contrario. En el callback, solo se requiere el elemento.

Ejemplos
En el siguiente ejemplo, los números impares se" filtran", dejando solo números pares.

const numeros = [1, 2, 3, 4];
const pares = numeros.filter(item => item % 2 === 0);
console.log(pares); // [2, 4]

En el siguiente ejemplo, filter() se usa para obtener todos los estudiantes cuyas calificaciones
son mayores o iguales a 90.

const estudiantes = [
  { nombre: 'Quincy', grado: 96 },
  { nombre: 'Jason', grado: 84 },
  { nombre: 'Alexis', grado: 100 },
  { nombre: 'Sam', grado: 65 },
  { nombre: 'Katie', grado: 90 }
];

const gradosDeEstudiante = estudiantes.filter(estudiante => estudiante.grado >= 90);
return gradosDeEstudiante; // [ { nombre: 'Quincy', grado: 96 }, { nombre: 'Alexis', grado: 100 },
{ nombre: 'Katie', grado: 90 } ]

Reduce
El método reduce() reduce un arreglo de valores a un solo valor. Para obtener el valor de salida,
ejecuta una función reductora en cada elemento del arreglo.

Sintaxis

arr.reduce(callback[, valorInicial])

El argumento de callback es una función que se llamará una vez por cada elemento del arreglo.
Esta función toma cuatro argumentos, pero a menudo solo se usan los dos primeros.

- acumulador: el valor devuelto de la iteración anterior
- valorActual: el elemento actual del arreglo
- índice: el índice del elemento actual
- arreglo: el arreglo original en la que se llamó a reduce
- El argumento valorInicial es opcional. Si se proporciona, se utilizará como valor acumulador
inicial en la primera llamada a la función callback.

Ejemplos
El siguiente ejemplo suma todos los números juntos en un arreglo de números.

const numeros = [1, 2, 3, 4];
const suma = numeros.reduce(function (resultado, elemento) {
  return resultado + elemento;
}, 0);
console.log(suma); // 10

En el siguiente ejemplo, reduce() se usa para transformar un arreglo de cadenas en un único objeto
que muestra cuántas veces aparece cada cadena en el arreglo. Observa que esta llamada para reducir
pasa un objeto vacío {} como parámetro de valorInicial. Esto se usará como el valor inicial del
acumulador (el primer argumento) pasado a la función callback.

var mascotas = ['perro', 'pollo', 'gato', 'perro', 'pollo', 'pollo', 'conejo'];

var recuentosDeMascota = mascotas.reduce(function(obj, mascota){
    if (!obj[mascota]) {
        obj[mascota] = 1;
    } else {
        obj[mascota]++;
    }
    return obj;
}, {});

console.log(recuentosDeMascota); 

/*
Salida:
 { 
    perro: 2, 
    pollo: 3, 
    gato: 1, 
    conejo: 1 
 }
*/