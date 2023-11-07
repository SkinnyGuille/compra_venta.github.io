var imagenes = ["guille1.jpg","guille3.jpg","n1.jpg","s1.jpg","y3.jpg"];
var cont = 0;

function imgAnt () {
    if ( cont > 0){
        cont-- ;
    }    
    else{
        cont = imagenes.length-1;
    }
    fotoactual();
}
function imgSig () {
    if ( cont < imagenes.length-1){
        cont++ ;
    }    
    else{
        cont = 0;
    }
    fotoactual();
}
function fotoactual (){
    var contimg = document.getElementById ("foto-carrusel");
    contimg.src = imagenes [cont];
}


/*---------------------------------------------------FORNULARIO--------------------*/ 

function validarFormulario() {
   
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var mensaje = document.getElementById("mensaje").value;


    var mensajeError = "";


    if (nombre.length === 0 || nombre.length > 30) {
        mensajeError += "Nombre inválido. Debe tener entre 1 y 30 caracteres.\n";
        document.getElementById("error-nombre").textContent = "Nombre inválido";
    } else {
        document.getElementById("error-nombre").textContent = "";
    }

   
    if (email.length > 0 && !email.includes("@")) {
        mensajeError += "Email inválido. Debe contener un @.\n";
        document.getElementById("error-email").textContent = "Email inválido";
    } else {
        document.getElementById("error-email").textContent = "";
    }

    
    if (edad < 18 || edad >= 100) {
        mensajeError += "Edad inválida. Debe ser mayor a 18 años.\n";
        document.getElementById("error-edad").textContent = "Edad inválida";
    } else {
        document.getElementById("error-edad").textContent = "";
    }

   
    if (mensaje.length === 0 || mensaje.length > 200) {
        mensajeError += "Mensaje inválido. Debe tener entre 1 y 200 caracteres.\n";
        document.getElementById("error-mensaje").textContent = "Mensaje inválido";
    } else {
        document.getElementById("error-mensaje").textContent = "";
    }

    if (mensajeError !== "") {
        alert("Corrija los siguientes errores:\n" + mensajeError);
        return false;
    }

   
    var datosIngresados = "Nombre: " + nombre + "<br>Email: " + email + "<br>Edad: " + edad + "<br>Mensaje: " + mensaje;
    document.getElementById("datos-ingresados").innerHTML = datosIngresados;
    document.getElementById("formulario").style.display = "none";
    document.getElementById("mensaje-enviado").style.display = "block";

    return false; 
}
