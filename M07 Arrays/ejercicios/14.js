function multiplicarArgumentos() {
  //arguments no solo es una palabra clave es un Objeto local de js y para verificar si se ha pasado como parametro debe hacerse con nombreparam.length
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let result = 0;
  if (arguments.length > 0) {
    let product = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      product *= arguments[i];
    }
    result = product;
  }

  return result;
}

module.exports = multiplicarArgumentos;
