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

// ------------------------------------------------------------------------------------- PREGUNTA 1 ------ //

    $("#p1-opcioncorrecta").click (() => {
        console.log("Click!");

        window.location.href =
        "../pantallas/pantalla1correcta.html?opcion=1";
    });

    $("#p1-opcionincorrecta").click (() => {
        console.log("Click!");

        window.location.href =
        "../pantallas/pantalla1incorrecta1.html?opcion=2";
    });

    $("#p1-opcionincorrecta2").click (() => {
        console.log("Click!");

        window.location.href =
        "../pantallas/pantalla1incorrecta2.html?opcion=3";
    });

    $("#boton-haciapregunta2").click (() => {
        console.log("Click!");

        window.location.href =
        "../pantallas/pantalla2.html?pregunta=2";
    });

// ------------------------------------------------------------------------------------- PREGUNTA 2 ------ //

    $("#p2-opcionincorrecta").click (() => {
    console.log("Click!");

    window.location.href =
    "../pantallas/pantalla2incorrecta1.html?opcion=1";
    });

    $("#p2-opcionincorrecta2").click (() => {
    console.log("Click!");

    window.location.href =
    "../pantallas/pantalla2incorrecta2.html?opcion=2";
    });

    $("#p2-opcioncorrecta").click (() => {
    console.log("Click!");

    window.location.href =
    "../pantallas/pantalla2correcta.html?opcion=3";
    });


   $("#boton-haciapregunta3").click (() => {
    console.log("Click!");

    window.location.href =
    "../pantallas/pantalla3.html?pregunta=3";
    });

// ------------------------------------------------------------------------------------- PREGUNTA 3 ------ //

    $("#p3-opcionincorrecta").click (() => {
    console.log("Click!");

    window.location.href =
    "../pantallas/pantalla3incorrecta1.html?opcion=1";
    });

    $("#p3-opcionincorrecta2").click (() => {
    console.log("Click!");

    window.location.href =
    "../pantallas/pantalla3incorrecta2.html?opcion=2";
    });

    $("#p3-opcioncorrecta").click (() => {
    console.log("Click!");

    window.location.href =
    "../pantallas/pantalla3correcta.html?opcion=3";
    });


   $("#boton-haciapregunta4").click (() => {
    console.log("Click!");

    window.location.href =
    "../pantallas/pantalla4.html?pregunta=4";
    });
    
// ------------------------------------------------------------------------------------- PREGUNTA 4 ------ //

    $("#p4-opcioncorrecta").click (() => {
        console.log("Click!");
    
        window.location.href =
        "../pantallas/pantalla4correcta.html?opcion=1";
        });
    
        $("#p4-opcionincorrecta").click (() => {
        console.log("Click!");
    
        window.location.href =
        "../pantallas/pantalla4incorrecta1.html?opcion=2";
        });
    
        $("#p4-opcionincorrecta2").click (() => {
        console.log("Click!");
    
        window.location.href =
        "../pantallas/pantalla4incorrecta2.html?opcion=3";
        });
    
    
       $("#boton-haciapregunta5").click (() => {
        console.log("Click!");
    
        window.location.href =
        "../pantallas/pantalla5.html?pregunta=5";
        });

// ------------------------------------------------------------------------------------- PREGUNTA 5 ------ //

    $("#p5-opcionincorrecta").click (() => {
        console.log("Click!");
    
        window.location.href =
        "../pantallas/pantalla5incorrecta1.html?opcion=1";
        });
    
        $("#p5-opcionincorrecta2").click (() => {
        console.log("Click!");
    
        window.location.href =
        "../pantallas/pantalla5incorrecta2.html?opcion=2";
        });
    
        $("#p5-opcioncorrecta").click (() => {
        console.log("Click!");
    
        window.location.href =
        "../pantallas/pantalla5correcta.html?opcion=3";
        });
    
    
       $("#boton-haciapregunta6").click (() => {
        console.log("Click!");
    
        window.location.href =
        "../pantallas/pantalla6.html?info=pregunta";
        });

// ------------------------------------------------------------------------------------- PANTALLA 6 ------ //

    $("#boton-apant7").click (() => {
        console.log("Click!");
    
        window.location.href =
        "../pantallas/pantalla7.html?pantalla=final";
        });
    
})

// ------------------------------------------------------------------------------------- POPUPS PANTALLA 1 ------ //

function abrirRopa() {
    var grafico = document.getElementById("peso");
    grafico.classList.add("mostrar");
  }

  function abrirBarriles() {
    var barriltini = document.getElementById("barriles");
    barriltini.classList.add("mostrarbarril");
  }

  function mostrarSinteticas() {
    var sinteticas = document.getElementById("infosinteticas");
    sinteticas.classList.add("mostrarInfoTorta");

  }

  function mostrarAlgodon() {
    var algodon = document.getElementById("infoalgodon");
    algodon.classList.add("mostrarInfoTorta");
  }

  function mostrarArtificial() {
    var artificial = document.getElementById("infoartificial");
    artificial.classList.add("mostrarInfoTorta");
  }

  function mostrarNaturales() {
    var naturales = document.getElementById("infonaturales");
    naturales.classList.add("mostrarInfoTorta");
  }

   /* function cerrarInfo() {
        var salir = document.getElementsByClassName("porcion1")
        porcion1.addEventListener('mouseleave', () => 
        console.log ("mouse leave")
  /*sinteticas.classList.remove("mostrarInfoTorta"),
  sinteticas.classList.add("nomostrar")
  );
    }*/

  





  // -------------------------------------------------------------------------------------  CARRUSEL FAMOSAS ------ //
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

