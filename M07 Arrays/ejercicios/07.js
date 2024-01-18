function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let newArr = []; 
  for (let i=0; i<array.length;i++){
    newArr.push(array[i].toUpperCase());
  }
  return newArr; 
}

module.exports = convertirStringAMayusculas;
