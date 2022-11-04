var btn = document.getElementById('btn'),
p = document.getElementById('p'),
contador = 0;

function cambio(){

    if(contador == 0){

        nota.classList.add('random');
        contador = 1;
    }


    else{nota.classList.remove('random');
        contador = 0;}
}

btn.addEventListener('click', cambio, true)



/// --- MODO OSCURO --- ///

/*const m_oscuro = document.querySelector('.m_oscuro');
const body = document.querySelector('body');
m_oscuro.addEventListener('click', e =>{
  body.classList.toggle('modooscuro');
});
*/

/// --- COMIENZO DE CÓDIGO SELECCIÓN DE TEXTO --- ///




const selectableTextArea = document.querySelectorAll(".nota");
const twitterShareBtn = document.querySelector("#twitter-share-btn");


selectableTextArea.forEach(elem => {
  elem.addEventListener("mouseup", selectableTextAreaMouseUp);
});

twitterShareBtn.addEventListener("click", twitterShareBtnClick);

document.addEventListener("mousedown", documentMouseDown);

function selectableTextAreaMouseUp(event) {
  setTimeout(() => { // In order to avoid some weird behavior...
    const selectedText = window.getSelection().toString().trim();
    if(selectedText.length) {
      const x = event.pageX;
      const y = event.pageY;
      const twitterShareBtnWidth = Number(getComputedStyle(twitterShareBtn).width.slice(0,-2));
      const twitterShareBtnHeight = Number(getComputedStyle(twitterShareBtn).height.slice(0,-2));

      if(document.activeElement !== twitterShareBtn) {
        twitterShareBtn.style.left = `${x - twitterShareBtnWidth*0.5}px`;
        twitterShareBtn.style.top = `${y - twitterShareBtnHeight*1.25}px`;
        twitterShareBtn.style.display = "block";
        twitterShareBtn.classList.add("btnEntrance");
      }
      else {
        twitterShareBtn.style.left = `${x-twitterShareBtnWidth*0.5}px`;
        twitterShareBtn.style.top = `${y-twitterShareBtnHeight*0.5}px`;
      }
    }
  }, 0);
}

function documentMouseDown(event) {
  if(event.target.id!=="twitter-share-btn" && getComputedStyle(twitterShareBtn).display==="block") {
    twitterShareBtn.style.display = "none";
    twitterShareBtn.classList.remove("btnEntrance");
    window.getSelection().empty();
  }
}

function twitterShareBtnClick(event) {
  const selectedText = window.getSelection().toString().trim();
  if(selectedText.length) {
    // General Twitter Share URL: https://twitter.com/intent/tweet?text={title}&url={url}&hashtags={hash_tags}&via={user_id}
    const twitterShareUrl = "https://instagram.com/";
    const text = `${encodeURIComponent(selectedText)}`;
    const currentUrl = encodeURIComponent(window.location.href);
    const hashtags = "helloworld, test, testing";
    const via = "CodingJrney";
    window.open(`${twitterShareUrl}?text="${text}"&url=${currentUrl}&hashtags=${hashtags}&via=${via}`);

    // Alternatively, we could include everything in the "text" field -> more room to customize the tweet:
    // window.open(`${twitterShareUrl}?text="${text}" by @${via} ${hashtags.split(",").map(h => "%23"+h.trim()).join(" ")} ${currentUrl}`);

    // We could also specify new window features:
    // const newWindowOptions = "height=400,width=550,top=0,left=0,resizable=yes,scrollbars=yes";
    // window.open(`${twitterShareUrl}?text="${text}"&url=${currentUrl}&hashtags=${hashtags}&via=${via}`, "ShareOnTwitter", newWindowOptions);
  }
}







/// --- COMIENZO DE CÓDIGO ORIGINAL --- ///

$(document).ready(function() {
  /* HERRAMIENTAS */
  /* mostrar herramintas completas (Se ocultan y muestran clases segun se aprete el botón) */
  $("#img_herramientas_boton_abajo").click(function() {
    $(".ocultos").fadeIn();
    $("#img_herramientas_boton_abajo").hide();
    $("#img_herramientas_boton_arriba").show();
  });

  $("#img_herramientas_boton_arriba").click(function() {
    $(".ocultos").fadeOut();
    $("#img_herramientas_boton_abajo").show();
    $("#img_herramientas_boton_arriba").hide();
  });

  /* COMENTARIOS */
  /*al clickear el comentario del usuario logueado se ocultan todos las pantallas de la pestaña y salta un pop out*/
  $(".hacer_comentario").click(function() {
    $(".popOut").show();
    $(".head").hide();
    $(".cuerpo").hide();
    $(".footer").hide();
  });

  /* al cancelarlo se vuelve a la instancia anterior (se oculta el pop out y se muestran las clases que conforman la pagina)*/
  $(".comentar_cancelar").click(function() {
    $(".popOut").hide();
    $(".head").show();
    $(".cuerpo").show();
    $(".footer").show();

    /*auto scroll a la seccion de comentarios, de lo contrario tras interactuar con el popout se envia al usuario al comeinzo de la pagina*/
    $("html, body").animate({
      scrollTop: $(".comentario").offset().top
    }, 1);
  });
  /* al aceptarlo sucede lo mismo que al cancelarlo solo que se muestra la clase del comentario, oculta de forma previa (con display: none en css)*/
  $(".comentar_continuar").click(function() {
    $(".popOut").hide();
    $(".head").show();
    $(".cuerpo").show();
    $(".footer").show();

    $(".comentario_func").show();

    /*auto scroll a la seccion de comentarios, de lo contrario tras interactuar con el popout se envia al usuario al comeinzo de la pagina*/
    $("html, body").animate({
      scrollTop: $(".comentario").offset().top
    }, 1);
  });


  $(".m_oscuro").click(function() {
    $("body").removeClass("modosepia");
    $("body").addClass("modooscuro");
  });

  $(".m_claro").click(function() {
    $("body").removeClass("modooscuro");
    $("body").removeClass("modosepia");
  });

  $(".m_sepia").click(function() {
    $("body").removeClass("modooscuro");
    $("body").addClass("modosepia");
  });

  /*Esconder o mostrar el panel de herramientas*/
  $(document).scroll(function() {
    /*se crea una variable que traduce el estado del scroll de la pagina a un numero*/
    var y = $(this).scrollTop();
    /*altura medible probar con distintos valores, a los 8900 se oculta en el footer*/
    if (y > 8900) {
      $(".herramientas").fadeOut();
    } else {
      $(".herramientas").fadeIn();
    }
  });
});
