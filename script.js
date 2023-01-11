// Obtén todas las imágenes en la sección de galería
var images = document.getElementsByTagName("img");

// Agrega un evento click a cada imagen
for (var i = 0; i < images.length; i++) {
    // Funciona en todos los navegadores excepto en IE8 y anteriores
    images[i].addEventListener("click", function() {
        // Obtén el src de la imagen clickeada
        var src = this.getAttribute("src");

        // Crea un elemento modal
        var modal = document.createElement("div");
        modal.classList.add("modal");

        // Crea un elemento imagen dentro del modal
        var modalImg = document.createElement("img");
        modalImg.setAttribute("src", src);
        modal.appendChild(modalImg);

        // Agrega el modal al body
        document.body.appendChild(modal);

        // Agrega un evento click para cerrar el modal
        modal.addEventListener("click", function() {
            modal.remove();
        });
    });
    // Para IE8 y anteriores
    images[i].attachEvent("onclick", function () {
        // Obtén el src de la imagen clickeada
        var src = this.getAttribute("src");

        // Crea un elemento modal
        var modal = document.createElement("div");
        modal.classList.add("modal");

        // Crea un elemento imagen dentro del modal
        var modalImg = document.createElement("img");
        modalImg.setAttribute("src", src);
        modal.appendChild(modalImg);

        // Agrega el modal al body
        document.body.appendChild(modal);

        // Agrega un evento click para cerrar el modal
        modal.attachEvent("onclick", function () {
            modal.remove();
        });
    });
}
