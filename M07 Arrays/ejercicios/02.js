function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  let elementArr; 

  for(var i in array){
    console.log(typeof array[i]); 
    if(typeof array[i] === "string" ){
      elementArr = "string"
    }else if(typeof array[i] === "number"){
      elementArr = "number"
    }
  }

  if(elementArr === "string"){
    array= array.sort(); 
  }else if(elementArr === "number"){
   array = array.sort(function(a, b){return a - b});
  }

  return array; 

  
}

module.exports = ordenarArray;
