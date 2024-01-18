function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  let valores = Object.values(arguments);
  let result = false;

  for (var i = 0; i < valores.length; i++) {
    if (Array.isArray(valores[i]) && valores[i].length >= 1) {
      result = true;
    }
  }
  return result;
}

module.exports = esArrayNoVacio;
