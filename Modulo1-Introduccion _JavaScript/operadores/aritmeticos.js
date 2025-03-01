/*
Operadores aritméticos en JavaScript

Los operadores aritméticos en JavaScript se utilizan para realizar operaciones matemáticas básicas
sobre valores numéricos.

A continuación, se presenta una lista de los operadores aritméticos más comunes en JavaScript junto
con ejemplos bien documentados de su uso:

Suma (+): Este operador suma dos números y devuelve el resultado.

Resta (-): Este operador resta el segundo número del primero y devuelve el resultado.

Multiplicación (*): Este operador multiplica dos números y devuelve el resultado.

División (/): Este operador divide el primer número por el segundo y devuelve el resultado.

Módulo (%): Este operador devuelve el residuo de la división del primer número entre el segundo.

Incremento (++): Este operador se utiliza para incrementar en uno el valor de una variable.

Decremento (--): Este operador se utiliza para decrementar en uno el valor de una variable.

Exponenciación (**): Este operador eleva el primer número a la potencia del segundo número.

Negación unaria (-): Este operador cambia el signo del número al que se aplica.

Estos son los operadores aritméticos básicos en JavaScript. Algunos de ellos también tienen formas
abreviadas, por ejemplo, la suma puede ser abreviada como
num1 += num2 en lugar de escribir num1 = num1 + num2. Estos operadores son esenciales para realizar
cálculos y transformar valores numéricos en una aplicación.

Ejemplos:

Aquí están algunos ejemplos de cada uno de los operadores aritméticos en JavaScript, con comentarios
detallados para ayudar a entender su uso:

*/
// Suma (+)

// let num1 = 10;
// let num2 = 20;

// Suma dos números
// let sum = num1 + num2;
// console.log("La suma es: " + sum);  // Imprime "La suma es: 30"

// Resta (-)

// let num1 = 10;
// let num2 = 20;

// Resta dos números
// let difference = num2 - num1;
// console.log("La diferencia es: " + difference);  // Imprime "La diferencia es: 10"

// Multiplicación (*)

// let num1 = 10;
// let num2 = 20;

// Multiplica dos números
// let product = num1 * num2;
// console.log("El producto es: " + product);  // Imprime "El producto es: 200"

// División (/)

// let num1 = 10;
// let num2 = 20;

// Divide dos números
// let quotient = num2 / num1;
// console.log("El cociente es: " + quotient);  // Imprime "El cociente es: 2"

// Módulo (%)

// let num1 = 10;
// let num2 = 20;

// Devuelve el resto después de la división de dos números
// let remainder = num2 % num1;
// console.log("El resto es: " + remainder);  // Imprime "El resto es: 0"

// Incremento (++)

// let num = 10;

// Incrementa en uno el valor de una variable
// num++;
// console.log("El valor después del incremento es: " + num);  // Imprime "El valor después del incremento es: 11"

// Decremento (--)

// let num = 10;

// Decrementa en uno el valor de una variable
// num--;
// console.log("El valor después del decremento es: " + num);  // Imprime "El valor después del decremento es: 9"

// Exponenciación (**)

//let num1 = 2;
//let num2 = 10;

// Eleva un número a una potencia
// let result = num1 ** num2;
// console.log("El resultado es: " + result);  // Imprime "El resultado es: 1024"

// Negación unaria (-)

// let a = 5;
// let negacion = -a; // negacion es igual a -5

/*
Los operadores aritméticos se pueden combinar para formar expresiones matemáticas más complejas.
No obstante, es importante tener en cuenta la precedencia de los operadores y utilizar paréntesis
para controlar el orden de las operaciones.

Ejemplo:
*/
let a = 10;
let b = 2;
let c = 3;
let resultado = (a + b) * c; // resultado es igual a 36, ya que primero se realiza la suma (10 + 2) y luego se multiplica por 3