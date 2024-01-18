function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con = o más de 5 caracteres en el array.
  // Tu código:

  var result = undefined;

  for (var i in array) {
    if (array[i].length >= 5) {
      result = array[i];
      break;
    }
  }
  return result;
}

module.exports = obtenerPrimerStringLargo;

