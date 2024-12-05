// script.js
document.getElementById("inicio").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    // Seleccionar el contenedor principal
    const contenido = document.getElementById("contenido");

    // Definir la URL de la foto fija
    const fotoURL = "http://imgfz.com/i/KrpjUBG.jpeg"; 
    // Agregar la información dinámica
    contenido.innerHTML = `
        <div class="info-container">
            <img src="${fotoURL}" alt="Foto de la persona">
            <h2>Jeremy Peña- GA6575</h2>
            <p>Este es mi proyecto final, es un menú que incluye todas las actividades impartiadas por nuestro maestro Radhames Silverio Gonzalez. Las actividades como resumen y que no contienen hipervínculo estaran dentro del zip pero no dentro de este menú.</p>
            <p>Correo: jeremypenard22@gmail.com</p>
        </div>
    `;
});
