function factorial(n) {
  let result = 1;
  for(let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
 }

function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a <= 0 || b <= 0) {
    return 0;
  }
 let result = factorial(b) / factorial(a - 1);
 return result;
}



module.exports = productoEntreNúmeros;


/*factorial(n): Esta función calcula el factorial de un número "n". 
El factorial de un número es el producto de todos los números enteros positivos
 desde 1 hasta "n". Para calcularlo, la función inicializa una variable "result" en 1, 
 luego entra en un bucle for que comienza en 2 y termina en "n". 
 En cada iteración del bucle, multiplica "result" por el contador del bucle "i". 
 Al final del bucle, "result" contiene el factorial de "n", que es lo que la función devuelve.
productoEntreNúmeros(a, b): Esta función calcula el producto de
 todos los números entre "a" y "b" (inclusive). 
 Primero, verifica si "a" o "b" son menores o iguales a 0. 
 Si es así, devuelve 0, ya que no puede haber números enteros en ese rango. 
 Luego, calcula el producto de todos los números en el rango de "a" a "b" 
 utilizando la fórmula del producto de un rango de números, que es el factorial 
 de "b" dividido por el factorial de "a" menos uno. Finalmente, devuelve el resultado.*/