function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var counter= 1; 
  var result = num; 
  do{
    result += 5;
    counter++; 
  }while(counter <= 8);
  
  return result; 
  
}

module.exports = doWhile;