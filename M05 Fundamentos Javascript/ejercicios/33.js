function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  // Método Abreviado de Comprobación de Números Primos
  var result = true;
  var x = 0;
  // Aquí convertimos el dato que recibimos de la función en entero
  numero = parseInt(numero);
  // Si no es un dato entero es que no es primo
  if (Number.isInteger(numero) === true) {
    // Si el número es 0 1 o 4 es que no es primo
    if (numero === 0 || numero === 1 || numero === 4) {
      result = false;
    } else {
      if (numero >= 4) {
        if (numero % 2 === 0) {
          result = false;
        }
        if (result === true) {
          for (x = 3; x < numero / 2; x = x + 2) {
            if (numero % x === 0) {
              result = false;
              break;
            }
          }
        }
      }
    }
  } else {
    result = false;
  }
  return result;
}

module.exports = esNumeroPrimo;
