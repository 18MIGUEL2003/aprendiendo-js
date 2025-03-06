/*
Ejemplos:

Algunos ejemplos de cada uno de los operadores de bit en JavaScript:

Operador AND (&):

// Ejemplo de uso del operador AND
let a = 5; // binario: 0101
let b = 3; // binario: 0011

let resultado = a & b;
console.log(resultado); // imprime 1

En este ejemplo, la operación AND se realiza bit a bit en los números a y b. El resultado es 1,
ya que ambos bits en la posición 1 son 1.

Operador OR (|):

// Ejemplo de uso del operador OR
let a = 5; // binario: 0101
let b = 3; // binario: 0011

let resultado = a | b;
console.log(resultado); // imprime 7

En este ejemplo, la operación OR se realiza bit a bit en los números a y b. El resultado es 7,
ya que al menos uno de los bits en las posiciones 1 y 2 es 1.

Operador XOR (^):

// Ejemplo de uso del operador XOR
let a = 5; // binario: 0101
let b = 3; // binario: 0011

let resultado = a ^ b;
console.log(resultado); // imprime 6

En este ejemplo, la operación XOR se realiza bit a bit en los números a y b. El resultado es 6, ya que los bits en las posiciones 2 y 3 son diferentes.

Operador NOT (~):

// Ejemplo de uso del operador NOT
let a = 5; // binario: 0101

let resultado = ~a;
console.log(resultado); // imprime -6

En este ejemplo, la operación NOT invierte todos los bits del número a. El resultado es -6.

Desplazamiento a la izquierda (<<):

// Ejemplo de uso del desplazamiento a la izquierda
let a = 5; // binario: 0000 0101

let resultado = a << 2;
console.log(resultado); // imprime 20

En este ejemplo, los bits del número a se desplazan 2 posiciones a la izquierda. El resultado es 20.

Desplazamiento a la derecha (>>):

// Ejemplo de uso del desplazamiento a la derecha
let a = 20; // binario: 0001 0100

let resultado = a >> 2;
console.log(resultado); // imprime 5

El resultado es 5 porque cada desplazamiento a la derecha divide el número por 2.

Desplazamiento a la derecha sin signo (>>>):

// Ejemplo de uso del desplazamiento a la derecha sin signo
let x = -20; // 11101100 en binario (número negativo)

let result = x >>> 2; // 00101100 en binario (desplazamiento 2 posiciones a la derecha sin signo)
console.log(result); // imprime 1073741820

El resultado es 1073741820 porque el desplazamiento a la derecha sin signo siempre llena los
bits vacíos con 0, lo que da como resultado es un número positivo.

Espero que estos ejemplos ayuden a entender mejor los operadores condicionales en JavaScript.
*/