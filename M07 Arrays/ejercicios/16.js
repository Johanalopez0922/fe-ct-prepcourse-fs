function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  let mes1 = "Enero";
  let mes2 = "Marzo";
  let mes3 = "Noviembre";
  let result;

  if (array.includes(mes1) && array.includes(mes2) && array.includes(mes3)) {
    let positions = [];
    let index1 = array.indexOf(mes1);
    positions.push(index1);
    let index2 = array.indexOf(mes2);
    positions.push(index2);
    let index3 = array.indexOf(mes3);
    positions.push(index3);
    positions = positions.sort();
    result = [];
    for (let i = 0; i < positions.length; i++) {
      result.push(array[positions[i]]);
    }
  } else {
    result = "No se encontraron los meses pedidos";
  }
  console.log(result);
  return result;
}

module.exports = mesesDelAño;
