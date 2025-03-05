/*
AND (&&):

let x = true;
let y = false;

// Devuelve verdadero si ambos operandos son verdaderos
let result = x && y;
console.log(result); // false

// Si x es verdadero y y es verdadero, result será verdadero
x = true;
y = true;
result = x && y;
console.log(result); // true

OR (||):

let x = true;
let y = false;

// Devuelve verdadero si al menos uno de los operandos es verdadero
let result = x || y;
console.log(result); // true

// Si x es falso y y es falso, result será falso
x = false;
y = false;
result = x || y;
console.log(result); // false

Lenguaje del código: JavaScript (javascript)

NOT (!):

let x = true;

// Invierte el valor booleano de x
let result = !x;
console.log(result); // false

// Invierte el valor booleano de x de nuevo
x = false;
result = !x;
console.log(result); // true


Los operadores lógicos permiten crear condiciones más complejas al combinar varias expresiones
booleanas. Son especialmente útiles en estructuras de control de flujo como if, else, while y for.

Ejemplo de uso de operadores lógicos en una estructura if:


let edad = 25;
let licenciaConducir = true;

if (edad >= 18 && licenciaConducir) {
  console.log('Puedes conducir un automóvil.');
} else {
  console.log('No puedes conducir un automóvil.');
}

En este ejemplo, se utiliza el operador AND (&&) para verificar si la persona es mayor de 18
años y tiene una licencia de conducir. Solo si ambas condiciones son verdaderas, se mostrará el
mensaje “Puedes conducir un automóvil”.

Al utilizar operadores lógicos, es importante tener en cuenta su precedencia y utilizar
paréntesis para controlar el orden de evaluación de las condiciones si es necesario.

*/