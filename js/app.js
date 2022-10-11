// Clase constructora de las personas.
class Persona {
  constructor(id, nombre, ropa, sexo, cabello, culpable) {
    this.id = id;
    this.nombre = nombre;
    this.ropa = ropa;
    this.sexo = sexo;
    this.cabello = cabello;
    this.culpable = false;
  }
}

// Creacion de distintos personajes.
const 
  personaje1 = new Persona(1, "Roberto Gomez", "azul", "masculino", "canoso"),
  personaje2 = new Persona(2, "Maria Aveldaño", "azul", "femenino", "rubio"),
  personaje3 = new Persona(3, "Adrian Polano", "roja", "masculino", "rubio"),
  personaje4 = new Persona(4, "Valeria Singh", "verde", "femenino", "negro"),
  personaje5 = new Persona(5, "Mario Fernandez", "negra", "masculino", "negro");

// Creacion de array de sospechosos.
const sospechosos = [
  personaje1,
  personaje2,
  personaje3,
  personaje4,
  personaje5,
];

// Seleccion del asesino.
function randomN() {
  return Math.floor(Math.random() * 5 + 1);
}
const asesinoNum = randomN();

let asesino = "";
switch (asesinoNum) {
  case 1:
    personaje1.culpable = true;
    asesino = sospechosos[0];
    break;
  case 2:
    personaje2.culpable = true;
    asesino = sospechosos[1];
    break;
  case 3:
    personaje3.culpable = true;
    asesino = sospechosos[2];
    break;
  case 4:
    personaje4.culpable = true;
    asesino = sospechosos[3];
    break;
  case 5:
    personaje5.culpable = true;
    asesino = sospechosos[4];
    break;
  default:
    alert("Ocurrio un error. Intente de nuevo");
    break;
}

// Funcion de la declaracion de la testigo.
function declaracionTestigo(sexo, ropa, cabello) {
  alert(
    `La señora Pedraza dijo: Esa noche yo escuche la voz de un personaje de sexo ${sexo}, que le hablaba a alguien por telefono. Mire por la ventana y me parecio ver un buzo con capucha color ${ropa}. Finalmente, pasado un rato, me acerque a la casa de Hector para ver si estaba bien y encontre el cadaver, en la mano tenia un mechon de pelo ${cabello}. Le juro que no se nada mas.`
  );
}

declaracionTestigo(asesino.sexo, asesino.ropa, asesino.cabello);

// Simulador de Expediente
let expedienteFiltrado = "";
let pista = prompt(
  "Ingresa un numero segun corresponda:\n(Tené en cuenta que solo podes usar el expediente una vez)\n¿Qué pista queres usar?\n1- Ropa\n2- Cabello\n3- Sexo");

switch (pista) {
  case "1":
    let eleccionRopa = prompt(
      "Ingresa un numero segun corresponda:\n¿De que color era la ropa del sospechoso?\n1- Azul\n2- Negro\n3- Rojo\n4- Verde");

    switch (eleccionRopa) {
      case "1":
        expedienteFiltrado = sospechosos.filter((el) => el.ropa == "azul");
        alert("Los datos que pediste al expediente han sido expedidos a la consola.")
            console.log(expedienteFiltrado);
        break;
      case "2":
        expedienteFiltrado = sospechosos.filter((el) => el.ropa == "negra");
        alert("Los datos que pediste al expediente han sido expedidos a la consola.")
            console.log(expedienteFiltrado);
        break;
      case "3":
        expedienteFiltrado = sospechosos.filter((el) => el.ropa == "roja");
        alert("Los datos que pediste al expediente han sido expedidos a la consola.")
            console.log(expedienteFiltrado);
        break;
      case "4":
        expedienteFiltrado = sospechosos.filter((el) => el.ropa == "verde");
        alert("Los datos que pediste al expediente han sido expedidos a la consola.")
            console.log(expedienteFiltrado);
        break;
      default:
        alert("Hubo un error. El asesino escapó.");
        break;
    }
    break;
  case "2":
    let eleccionCabello = prompt(
      "Ingresa un numero segun corresponda:\n¿De que color era el cabello del sospechoso?\n1- Negro\n2- Rubio\n3- Canoso"
    );
    switch (eleccionCabello) {
        case "1":
          expedienteFiltrado = sospechosos.filter((el) => el.cabello == "negro");
          alert("Los datos que pediste al expediente han sido expedidos a la consola.")
            console.log(expedienteFiltrado);
          break;
        case "2":
          expedienteFiltrado = sospechosos.filter((el) => el.cabello == "rubio");
          alert("Los datos que pediste al expediente han sido expedidos a la consola.")
            console.log(expedienteFiltrado);
          break;
        case "3":
          expedienteFiltrado = sospechosos.filter((el) => el.cabello == "canoso");
          alert("Los datos que pediste al expediente han sido expedidos a la consola.")
            console.log(expedienteFiltrado);
          break;        
        default:
          alert("Hubo un error. El asesino escapó.");
          break;
      }
    break;
  case "3":
    let eleccionSexo = prompt(
        "Ingresa una letra segun corresponda:\n¿De que sexo era el sospechoso?\n1- Femenino\n2- Masculino"
      );
    switch (eleccionSexo) {
        case "1":
          expedienteFiltrado = sospechosos.filter((el) => el.sexo == "femenino");
            alert("Los datos que pediste al expediente han sido expedidos a la consola.")
            console.log(expedienteFiltrado);
          break;
        case "2":
          expedienteFiltrado = sospechosos.filter((el) => el.sexo == "masculino");
            alert("Los datos que pediste al expediente han sido expedidos a la consola.")
            console.log(expedienteFiltrado);
          break;        
        default:
          alert("Hubo un error. El asesino escapó.");
          break;
      }
    break;
  default: alert("Hubo un error. El asesino escapó.");
    break;
}







// LOGS USADOS PARA IR VERIFICANDO LAS DISTINTAS ETAPAS DEL PROCESO.

// console.log(sospechosos);
// console.log(expedienteFiltrado);
// console.log(asesino);
// console.log(asesinoNum);