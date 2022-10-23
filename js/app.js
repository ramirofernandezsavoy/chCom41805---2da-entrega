

// Identificacion y funcionalidad de Objetos
const witnessButton = document.querySelector("#witnessButton"),
  msjButton = document.querySelector("#msjButton"),
  camButton = document.querySelector("#camButton"),
  interlocutor = document.querySelector("#text1"),
  mensaje = document.querySelector("#text2");

// Funcionalidad de los botones.
witnessButton.addEventListener("click", () => {  
  interlocutor.innerText = `La señora Pedraza dice:`
  mensaje.innerText = `Esa noche yo escuche la voz de un personaje de sexo ${asesino.sexo}, que le hablaba a alguien por telefono. Subí el volumen de la tele, pues me molestaba, aunque eso no me impidio escuchar un grito. Me asusté. Me quede mirando a escondidas detras de la cortina y vi salir una figura de la casa de Hector. Finalmente, pasado un rato, me arme de valor y me acerque a la casa para ver si el estaba bien, alli encontre el cadaver, en la mano tenia un mechon de pelo ${asesino.cabello}. Le juro que no se nada mas.`
});
msjButton.addEventListener("click", () => {
  interlocutor.innerText = `Juan, tu compañero del cuartel te escribe:`
  mensaje.innerText = `Hey, realizamos algunas investigaciones, corre el rumor en la calle de que el asesino escapo hacia los barrios bajos y se esconde alli. Aparentemente se hace apodar ${asesino.apodo}`
});
camButton.addEventListener("click", () => {
  interlocutor.innerText = `La camara de seguridad del barrio cerrado captó:`
  mensaje.innerText = `Durante la noche del asesinato, el barrio estaba muy tranquilo, pero si analizas detenidamente, ves moverse una sombra entre los arbustos. Tiempo despues, se ve abrir la puerta trasera de la casa y una figura oscura emerge de la misma. No se llega a apreciar muy bien su ropa, pero se acerca hacia la valla, levanta la cabeza para mirar en la casa del vecino y al hacerlo un rayo de luz pega de lleno en la capucha, de color ${asesino.ropa} y unos penetrantes ojos color ${asesino.ojos}. Se escucha un ruido cerca y la figura se pierde en las sombras de la noche.`
});




// Funcion de la declaracion de la testigo.
function declaracionTestigo(sexo, ropa, cabello) {
  alert(
    `La señora Pedraza dijo: Esa noche yo escuche la voz de un personaje de sexo ${sexo}, que le hablaba a alguien por telefono. Mire por la ventana y me parecio ver un buzo con capucha color ${ropa}. Finalmente, pasado un rato, me acerque a la casa de Hector para ver si estaba bien y encontre el cadaver, en la mano tenia un mechon de pelo ${cabello}. Le juro que no se nada mas.`
  );
}

// Simulador de Expediente
let expedienteFiltrado = "";

function revisarExpedientes() {
  let pista = prompt(
    "Ingresa un numero segun corresponda:\n¿Qué pista queres usar?\n1- Ropa\n2- Cabello\n3- Sexo"
  );

  switch (pista) {
    case "1":
      let eleccionRopa = prompt(
        "Ingresa un numero segun corresponda:\n¿De que color era la ropa del sospechoso?\n1- Azul\n2- Negro\n3- Rojo\n4- Verde"
      );

      switch (eleccionRopa) {
        case "1":
          expedienteFiltrado = sospechosos.filter((el) => el.ropa == "azul");
          alert(
            "Los datos que pediste al expediente han sido expedidos a la consola."
          );
          console.log(expedienteFiltrado);
          break;
        case "2":
          expedienteFiltrado = sospechosos.filter((el) => el.ropa == "negra");
          alert(
            "Los datos que pediste al expediente han sido expedidos a la consola."
          );
          console.log(expedienteFiltrado);
          break;
        case "3":
          expedienteFiltrado = sospechosos.filter((el) => el.ropa == "roja");
          alert(
            "Los datos que pediste al expediente han sido expedidos a la consola."
          );
          console.log(expedienteFiltrado);
          break;
        case "4":
          expedienteFiltrado = sospechosos.filter((el) => el.ropa == "verde");
          alert(
            "Los datos que pediste al expediente han sido expedidos a la consola."
          );
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
          expedienteFiltrado = sospechosos.filter(
            (el) => el.cabello == "negro"
          );
          alert(
            "Los datos que pediste al expediente han sido expedidos a la consola."
          );
          console.log(expedienteFiltrado);
          break;
        case "2":
          expedienteFiltrado = sospechosos.filter(
            (el) => el.cabello == "rubio"
          );
          alert(
            "Los datos que pediste al expediente han sido expedidos a la consola."
          );
          console.log(expedienteFiltrado);
          break;
        case "3":
          expedienteFiltrado = sospechosos.filter(
            (el) => el.cabello == "canoso"
          );
          alert(
            "Los datos que pediste al expediente han sido expedidos a la consola."
          );
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
          expedienteFiltrado = sospechosos.filter(
            (el) => el.sexo == "femenino"
          );
          alert(
            "Los datos que pediste al expediente han sido expedidos a la consola."
          );
          console.log(expedienteFiltrado);
          break;
        case "2":
          expedienteFiltrado = sospechosos.filter(
            (el) => el.sexo == "masculino"
          );
          alert(
            "Los datos que pediste al expediente han sido expedidos a la consola."
          );
          console.log(expedienteFiltrado);
          break;
        default:
          alert("Hubo un error.");
          break;
      }
      break;
    default:
      alert("Hubo un error.");
      break;
  }
}

function acusarAsesino() {
  let acusacion = prompt("Escriba el nombre completo del asesino");
  if (acusacion == asesino.nombre) {
    alert(
      "¡La policia tiene al asesino en custodia! Felicitaciones detective!"
    );
  } else {
    alert(
      "Luego de equivocarse en un momento crucial, usted permitio que el asesino escapase. Su jefe ha decidido despedirlo.\nPor suerte, quizás yo pueda ayudarlo.\nLe dejo aqui mi codigo de descuento de Coderhouse para estudiar programacion, puesto que lo suyo claramente no es la investigacion.\ncoder.ramiro.7c1a\nQue tenga buen día."
    );
  }
}
