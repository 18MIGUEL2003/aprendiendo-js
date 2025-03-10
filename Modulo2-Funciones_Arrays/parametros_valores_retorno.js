/*
Sobre parámetros y valores de retorno

En un artículo anterior vimos que las funciones nos permiten agrupar un comportamiento bajo un nombre.

Por ejemplo:

declaración
function saludoAConsola() {
  console.log("Hola");
}

De esta manera podemos usar dicho código una y otra vez utilizando la notación:

ejecución
saludoAConsola();


resultado
Hola

También vimos que podemos crearlas para darles información extra al momento de ejecutarlas:

declaración
function saludoAPersona(persona) {
  console.log("Hola " + persona);
}

De esta manera podemos darles diferentes valores:

saludoAPersona("mundo");
saludoAPersona("lolzini");


resultado
Hola mundo
Hola lolzini

Sobre el valor de retorno

Cuando creamos una función podemos obtener un dato de ellas para usarlo en otras líneas de código.
A este dato le llamamos valor de retorno (return value).

Para hacerlo, debemos agregar la instrucción return seguido del valor que queremos devolverle
al usuario de la función.

function miSuma(p1, p2) {
  const suma = p1 + p2;
  return suma;
}

Ahora cuando la ejecutemos, podemos asignar dicho valor a una variable y usar ese resultado
en cualquier otro lado de nuestro código.

let resultado = miSuma(10, 6);
console.log(resultado);
resultado = miSuma(resultado, 4);
console.log(resultado);


Terminal window
16
20

Analogía
Ilustración sobre valor de retorno
Ilustración sobre valor de retorno

Esto nos da la ventaja de crear comportamientos predecibles donde podemos variar los datos
introducidos para generar resultados al momento en lugar de resultados predefinidos.

Aquí hay una tabla de las diferentes combinaciones entre funciones con/sin parámetros y
con/sin valores de retorno.

                        Sin parámetros	                               Con parámetros
Sin valor de retorno	Procedimientos simples: Realizan una acción sin recibir parámetros ni
                        devolver valores.

                        Procedimientos parametrizados: Realizan una acción específica y aceptan
                        parámetros, pero no devuelven valores.

Con valor de retorno	Funciones básicas: Ejecutan una tarea y devuelven un resultado,
                        pero no aceptan parámetros.

                        Programación funcional: Ejecutan una tarea, aceptan parámetros y devuelven
                        un resultado.
*/