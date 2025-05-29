document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const images = document.querySelectorAll(".carousel img");

    function changeSlide() {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none"; // Muestra solo la imagen actual
            img.style.opacity = i === index ? "1" : "0"; // Hace la transición más fluida
        });
        index = (index + 1) % images.length;
    }

    setInterval(changeSlide, 4000); // Cambia cada 4 segundos
});
