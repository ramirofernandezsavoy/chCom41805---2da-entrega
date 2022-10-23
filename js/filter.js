// Filtrado y muestreo de sospechoso.
// Funcion Filtrar Sospechoso

const sexoFiltrado = sospechosos.filter((el)=>{
    return el.sexo == "masculino"    
})

console.log(sexoFiltrado);

const ojosFiltrado = sexoFiltrado.filter((el)=>{
    return el.ojos == "verde"    
})

console.log(ojosFiltrado);

const cabelloFiltrado = ojosFiltrado.filter((el)=>{
    return el.cabello == "negro"    
})

console.log(cabelloFiltrado);

const finalFiltrado = cabelloFiltrado.filter((el)=>{
    return el.apodo == "judio"
})

console.log(finalFiltrado);


// const formulario = document.querySelector("#form");

// formulario.addEventListener("submit", (e) =>{
//     e.preventDefault()
//     let form = e.target;    
//     let sospechosoFiltrado = filtrarSospechoso(sospechosos, sexInput.value.toLowerCase());
//     console.log(sospechosoFiltrado);


//     console.log(sexInput.value);
//     console.log(eyesInput.value);
//     console.log(hairInput.value);
//     console.log(nickInput.value); 
// })

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
imgFinal.innerHtml = `<img src="../img/${finalFiltrado[0].img}" alt="">`

console.log(finalFiltrado[0].img);

// console.log(nombreFinal);
// console.log(sexoFinal);
// console.log(ojosFinal);
// console.log(cabelloFinal);
// console.log(apodoFinal);
// console.log(imgFinal);

