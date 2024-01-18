function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let result;
  numeros = numeros.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeros[i + 1]) {
      result = numeros[i];
    }
  }
  return result;
}

module.exports = encontrarElementoRepetido;
