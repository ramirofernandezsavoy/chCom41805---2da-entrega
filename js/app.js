

// Identificacion y funcionalidad de Objetos
const witnessButton = document.querySelector("#witnessButton"),
  msjButton = document.querySelector("#msjButton"),
  camButton = document.querySelector("#camButton"),
  interlocutor = document.querySelector("#text1"),
  mensaje = document.querySelector("#text2"),
  startOver = document.querySelector("#clearButton");

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
startOver.addEventListener("click", () => {
  localStorage.clear();
});