document.addEventListener("DOMContentLoaded", function () {
    // Animación de aparición en el contenido al hacer scroll
    const content = document.querySelector(".content");

    window.addEventListener("scroll", function () {
        const scrollPos = window.scrollY;
        if (scrollPos > 200) {
            content.classList.add("show-content");
        }
    });

    // Efecto de cambio de imagen en el carrusel manualmente
    let index = 0;
    const images = document.querySelectorAll(".carousel img");

    setInterval(() => {
        images.forEach((img, i) => {
            img.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % images.length;
    }, 3000);
});
