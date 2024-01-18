function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let indiceMax = Math.max(...array);
  let indice = 0;
  console.log(indiceMax);
  for (var i = 0; i < array.length; i++) {
    if (indiceMax === array[i]) {
      indice = i;
    }
  }

  return indice;
}

encontrarIndiceMayor([1, 3, 2, 5, 4]);

module.exports = encontrarIndiceMayor;
