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
let pattern6 = /^[\wñ]+@[\wñ]+(\.[\wñ]{2,4})+$/;
let pattern5 = /^[a-zA-Zñ]+$/;

function validarInput (){
    let email = document.querySelector("#email");
    email.classList.remove("error");

    let nombre = document.querySelector("#nombre");
    nombre.classList.remove("error");

    let apellido = document.querySelector("#apellido");
    apellido.classList.remove("error");

    let consulta = document.querySelector("#consulta");
    consulta.classList.remove("error");

    let textarea = document.querySelector("#textarea");
    textarea.classList.remove("error");
    
    let errorInput = document.querySelector("#errorInput");
    errorInput.innerHTML= "";
    errorInput.style.display = "none";

    let repuesta = document.querySelector("#repuesta");
    var verificador = false;



    if(!patter6.test(email.value)){
        let p = document.createElement("p");
        p.innerHTML= "Se ingreso incorrectamente el mail";
        email.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }
    if (email.value == ""){
        let p = document.createElement("p");
        p.innerHTML= "Ingrese un mail para continuar";
        email.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }



    if(!patter5.test(nombre.value)){
        let p = document.createElement("p");
        p.innerHTML= "Se ingreso incorrectamente el Nombre";
        nombre.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }
    if (nombre.value == ""){
        let p = document.createElement("p");
        p.innerHTML= "Ingrese su Nombre para continuar";
        nombre.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }



    if(!patter5.test(apellido.value)){
        let p = document.createElement("p");
        p.innerHTML= "Se ingreso incorrectamente su Apellido";
        apellido.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }
    if (apellido.value == ""){
        let p = document.createElement("p");
        p.innerHTML= "Ingrese su Apellido para continuar";
        apellido.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }


    if(!patter5.test(consulta.value)){
        let p = document.createElement("p");
        p.innerHTML= "Se ingreso incorrectamente el Motivo de la consulta";
        consulta.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }
    if (consulta.value == ""){
        let p = document.createElement("p");
        p.innerHTML= "Ingrese su Motivo de consulta para continuar";
        consulta.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }


    if (textarea.value == ""){
        let p = document.createElement("p");
        p.innerHTML= "Ingrese su Motivo de consulta para continuar";
        textarea.classList.add("error");
        errorInput.appendChild(p);
        verificador=true;
    }

    if(verificador){
        errorInput.style.display="initial";
    }else{
        let titulo = document.createElement("h2");
        titulo.innerHTML= "Se envio su consulta correctamente";
        let e = document.createElement("p");
        e.innerHTML= "Email: "+ email.value;
        let n = document.createElement("p");
        n.innerHTML= "Nombre: "+ nombre.value;
        let a = document.createElement("p");
        a.innerHTML= "Apellido: "+ apellido.value;
        let c = document.createElement("p");
        c.innerHTML= "Su motivo de consulta: "+ consulta.value;
        let t = document.createElement("p");
        t.innerHTML= "Su consulta: "+ textarea.value;

        repuesta.appendChild(titulo);
        repuesta.appendChild(e);
        repuesta.appendChild(n);
        repuesta.appendChild(a);
        repuesta.appendChild(c);
        repuesta.appendChild(t);
    }
    return false;
}
