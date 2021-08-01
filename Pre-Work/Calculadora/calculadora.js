
document.getElementById('button-suma').addEventListener('click',suma)

var operatorResta = document.getElementById('button-resta')
operatorResta.addEventListener('click',resta)

document.getElementById('button-multiplicacion').addEventListener('click', function(){
    multiplicacion()
})

function suma() {
    // Coger sumando izquierdo
    // Coger sumando derecho
    // Sumarlos
    // Escribir resultado
    var sumandoIzquierdo = document.getElementById('left');
    var sumandoDerecho = document.getElementById('right');

    var resultadoSuma = parseFloat(sumandoIzquierdo.value) + parseFloat(sumandoDerecho.value);

    showOperator('+');
    showResult(resultadoSuma);
}

function resta() {
    var restandoIzquierdo = document.getElementById('left');
    var restandoDerecho = document.getElementById('right');

    var resultadoResta = parseFloat(restandoIzquierdo.value) - parseFloat(restandoDerecho.value);

    showOperator('-');
    showResult(resultadoResta);
}

function multiplicacion() {
    var multiplicandoIzquierdo = document.getElementById('left');
    var multiplicandoDerecho = document.getElementById('right')

    var resultadoMultiplicacion = parseFloat(multiplicandoIzquierdo.value) * parseFloat(multiplicandoDerecho.value);

    showOperator('*');
    showResult(resultadoMultiplicacion);
}

function division() {
    var dividendoIzquierdo = document.getElementById('left');
    var dividendoDerecho = document.getElementById('right')

    var resultadoDivision = parseFloat(dividendoIzquierdo.value) / parseFloat(dividendoDerecho.value);
    
    showOperator('/');
    showResult(resultadoDivision);
}

function showResult(value){
    var elementResult = document.getElementById('result');
    elementResult.innerText = value;

}

function showOperator(operator){
    var elementOperator = document.getElementById('operator');
    elementOperator.innerText = operator;
}



