function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
 
  if (typeof callback === 'function') {
    // Si se ha proporcionado una función de devolución de llamada, úsala para transformar la cadena.
    return callback(string);
  } else {
    // Si no se ha proporcionado una función de devolución de llamada, simplemente devuelve la cadena tal cual.
    return string;
  }
}

module.exports = cambiarCadena;
