//Obtener todos los botones 
let botones = document.querySelectorAll(".circle");

// Recorrer
botones.forEach(function (boton) {

    boton.addEventListener("click", function (ev) {
        ev.preventDefault();
        //Vamos a cambiar la animacion del content de entrada a salida
        let cont = document.querySelector(".content");
        //quitar clase de entrada
        cont.classList.remove("zoomInUp");
        cont.classList.remove("animated");

        //añadir clase de salida
        cont.classList.add("zoomOutDown");
        cont.classList.add("animated");

        //Esperas de tiempo: setTimeout(): para una sola ves / setInterval(): se ejecuta en ciclo constantemente
        setTimeout(function () {
            //Redirecion de archivos dentro de JS
            location.href = "../index.html";
        },600);

        console.log("XD");
        return false;
    });
});