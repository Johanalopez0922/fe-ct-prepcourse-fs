function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var result = true;
  while (numero > 1) {
    numero = numero / 2;
  }

  if (numero != 1) {
    result = false;
  }
  return result;
}
module.exports = esPotenciaDeDos;
