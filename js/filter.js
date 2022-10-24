// Filtrado y muestreo de sospechoso.
// Funcion Filtrar Sospechoso
const formulario = document.querySelector("#form");
const finalForm = "";

let sexoAsesino = "";
let ojosAsesino = "";
let cabelloASesino = "";
let apodoAsesino = "";

formulario.addEventListener("submit", (e) =>{    
    filtro();
    e.preventDefault()    
})

function filtro() {
    console.log("filtrando...");
    let sexoFiltrado = sospechosos.filter((el)=>{
        return el.sexo === sexInput.value
    })
    let ojosFiltrado = sexoFiltrado.filter((el)=>{
        return el.ojos === eyesInput.value
    })
    let cabelloFiltrado = ojosFiltrado.filter((el)=>{
        return el.cabello === hairInput.value
    })
    let finalFiltrado = cabelloFiltrado.filter((el)=>{
        return el.apodo === nickInput.value
    })
    console.log(finalFiltrado);
    escribir(finalFiltrado);
}
function escribir(finalFiltrado){
    nombreFinal.innerText = finalFiltrado[0].nombre
    sexoFinal.innerText = finalFiltrado[0].sexo
    ojosFinal.innerText = finalFiltrado[0].ojos
    cabelloFinal.innerText = finalFiltrado[0].cabello
    apodoFinal.innerText = finalFiltrado[0].apodo
    imgFinal.src = `./img/${finalFiltrado[0].img}`    
}
const nombreFinal = document.querySelector("#nombreFinal"),
sexoFinal = document.querySelector("#sexoFinal"),
ojosFinal = document.querySelector("#ojosFinal"),
cabelloFinal = document.querySelector("#cabelloFinal"),
apodoFinal = document.querySelector("#apodoFinal"),
imgFinal = document.querySelector("#imgFinal");