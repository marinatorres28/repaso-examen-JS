// CAMBIAR EL TAMAÑO DE LAS IMÁGENES

//Llamamos la funcion
imagenesTamaño();

//Creamos una funcion 
function imagenesTamaño() {
    //Primero creamos un array con las imágenes que queremos aumentar
    let imagenesContainer1 = document.querySelectorAll("#img-container");

    //recorremos el array con un bucle for
    for (let i = 0; i < imagenesContainer1.length; i++) {
        //hacemos un evento para cuando pasemos por encima cambie el tamaño
        imagenesContainer1[i].addEventListener("mouseover", function () {
            imagenesContainer1[i].style.width = "550px";
        })
        //para que vuelva al tamaño original
        imagenesContainer1[i].addEventListener("mouseout", function () {
            imagenesContainer1[i].style.width = "500px";
        })
    }
}


//DESPLEGABLE
//para crear un desplegable primeros creamos el select en el index
//creamos un mapa con los elementos del desplegable
let mapa = new Map([["Tillo" , "El pequeño de todos"],["Mina","La mediana, y mamá de Tillo"],["Gordi" , "El más mayor y el más gruñón"]]);

//leemos el select del html
let select= document.querySelector("#desplegable");

//recorremos el mapa con bucle for of 
for (let [mascota,descripcion] of mapa){
    //creamos la opcion para seleccionar
    let mascotaOpcion = document.createElement("option");
    mascotaOpcion.textContent = mascota;
    mascotaOpcion.setAttribute("id",mascota);
    select.appendChild(mascotaOpcion);
}

// Añadimos el evento change al select
select.addEventListener("change", function() {
    // Obtenemos la descripción de la mascota seleccionada
    let descripcionMascota = mapa.get(select.value);
    
    // Actualizamos el contenido del elemento donde queremos mostrar la descripción
    document.querySelector("#descripcion").textContent = descripcionMascota;
});