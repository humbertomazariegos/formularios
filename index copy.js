var Mousetrap = require('mousetrap');

var btnUno = document.getElementById('btnUno');
var btnDos = document.getElementById('btnDos');
var btnTres = document.getElementById('btnTres');
var btnCuatro = document.getElementById('btnCuatro');
var btnCinco = document.getElementById('btnCinco');
var btnSeis = document.getElementById('btnSeis');
var btnSiete = document.getElementById('btnSiete');
var btnOcho = document.getElementById('btnOcho');
var btnNueve = document.getElementById('btnNueve');
var btnCero = document.getElementById('btnCero');

var btnSuma = document.getElementById('btnSuma');
var btnResta = document.getElementById('btnResta');
var btnMult = document.getElementById('btnMult');
var btnDiv = document.getElementById('btnDiv');
var btnIgual = document.getElementById('btnIgual');
var btnCe = document.getElementById('btnCe');

var actualElemento = document.getElementById('actual');
var resultadoElemento = document.getElementById('resultado');
var historialElemento = document.getElementById('historial');

// Mousetrap.bind('1', clickBtnNumeroMousetrap('1'));
// Mousetrap.bind('2', clickBtnNumeroMousetrap('2'));
// Mousetrap.bind('3', clickBtnNumeroMousetrap('3'));
// Mousetrap.bind('4', clickBtnNumeroMousetrap('4'));
// Mousetrap.bind('5', clickBtnNumeroMousetrap('5'));
// Mousetrap.bind('6', clickBtnNumeroMousetrap('6'));
// Mousetrap.bind('7', clickBtnNumeroMousetrap('7'));
// Mousetrap.bind('8', clickBtnNumeroMousetrap('8'));
// Mousetrap.bind('9', clickBtnNumeroMousetrap('9'));
// Mousetrap.bind('0', clickBtnNumeroMousetrap('0'));

btnUno.addEventListener('click', clickBtnNumero);
btnDos.addEventListener('click', clickBtnNumero);
btnTres.addEventListener('click', clickBtnNumero);
btnCuatro.addEventListener('click', clickBtnNumero);
btnCinco.addEventListener('click', clickBtnNumero);
btnSeis.addEventListener('click', clickBtnNumero);
btnSiete.addEventListener('click', clickBtnNumero);
btnOcho.addEventListener('click', clickBtnNumero);
btnNueve.addEventListener('click', clickBtnNumero);
btnCero.addEventListener('click', clickBtnNumero);

btnSuma.addEventListener('click', clickSuma);
btnResta.addEventListener('click', clickResta);
btnMult.addEventListener('click', clickMultiplicacion);
btnDiv.addEventListener('click', clickDivision);
btnCe.addEventListener('click', clickCe);
btnIgual.addEventListener('click', clickIgual);

var actual = "";
var resultado = 0;
var operacion = null;
var historial = [];


function clickBtnNumero(e){
    actual += e.path[0].innerHTML;
    actualElemento.innerHTML += e.path[0].innerHTML;
}

function clickBtnNumeroMousetrap(i){
    actual.innerHTML += i;
}

function clickSuma(){
    operacion = 'suma';
    if(actual != ''){
        resultado += parseInt(actual);
        historial.push('suma: ' + actual + " resultado: " + resultado);
        actual = '';
        actualElemento.innerHTML = '';
        resultadoElemento.innerHTML = resultado;
    }
    imprimeHistorial();
}

function clickResta(){
    operacion = 'resta';
    if(parseInt(resultado) == 0){
        resultado = parseInt(actual);
        actual = '';
        actualElemento.innerHTML = '';
        resultadoElemento.innerHTML = resultado;
    }
    if(actual != ''){
        resultado -= parseInt(actual);
        historial.push('resta: ' + actual + " resultado: " + resultado);
        actual = '';
        actualElemento.innerHTML = '';
        resultadoElemento.innerHTML = resultado;
    }
    imprimeHistorial()
}

function clickMultiplicacion(){
    operacion = 'multiplicacion';
    if(parseInt(resultado) == 0){
        resultado = parseInt(actual);
        actual = '';
        actualElemento.innerHTML = '';
        resultadoElemento.innerHTML = resultado;
    }
    if(actual != ''){
        resultado *= parseInt(actual);
        historial.push('multiplica: ' + actual + " resultado: " + resultado);
        actual = '';
        actualElemento.innerHTML = '';
        resultadoElemento.innerHTML = resultado;
    } 
    imprimeHistorial()  
}

function clickDivision(){
    operacion = 'division';
    if(parseInt(resultado) == 0){
        resultado = parseInt(actual);
        actual = '';
        actualElemento.innerHTML = '';
        resultadoElemento.innerHTML = resultado;
    }
    if(actual != ''){
        resultado /= parseInt(actual);
        historial.push('divide: ' + actual + " resultado: " + resultado);
        actual = '';
        actualElemento.innerHTML = '';
        resultadoElemento.innerHTML = resultado;
    }
    imprimeHistorial()
}

function clickCe(){
    actual = '';
    resultado = 0;
    actualElemento.innerHTML = '';
    resultadoElemento.innerHTML = '0';
}

function clickIgual(){
    switch(operacion){
        case 'suma':
            resultado = parseInt(actual) + parseInt(resultado);
            historial.push('suma: ' + actual + " resultado: " + resultado);
            actualElemento.innerHTML = '';
            resultadoElemento.innerHTML = resultado;
            imprimeHistorial()
            break;
        case 'resta':
            resultado = parseInt(actual) - parseInt(resultado);
            historial.push('resta: ' + actual + " resultado: " + resultado);
            actualElemento.innerHTML = '';
            resultadoElemento.innerHTML = resultado;
            imprimeHistorial()
            break;
        case 'multiplicacion':
            resultado = parseInt(actual) * parseInt(resultado);
            historial.push('multiplica: ' + actual + " resultado: " + resultado);
            actualElemento.innerHTML = '';
            resultadoElemento.innerHTML = resultado;
            imprimeHistorial()
            break;
        case 'division':
            resultado = parseInt(actual) / parseInt(resultado);
            historial.push('divide: ' + actual + " resultado: " + resultado);
            actualElemento.innerHTML = '';
            resultadoElemento.innerHTML = resultado;
            imprimeHistorial()
            break;

    }
}

function imprimeHistorial(){
    historialElemento.innerHTML = '';
    var htmlHistorial = "<h3>Historial</h3>";
    function dataHistorial(item){
        htmlHistorial += '<p>'+ item +'</p>';
    }
    historial.forEach(dataHistorial);
    historialElemento.innerHTML = htmlHistorial;
}