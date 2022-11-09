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
  mensaje.innerText = `Esa noche yo escuche una voz de un personaje de sexo ${asesino.sexo}, que hablaba por telefono. Subí el volumen de la tele, pensando que no era nada, aunque eso no me impidió escuchar un grito. Me asusté. Miré a escondidas entre las cortinas y vi salir una figura por el patio de Héctor. Pasado un rato, me armé de valor y me acerqué a la casa para ver si el estaba bien, allí encontré el cadáver, en la mano tenia un mechon de pelo ${asesino.cabello}. Es todo lo que puedo decirles, creo.`
});
msjButton.addEventListener("click", () => {
  interlocutor.innerText = `Tiene un mensaje del Sargento Alcaraz:`
  mensaje.innerText = `Nos informaron que el sospechoso principal se esconde en una pensión. Aparentemente se hace apodar ${asesino.apodo}`
});
camButton.addEventListener("click", () => {
  interlocutor.innerText = `El video de la camara de seguridad muestra:`
  mensaje.innerText = `La casa de Héctor, todo tranquilo hasta que una figura oscura emerge por puerta posterior. Esta muy oscuro y no se ve bien. Cuando la figura se acerca a la valla, levanta la cabeza para mirar en la casa del vecino y al hacerlo un rayo de luz pega de lleno en la capucha, de color ${asesino.ropa} y unos penetrantes ojos color ${asesino.ojos}. Luego la figura se pierde en las sombras de la noche.`
});
startOver.addEventListener("click", () => {
  localStorage.clear();
});


// For Each que use para imprimir el array sospechosos y pasarlo a JSON.
// sospechosos.forEach(element => {  
//   let tito = JSON.stringify(element)
//   console.log(tito);
// });

