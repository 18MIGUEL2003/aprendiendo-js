/*
Cómo utilizar las funciones de flecha

JavaScript es un lenguaje de programación poderoso y versátil, y una de sus características
más llamativas es el uso de las llamadas funciones de flecha.

Realmente se trata de una forma concisa de escribir funciones en JavaScript y tienen varias
ventajas sobre las funciones tradicionales. Aunque hay quien las rechaza por su aspecto algo
críptico y tan diferente al resto de los lenguajes

Una de las principales ventajas de las funciones de flecha es su sintaxis concisa.
En lugar de tener que escribir "function" cada vez que quieres declarar una función,
puedes utilizar la sintaxis "=>" para declarar una función de flecha.

Por ejemplo, aquí está cómo se vería una función tradicional que toma dos números y los suma:


                        
function sumar(a, b)                   
{                  
return a + b;                       
}                   
console.log(sumar(3,4));  //daría 7


Mientras que con una función de flecha se podría escribir:
               
 let sumar = (a, b) => a + b;                    
console.log(sumar(3,4));  //daría 7


                      
Como se puede observar, la función de flecha se ve mucho más limpia y concisa, ocupa menos
espacio y hace lo mismo. Observa que no se ha usado return para devolver el resultado,
esto puede hacerse por ser una función en una sola línea. Por supuesto que puede usarse return
y el código puede ser más complejo como puedes ver en los ejemplos de abajo.

Otra caracterísitca de las funciones de flecha es el uso que hacen del objeto "this"
diferente al de las funciones tradicionales.

En las funciones de flecha, "this" se refiere al contexto en el que se declaró la función,
en lugar de al objeto que llama la función, como en las funciones habituales. Puede ser el
objeto window, un botón, un evento... Esto puede ser especialmente útil al trabajar con objetos
y eventos en JavaScript.

Además, las funciones de flecha son una excelente opción cuando se trata de funciones de callback.

Una función de callback es una función que se pasa como argumento a otra función para que se
ejecute en algún momento en el futuro.

Con las funciones de flecha, podemos escribir código de callback mucho más conciso y legible.

Resumiendo, las funciones de flecha son una característica valiosa de JavaScript que puede
mejorar significativamente la legibilidad y simplicidad de tu código.

A medida que sigue evolucionando el lenguaje, las funciones de flecha se vuelven cada vez
más populares entre los desarrolladores. Es una característica importante a tener en cuenta al
escribir código JavaScript moderno.


Ejemplos de notación de flecha

Funciones de retorno simple:

Una de las formas más comunes de utilizar las funciones de flecha es cuando quieres crear una
función que devuelve un valor simple. Por ejemplo, aquí hay una función que toma un número y lo
multiplica por 2:


let duplicar = numero => numero * 2; 
console.log( duplicar(5) ); // Salida: 10 


                        
Funciones con varios argumentos:

Si una función de flecha tiene más de un argumento, debes encerrarlos entre paréntesis.
Por ejemplo, aquí hay una función que toma dos números y calcula el resto de dividir el primero
por el segundo

                      
let resto = (a, b) => a % b; 
console.log(resto(5, 2)); // Salida: 1

                        
Funciones con un cuerpo de varias líneas:

Si una función de flecha tiene un cuerpo de varias líneas, debes ponerlo entre llaves y usar la
palabra clave return para devolver el valor deseado. Por ejemplo, aquí hay una función que toma
un número y devuelve su valor absoluto:


let valorAbsoluto = numero => {                          
        if (numero < 0) {       
             return -numero;             
        }       
return numero; };   
console.log( valorAbsoluto(-5) ); // Salida: 5 


                        
Funciones como argumentos de otras funciones (callback):

Las funciones de flecha también son útiles cuando se utilizan como argumentos de otras funciones,
especialmente cuando se trata de funciones de orden superior como "map", "filter" y "reduce".
Por ejemplo, aquí hay un ejemplo de cómo se puede utilizar una función de flecha con el método
"map" para duplicar todos los elementos en un array:


                          
let numeros = [1, 2, 3, 4]; 
let duplicados = numeros.map(numero => numero * 2);    
console.log(duplicados); // Salida : [2, 4, 6, 8] 

 
Uso del objeto this

En este ejemplo se muestra la diferencia en cuando al uso de this en las funciones tradicionales
y las funciones flecha


let persona = { 
 nombre: 'Juan',
 edad : 40,
 getEdad : ()=>{
     console.log("this es: ", this); 
     console.log( this.edad);
     }
 }
persona.getEdad()   // This es {Window ... y undefined, no existe wndows.edad

                        
En este ejemplo verás que el objeto this es window, el mismo donde se define el objeto persona

           
let persona = {          
 nombre: 'Juan',         
 edad : 40,         
 getEdad : function(){        
     console.log("this es: ", this);  
     console.log( this.edad);
     }        
 }                    
persona.getEdad()   // This es: {persona ... y 40, no existe wndows.edad
*/