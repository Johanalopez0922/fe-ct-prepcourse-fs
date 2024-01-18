function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  let result; 

  if (numeros.length > 0) {
    for (let i = 1; i < numeros.length; i++) {
      //console.log(numeros[i]); 
      if (numeros[i] !== numeros[i - 1] + 1) {       
       result = numeros[i - 1]+1;   
       break;      
      }
    }
    if(result === undefined){
      result = null; 
    }
  } else {
    result = null;
  }
  return result
}


module.exports = encontrarNumeroFaltante;
