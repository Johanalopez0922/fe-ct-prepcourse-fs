function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  let vocales = "aeiou";
  var result;
  
  if (typeof letra === "string" && letra.length === 1) {
    letra = letra.toLowerCase();
    if(vocales.includes(letra)){
      result = 'Es vocal';
    }else{
      result = "Dato incorrecto";;
    }
   
  } else {
    result = "Dato incorrecto";;
  }

  return result; 
}

module.exports = esVocal;
