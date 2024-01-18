function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  
  // Tu código:
  
  let suma = 0;
  for (var i = 1; i < n + 1; i++) {
    if (i <= 100) {
      suma += i;
    } else {
      break;
    }
  }
  return suma;

}

module.exports = sumarHastaNConBreak;
