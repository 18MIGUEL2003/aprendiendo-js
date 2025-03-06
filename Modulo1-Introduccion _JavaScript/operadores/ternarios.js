/*
Ejemplo 1:
Asignar un valor a una variable según una condición

let edad = 25;
let mensaje = edad >= 18 ? 'Eres mayor de edad.' : 'Eres menor de edad.';
console.log(mensaje); // Imprime 'Eres mayor de edad.'

En este ejemplo, se utiliza el operador ternario para asignar un mensaje a la variable
mensaje según el valor de la variable edad. Si edad es mayor o igual a 18, mensaje será igual a
‘Eres mayor de edad.’, de lo contrario, será igual a ‘Eres menor de edad.’.

Ejemplo 2:
Calcular el precio con descuento según una condición

let precioOriginal = 100;
let descuento = 0.1;
let esClienteFrecuente = true;
let precioFinal = precioOriginal * (esClienteFrecuente ? (1 - descuento) : 1);
console.log(precioFinal); // Imprime 90

En este ejemplo, se utiliza el operador ternario para calcular el precio final de un producto
según si el comprador es cliente frecuente o no. Si esClienteFrecuente es true, se aplica un
descuento del 10% al precioOriginal; de lo contrario, se mantiene el precio original.

El operador ternario es útil para simplificar el código y mejorar la legibilidad en ciertos casos.
Sin embargo, es importante no abusar de su uso y evitar anidar operadores ternarios,
ya que esto puede hacer que el código sea más difícil de entender y mantener.
*/