const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  let pregunta = params.pregunta;
  let opcion = params.opcion;

  $(document).ready (() => {
    console.log("JQUERY!");

    $("#boton-iniciartrivia").click (() => {
        console.log("Click!");

        window.location.href =
        "./pantallas/pantalla1.html?pregunta=Comencemos";
    });

    $("#p1-opcioncorrecta").click (() => {
        console.log("Click!");

        window.location.href =
        "../pantallas/pantalla1correcta.html?opcion=1";
    });
})

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

