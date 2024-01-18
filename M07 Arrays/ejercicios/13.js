function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let contador = 0; 
  for(var i = 0; i < resultadosTest.length; i++){
    contador+= resultadosTest[i]; 
  }

  return contador = contador / resultadosTest.length; 
}

module.exports = promedioResultadosTest;
