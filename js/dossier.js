contenedor = document.querySelector(".contenedor");
const renderDossier = (array) => {
    let html;
    for (const item of array) {
      const { nombre, sexo, ojos, cabello, apodo, img } = item;  
      html = `
            <div class="card">
                <div class="card-image">
                <img src="./img/${img}">
                </div>
                <div class="card-content">
                <span class="card-title">${nombre.toUpperCase()}</span>
                <p>Sexo: ${sexo}</p>
                <p>Ojos: ${ojos}</p>
                <p>Cabello: ${cabello}</p>
                <p>Alias: ${apodo}</p>        
                </div>          
            </div>
        `;
        contenedor.innerHTML += html;
    }}

fetch('./js/personajes.json')
.then(res=> res.json())
.then(datos=>{
    console.log(datos);
    renderDossier(datos);    
});



