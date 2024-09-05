// Crear una funcion con javascript para descubrir el siguiente mensaje 
// encriptado: crjdrhlzerjgfuirercxleuzrgvejrigvifefcfyrireuvcrdzjdrdrevirhlvcfyrtvvcyfdsiv
function desencriptarCesar(p) {
    let z = 17;
    let desencri = "";
    let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let az = abc.length;
  
    for (let i = 0; i < p.length; i++) {
      let letra = p[i].toLowerCase();
      let indice = abc.indexOf(letra);
  
      if (indice !== -1) {
        let nuevoIndice = (indice - z + az) % az;
        desencri += abc[nuevoIndice];
      } else {
        desencri += p[i];
      }
    }
    return desencri;
  }
//resultado:
console.log(desencriptarCesar("crjdrhlzerjgfuirercxleuzrgvejrigvifefcfyrireuvcrdzjdrdrevirhlvcfyrtvvcyfdsiv")); 
//desencriptado--> las maquinas podran algun dia pensar pero no lo haran de la misma manera que lo hace el hombre.
