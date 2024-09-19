// Investigar los métodos de encriptacion César y de Sustitución.
// a. Elaborar una función de javascript que reciba un string(texto plano) y devuelva un string encriptado.
// b. Crear una función que desencripte el string de la consigna anterior.

function Cesar(p) {
    let z = 3;
    let encri = "";
    let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let az = abc.length;
  
    for (let i = 0; i < p.length; i++) {
      let letra = p[i].toLowerCase();
      let indice = abc.indexOf(letra);
  
      if (indice !== -1) {
        let nuevoIndice = (indice + z) % az;
        encri += abc[nuevoIndice];
      } else {
        encri += p[i];
      }
    }
    return encri;
  }
  
  // ejemplo
  console.log(Cesar("fernanda")); //encriptado--> ihuqdqgd

//desencriptar:
function desencriptarCesar(p) {
    let z = 3;
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
  
  // prueba
  console.log(desencriptarCesar("ihuqdqgd123")); //desencriptado--> fernanda
  
  
