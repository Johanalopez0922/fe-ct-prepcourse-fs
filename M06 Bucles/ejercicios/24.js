function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let arr = texto.split(''); 
  arr.reverse();
  texto = arr.join(''); 
  return texto;
}

module.exports = invertirTexto;