function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:

  if (numero >= 1 && numero <= 7) {
    const dias = [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ];

    for (let i = 0; i <= dias.length ; i++) {
     console.log(i);
      if(numero === i+1){
        return dias[i];
      }
    }
  } else {
    return "No es un dia de la semana";
  }
}


module.exports = obtenerDiaSemana;
