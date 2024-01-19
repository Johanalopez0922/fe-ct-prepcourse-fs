function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let newArr= []; 
  
  for (let i = 0; i < arrayOfStrings.length; i++) {
    arrayOfStrings[i]= arrayOfStrings[i].toLowerCase(); 
    if(arrayOfStrings[i].startsWith("a", 0)){
      newArr.push(arrayOfStrings[i]); 
    }
  }

  return newArr; 

}

filter([
  'abajo',
  'pera',
  'escalera',
  'alerta',
  'indice',
  'azteca',
  'arbol',
  'buzo',
])

module.exports = filter;
