// Clase constructora de las personas.
class Persona {
  constructor(id, nombre, ojos, sexo, cabello, apodo, ropa, img, culpable) {
    this.id = id;
    this.nombre = nombre;
    this.ojos = ojos;
    this.sexo = sexo;
    this.cabello = cabello;
    this.apodo = apodo;
    this.ropa = ropa;
    this.img = img;
    this.culpable = false;
  }
}

// Creacion de distintos personajes.
const personaje1 = new Persona(
    1,
    "Fernando Tasca",
    "marron",
    "masculino",
    "castaño",
    "cabezon",
    "negro",
    "fernandotasca.jpg"
  ),
  personaje2 = new Persona(
    2,
    "Nicolas Aubin",
    "celeste",
    "masculino",
    "rubio",
    "el viejo",
    "marron con rayas",
    "nicolasaubin.jpg"
  ),
  personaje3 = new Persona(
    3,
    "Damian Massolo",
    "negro",
    "masculino",
    "negro",
    "lince",
    "negro",
    "damianmassolo.jpg"
  ),
  personaje4 = new Persona(
    4,
    "Facundo Bajano",
    "marron",
    "masculino",
    "colorado",
    "batracio",
    "gris",
    "facubajano.jpg"
  ),
  personaje5 = new Persona(
    5,
    "Gabriel Tolmasky",
    "verde",
    "masculino",
    "negro",
    "buitre",
    "verde",
    "gabytolma.jpg"
  ),
  personaje6 = new Persona(
    6,
    "Lucas Romero",
    "verde",
    "masculino",
    "castaño",
    "perro",
    "rojo",
    "lucasromero.jpg"
  ),
  personaje7 = new Persona(
    7,
    "Valeria Singh",
    "marron",
    "femenino",
    "rubio",
    "aida",
    "azul",
    "valeriasingh.jpg"
  ),
  personaje8 = new Persona(
    8,
    "Pamela Aldaz",
    "verde",
    "femenino",
    "castaño",
    "pam",
    "gris",
    "pamaldaz.jpg"
  ),
  personaje9 = new Persona(
    9,
    "Evelyn Gout",
    "negro",
    "femenino",
    "negro",
    "eve",
    "azul",
    "evegout.jpg"
  ),
  personaje10 = new Persona(
    10,
    "Glenda Romano",
    "negro",
    "femenino",
    "rosa",
    "glen",
    "negro",
    "glendaromano.jpg"
  );

// Creacion de array de sospechosos.
const sospechosos = [
  personaje1,
  personaje2,
  personaje3,
  personaje4,
  personaje5,
  personaje6,
  personaje7,
  personaje8,
  personaje9,
  personaje10,
];

// let sospechosos = "";
// fetch('/js/personajes.json')
//   .then((response) => response.json())
//   .then((json) => sospechosos = (json));    


// Seleccion del asesino.
function randomN() {
  return Math.floor(Math.random() * sospechosos.length + 1);
}

let asesino = "";
const asesinoNum = randomN();

console.log(asesinoNum);

function pickAssa() {
    
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
}

if (localStorage.getItem("culpable")) {
  asesino = JSON.parse(localStorage.getItem("culpable"));
  } else {
  pickAssa ();
  localStorage.setItem("culpable", JSON.stringify(asesino));
}
console.log(asesino.nombre);