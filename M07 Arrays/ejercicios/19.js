function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  let newArr= []; 
  let result; 
  for(var i = 1; i <=10; +i++){
    //console.log(num); 
    if(i === 5){
        continue; 
    }else{
      newArr.push(num+=2); 
      result= newArr; 
    }
  }

  return result; 


}

module.exports = continueStatement;
