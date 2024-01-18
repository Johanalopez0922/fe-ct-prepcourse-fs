function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let firstNum = array[0]; 
  let result; 
  for (let i=1; i < array.length; i++){
    if(firstNum === array[i]){
      result = true; 
    }else{
      result= false;
    }
  }
  return result; 
}

module.exports = todosIguales;

