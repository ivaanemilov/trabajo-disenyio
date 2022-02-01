function hola() {
        var ventana_ancho = $(window).width();
        var ventana_alto = $(window).height();
    $("h4").text(ventana_ancho + " x" + ventana_alto);
    }

    setInterval(hola, 0);

