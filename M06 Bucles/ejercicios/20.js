function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0; 
  for(var i= 1; i < n+1; i++){
    if(i <=100){
      console.log(i); 
      suma+=i; 
    }else{
      break; 
    }
    
  }
 return suma; 
}

console.log(sumarHastaNConBreak(20)); 

module.exports = sumarHastaNConBreak;