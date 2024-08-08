const nombreDestino = document.getElementById("informacionNombreDestino");
const precioDestino = document.getElementById("precioDestino");
const nombreDestinoDetalle = document.getElementById("informacionNombreDestino1");
const frase = document.getElementById("informacionFrase");
const alojamiento = document.getElementById("informacionAloja");
const checkin = document.getElementById("informacionCheck");
const cancel = document.getElementById("informacionCancel")
const actividades = document.getElementById("informacionAct");
const beneficios = document.getElementById("informacionBene");
const precioTotal = document.getElementById("precioTotal");
const costoViaje = document.getElementById("costoViaje");
const precioAloja = document.getElementById("precioAloja");
const precioExcur = document.getElementById("precioExcur");
const serv1 = document.getElementById("serv1");
const serv2 = document.getElementById("serv2");
const serv3 = document.getElementById("serv3");
const serv4 = document.getElementById("serv4");
const nombreHotel = document.getElementById("nombreHotel");
const convenio1 = document.getElementById("convenio1");
const convenio2 = document.getElementById("convenio2");
const convenio3 = document.getElementById("convenio3");
const convenio4 = document.getElementById("convenio4");
const convenio5 = document.getElementById("convenio5");

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings=""
    let entrar=false
    let valiNum= /^[A-Za-z]+$/
    let valiInfo= /^[0-9]+$/
    if (!valiNum.test(nombreDestino.value)){
        warnings+="El nombre del destino no es válido\n";
        entrar=true;
    }
    if (!valiInfo.test(nombreDestinoDetalle.value)){
        warnings+="El nombre del destino en detalles no es válido\n";
        entrar=true;
    }
    if (!valiInfo.test(frase.value)){
        warnings+="La frase no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(alojamiento.value)){
        warnings+="La informacion de alojamiento no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(cancel.value)){
        warnings+="La informacion de cancelacion no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(beneficios.value)){
        warnings+="La informacion de beneficios no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(actividades.value)){
        warnings+="La información de las actividades no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(serv1.value)){
        warnings+="La informacion del servicio 1 no es válida\n";
        entrar=true;

    }
    if (!valiInfo.test(serv2.value)){
        warnings+="La información del servicio 2 no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(serv3.value)){
        warnings+="La información del servicio 3 no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(serv4.value)){
        warnings+="La información del servicio 4 no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(nombreHotel.value)){
        warnings+="El nombre del hotel no es válido\n";
        entrar=true;
    }
    if (!valiInfo.test(convenio1.value)){
        warnings+="La información del convenio 1 no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(convenio2.value)){
        warnings+="La información del convenio 2 no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(convenio3.value)){
        warnings+="La información del convenio 3 no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(convenio4.value)){
        warnings+="La información del convenio 4 no es válida\n";
        entrar=true;
    }
    if (!valiInfo.test(convenio5.value)){
        warnings+="La información del convenio 5 no es válida\n";
        entrar=true;
    }
    if (!valiNum.test(precioDestino.value)){
        warnings+="El precio de la miniatura ingresado no es válido\n";
        entrar=true;
    }
    if (!valiNum.test(precioTotal.value)){
        warnings+="El precio total ingresado no es válido\n";
        entrar=true;
    }
    if (!valiNum.test(precioAloja.value)){
        warnings+="El precio ingresado del alojamiento no es válido\n";
        entrar=true;
    }
    if (!valiNum.test(precioExcur.value)){
        warnings+="El precio ingresado de la excursión no es válido\n";
        entrar=true;
    }
    if (!valiNum.test(costoViaje.value)){
        warnings+="El costo del viaje no es válido\n";
        entrar=true;
    }
    if (entrar){
        alert(warnings);
    }
})


