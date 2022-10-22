// Clase constructora de las personas.
class Persona {
  constructor(id, nombre, ojos, sexo, cabello, apodo, culpable) {
    this.id = id;
    this.nombre = nombre;
    this.ojos = ojos;
    this.sexo = sexo;
    this.cabello = cabello;
    this.apodo = apodo;
    this.culpable = false;
  }
}

// Creacion de distintos personajes.
const 
  personaje1 = new Persona(1, "Fernando Tasca", "marron", "masculino", "castaño", "cabezon"),
  personaje2 = new Persona(2, "Nicolas Aubin", "celeste", "masculino", "rubio", "el viejo"),
  personaje3 = new Persona(3, "Damian Massolo", "negro", "masculino", "negro", "lince"),
  personaje4 = new Persona(4, "Facundo Bajano", "marron", "masculino", "colorado", "batracio"),
  personaje5 = new Persona(5, "Gabriel Tolmasky", "verde", "masculino", "negro", "judio"),
  personaje6 = new Persona(6, "Lucas Romero", "verde", "masculino", "castaño", "no tiene"),
  personaje7 = new Persona(7, "Valeria Singh", "marron", "femenino", "rubio", "aida"),
  personaje8 = new Persona(8, "Pamela Aldaz", "verde", "femenino", "castaño", "pam"),
  personaje9 = new Persona(9, "Evelyn Gout", "negro", "femenino", "negro", "eve"),
  personaje10 = new Persona(10, "Glenda Romano", "negro", "femenino", "rosa", "glen");

// Creacion de array de sospechosos.
const sospechosos = [personaje1, personaje2, personaje3, personaje4, personaje5, personaje6, personaje7, personaje8, personaje9, personaje10 ];

// Seleccion del asesino.
function randomN() {
  return Math.floor(Math.random() * sospechosos.length + 1);
}
const asesinoNum = randomN();
console.log(asesinoNum);

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
  case 6:
    personaje6.culpable = true;
    asesino = sospechosos[5];
    break;
  case 7:
    personaje7.culpable = true;
    asesino = sospechosos[6];
    break;
  case 8:
    personaje8.culpable = true;
    asesino = sospechosos[7];
    break;
  case 9:
    personaje9.culpable = true;
    asesino = sospechosos[8];
    break;
  case 10:
    personaje10.culpable = true;
    asesino = sospechosos[9];
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

// declaracionTestigo(asesino.sexo, asesino.ropa, asesino.cabello);
// Alert antes de usar los onClick

// Simulador de Expediente
let expedienteFiltrado = "";

function revisarExpedientes() {
let pista = prompt(
  "Ingresa un numero segun corresponda:\n¿Qué pista queres usar?\n1- Ropa\n2- Cabello\n3- Sexo");

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
        alert("Hubo un error.");
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
          alert("Hubo un error.");
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
          alert("Hubo un error.");
          break;
      }
    break;
  default: alert("Hubo un error.");
    break;
}
}

function acusarAsesino() {
    let acusacion = prompt("Escriba el nombre completo del asesino")
    if (acusacion == asesino.nombre) {
        alert("¡La policia tiene al asesino en custodia! Felicitaciones detective!");
    } else {
        alert("Luego de equivocarse en un momento crucial, usted permitio que el asesino escapase. Su jefe ha decidido despedirlo.\nPor suerte, quizás yo pueda ayudarlo.\nLe dejo aqui mi codigo de descuento de Coderhouse para estudiar programacion, puesto que lo suyo claramente no es la investigacion.\ncoder.ramiro.7c1a\nQue tenga buen día.")
    }
}

// LOGS USADOS PARA IR VERIFICANDO LAS DISTINTAS ETAPAS DEL PROCESO.

console.log(sospechosos);
console.log(expedienteFiltrado);
console.log(asesino);
console.log(asesinoNum);