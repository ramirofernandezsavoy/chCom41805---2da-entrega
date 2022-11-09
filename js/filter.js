// Filtrado y muestreo de sospechoso.
// Funcion Filtrar Sospechoso
const formulario = document.querySelector("#form");
const finalForm = "";
let sexoAsesino = "";
let ojosAsesino = "";
let cabelloASesino = "";
let apodoAsesino = "";
let wol = "";

// Funcion pintar resultado.
const pintarResultado = () => {
    if (wol) {
        Swal.fire({
            title: 'Felicitaciones!',
            text: 'El asesino fue detenido, el jefe te espera en su despacho con un merecido ascenso!',
            imageUrl: './img/ascenso.gif',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'ascenso img',
          })
    } else {
        Swal.fire({
            title: 'Inocente',
            text: 'El sospechoso fue encontrado inocente. El jefe te espera en su oficina para darte su codigo de CoderHouse porque claramente ser detective no es lo tuyo.',
            imageUrl: './img/despido.gif',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'despido img',
          });
    }
}

formulario.addEventListener("submit", (e) =>{    
    e.preventDefault()  
    filtro();      
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
        return el.apodo === nickInput.value.toLowerCase();
    })
    console.log(finalFiltrado);
    escribir(finalFiltrado);
    finalFiltrado[0].nombre == asesino.nombre ? wol = true : wol = false;
    console.log(asesino.nombre);  
    console.log(wol);
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
imgFinal = document.querySelector("#imgFinal"),
endButton = document.querySelector("#endButton");

// Boton Final (Y Libreria)
endButton.addEventListener("click", () => {
    if (nombreFinal.innerText == ">None") {
        Swal.fire(
            'La orden de arresto no esta completa.',
            'Asegurese de que se completaron los datos del perfil.',
            'warning'
          )
    } else {
        Swal.fire({
            title: ' Emitiendo orden de arresto',
            text: "Esta seguro que desea arrestar a este sospechoso?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#090125',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, emitir orden!'
          }).then((result) => {
            if (result.isConfirmed) {          
              pintarResultado()
              localStorage.clear();          
            }
          })
    }    
  });