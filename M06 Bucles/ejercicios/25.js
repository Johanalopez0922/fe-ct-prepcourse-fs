function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  string = string.toLowerCase(); 
  //La siguiente linea elimina espacios en blanco, reemplazando por nada. 
  string = string.replace(/\s+/g, '');

  let newString = string;  
  let arr = newString.split(''); 
  arr.reverse();  
  newString = arr.join('');   
   
  if (newString === string){
    return true;
  }else{
    return false;
  }
  

}

esPalindromo("La ruta nos aporto otro paso natural")
module.exports = esPalindromo;
