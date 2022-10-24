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
    console.log(sexoAsesino);
    console.log(ojosAsesino);
    console.log(cabelloASesino);
    console.log(apodoAsesino);

})

const sexoFiltrado = "";
const ojosFiltrado = "";
const cabelloFiltrado = "";
const finalFiltrado = "";

function filtro() {
    sexoFiltrado = sospechosos.filter((el)=>{
        return el.sexo === "masculino"    
    })    
    
    ojosFiltrado = sexoFiltrado.filter((el)=>{
        return el.ojos === "marron"    
    })    
    
    cabelloFiltrado = ojosFiltrado.filter((el)=>{
        return el.cabello === "castaño"    
    })
    
    finalFiltrado = cabelloFiltrado.filter((el)=>{
        return el.apodo === "cabezon"
    })
}  

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