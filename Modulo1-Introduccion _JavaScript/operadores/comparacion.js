/* 
Igual a (==):

// Ejemplo de igual a
let x = 5;
let y = "5";

console.log(x == y); // devuelve verdadero, convirtiendo la cadena "5" en un número 5

No igual a (!=):

// Ejemplo de no igual a
let x = 5;
let y = "5";

console.log(x != y); // devuelve falso, convirtiendo la cadena "5" en un número 5

Estrictamente igual a (===):

// Ejemplo de estrictamente igual a
let x = 5;
let y = "5";

console.log(x === y); // devuelve falso, ya que x es un número y y es una cadena

Estrictamente no igual a (!==):

// Ejemplo de estrictamente no igual a
let x = 5;
let y = "5";

console.log(x !== y); // devuelve verdadero, ya que x es un número y y es una cadena

Mayor que (>):

// Ejemplo de mayor que
let x = 5;
let y = 10;

console.log(x > y); // devuelve falso, ya que x es menor que y

Menor que (<):

// Ejemplo de menor que
let x = 5;
let y = 10;

console.log(x < y); // devuelve verdadero, ya que x es menor que y

Mayor o igual que (>=):

// Ejemplo de mayor o igual que
let x = 5;
let y = 10;

console.log(y >= x); // devuelve verdadero, ya que y es mayor o igual que x

Menor o igual que (<=):

// Ejemplo de menor o igual que
let x = 5;
let y = 10;

console.log(x <= y); // devuelve verdadero, ya que x es menor o igual que y

Los operadores de comparación son fundamentales para controlar el flujo de ejecución en
nuestras aplicaciones, ya que permiten realizar evaluaciones condicionales.
Por lo general, se utilizan junto con estructuras de control de flujo como if, else, while y for.

Ejemplo de uso de operadores de comparación en una estructura if-else:

let edad = 18;

if (edad >= 18) {
  console.log('Eres mayor de edad.');
} else {
  console.log('Eres menor de edad.');
}

En este ejemplo, se utiliza el operador mayor o igual que (>=) para determinar si la variable
edad es mayor o igual a 18. Dependiendo del resultado de la comparación, se ejecuta un bloque de
código u otro.

Es importante utilizar el operador de comparación adecuado según las necesidades del problema
y tener en cuenta la diferencia entre igualdad y desigualdad estrictas (=== y !==) y no
estrictas (== y !=). La elección correcta del operador de comparación puede prevenir errores
relacionados con la conversión de tipos y mejorar la eficiencia y seguridad de nuestras aplicaciones.
*/