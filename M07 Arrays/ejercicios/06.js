function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let newArr = []; 
  for(var i = 0; i<array.length; i++){
    newArr.push(array[i] *2); 
  }
  return newArr; 

}

module.exports = duplicarElementos;
