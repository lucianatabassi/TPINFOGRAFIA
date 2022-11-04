document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel'); //detecta todos los carruseles
    M.Carousel.init(elementosCarousel, {
        duration: 1500,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 7
    }); //iniciar un carrusel por cada elemento de la pagina
});