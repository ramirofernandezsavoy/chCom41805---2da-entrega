// Filtrado y muestreo de sospechoso.
// Funcion Filtrar Sospechoso
const formulario = document.querySelector("#form");
const finalForm = "";

let sexoAsesino = "";
let ojosAsesino = "";
let cabelloASesino = "";
let apodoAsesino = "";

formulario.addEventListener("submit", (e) =>{
    e.preventDefault()
    sexoAsesino = sexInput.value
    ojosAsesino = eyesInput.value
    cabelloASesino = hairInput.value
    apodoAsesino = nickInput.value   


})

function filtrar() {
    
}
const sexoFiltrado = sospechosos.filter((el)=>{
    return el.sexo === sexInput.value
})

console.log(sexoFiltrado);

const ojosFiltrado = sexoFiltrado.filter((el)=>{
    return el.ojos === eyesInput.value   
})

console.log(ojosFiltrado);

const cabelloFiltrado = ojosFiltrado.filter((el)=>{
    return el.cabello === hairInput.value    
})

console.log(cabelloFiltrado);

const finalFiltrado = cabelloFiltrado.filter((el)=>{
    return el.apodo === nickInput.value
})

console.log(finalFiltrado);
console.log(sexoAsesino);
console.log(ojosAsesino);
console.log(cabelloASesino);
console.log(apodoAsesino); 



const nombreFinal = document.querySelector("#nombreFinal"),
sexoFinal = document.querySelector("#sexoFinal"),
ojosFinal = document.querySelector("#ojosFinal"),
cabelloFinal = document.querySelector("#cabelloFinal"),
apodoFinal = document.querySelector("#apodoFinal"),
imgFinal = document.querySelector("#imgFinal");

nombreFinal.innerText = finalFiltrado[0].nombre
sexoFinal.innerText = finalFiltrado[0].sexo
ojosFinal.innerText = finalFiltrado[0].ojos
cabelloFinal.innerText = finalFiltrado[0].cabello
apodoFinal.innerText = finalFiltrado[0].apodo
imgFinal.src = `./img/${finalFiltrado[0].img}`