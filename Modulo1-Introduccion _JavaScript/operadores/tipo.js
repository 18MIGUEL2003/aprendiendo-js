/*
A continuación, se presenta una lista de los operadores de tipo en JavaScript junto con ejemplos
bien documentados de su uso:

typeof: Este operador devuelve una cadena de texto que representa el tipo de datos de la variable
o expresión que se le pasa como argumento.

let numero = 42; 
console.log(typeof numero); // Imprime 'number' 

let cadena = 'Hola, mundo!'; 
console.log(typeof cadena); // Imprime 'string' 

let funcion = function () {}; 
console.log(typeof funcion); // Imprime 'function'

En este ejemplo, se utiliza el operador typeof para obtener el tipo de datos de diferentes
variables y expresiones. Es útil para realizar validaciones o tomar decisiones basadas en el tipo
de datos.

Conversiones de tipo explícitas: En JavaScript, es posible realizar conversiones de tipo explícitas
utilizando funciones como parseInt, parseFloat, String, Number, y Boolean.

let numero = '42'; 
let entero = parseInt(numero); 
console.log(entero); // Imprime 42 
console.log(typeof entero); // Imprime 'number' 

let cadena = 42; 
let texto = String(cadena); 
console.log(texto); // Imprime '42' 
console.log(typeof texto); // Imprime 'string'

En este ejemplo, se utilizan funciones de conversión de tipo para convertir explícitamente
una variable de un tipo de datos a otro. Esto es útil cuando se necesita garantizar un tipo
específico de datos antes de realizar una operación.

Cabe destacar que JavaScript también realiza conversiones de tipo implícitas, conocidas
como “coerción de tipo”, cuando se realizan operaciones entre diferentes tipos de datos.

Por ejemplo, si se suman una cadena de texto y un número, JavaScript convierte automáticamente
el número en una cadena de texto antes de realizar la concatenación. Sin embargo, depender de
la coerción de tipo puede causar errores inesperados y es mejor realizar conversiones de tipo
explícitas cuando sea necesario.

Ejemplo de coerción de tipo:


let numero = 42;
let cadena = 'Hola, mundo!';
let resultado = numero + cadena;
console.log(resultado); // Imprime '42Hola, mundo!'

En este ejemplo, JavaScript realiza una conversión implícita del número 42 a la cadena de texto 42
antes de concatenarlo con la cadena Hola, mundo!.
*/