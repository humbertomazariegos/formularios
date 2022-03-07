var btn_submit = document.getElementById('btn_submit');
btn_submit.addEventListener("click", validar);


var validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var validRegexNumbers = /^\d+$/;
var validRegexPassword = /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;

//Aqui creo un arreglo de los campos, para no tener que validar uno por uno
//He trabajado varios formularios en el trabajo XD
var campos = [
    'email', 'user', 'dpi', 'phone', 'birht_date', 'password'
]

var nombre = document.getElementById("user");

function validar(e){
    e.preventDefault();
    campos.forEach(validarCampoVacio);

    
    
    var valTamUser = validarTamanoCampo('user', 8);
    var valTamDpi = validarTamanoCampo('dpi', 13);
    var valTamPho = validarTamanoCampo('phone', 8);
    var valE = validarEmail();
    var valPho = validarTelefono();
    var valCo = validarContrasenia();
    var valDpi = validarDPI();
    
    if(valTamUser == 1 && valTamDpi == 1 && valTamPho == 1 && valE == 1 && valPho == 1 && valCo == 1 && valDpi == 1){
        window.comunicacion.registroValido([0, nombre.value]);
    }else{
        window.comunicacion.registroValido([4, "No se valido correctamente"]);
    }
    
    
}

//Esta funcion valida con el nombre del campo que no este vacio
//Despues revisa y envia a mostrar el error en la etiqueta [campo]_error
//Esto lo saque de varios proyectos que he trabajado con angularJs
function validarCampoVacio(campo){
    let camp = document.getElementById(campo);
    let error = document.getElementById(campo + '_error');
    if(camp.value == '' || camp.value == null || camp.value == undefined){
        error.innerHTML = 'El campo --' + campo + '-- no puede estar vacio.';
        camp.classList.add('is-invalid');
        return 0;
    }else{
        error.innerHTML = '&nbsp;'
        camp.classList.remove('is-invalid');
        return 1;
    }
}

function validarEmail(){
    let email = document.getElementById('email');
    let email_error = document.getElementById('email_error');
    if (email.value.match(validRegexEmail)){
        email.classList.remove('is-invalid');        
        return 1;
      } else {
        email_error.innerHTML = 'El campo no es un correo valido'
        email.classList.add('is-invalid');
        return 0;
    } 
}

function validarTelefono(){
    let phone = document.getElementById('phone');
    let phone_error = document.getElementById('phone_error');
    if (phone.value.match(validRegexNumbers)){
        phone.classList.remove('is-invalid');
        return 1;
    } else {
        phone_error.innerHTML = 'El campo no es un teléfono valido'
        phone.classList.add('is-invalid');
        return 0;
    } 
}

function validarDPI(){
    let dpi = document.getElementById('dpi');
    let dpi_error = document.getElementById('dpi_error');
    if (dpi.value.match(validRegexNumbers)){
        dpi.classList.remove('is-invalid');
        return 1;
    } else {
        dpi_error.innerHTML = 'El campo no es un DPI valido'
        dpi.classList.add('is-invalid');
        return 0;
    } 
}

function validarContrasenia(){
    let password = document.getElementById('password');
    let password_error = document.getElementById('password_error');
    if (password.value.match(validRegexPassword)){
        password.classList.remove('is-invalid');
        return 1;
    } else {
        password_error.innerHTML = 'La contraseña debe tener MAYUSCULA, minuscula, 0-9, simbolo';
        password.classList.add('is-invalid');
        return 0;
    }
}


function validarTamanoCampo(campo, tamano){
    let camp = document.getElementById(campo);
    let error = document.getElementById(campo + '_error');
    if(camp.value.length < tamano){
        error.innerHTML = 'El campo debe tener mínimo ' + tamano + ' carácteres' ;
        camp.classList.add('is-invalid');
        return 0;
    }else{
        error.innerHTML = '&nbsp;'
        camp.classList.remove('is-invalid');
        return 1;
    }
}