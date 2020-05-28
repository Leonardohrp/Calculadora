var btn0Element = document.querySelector('button[name=btn0]');
var btn1Element = document.querySelector('button[name=btn1]');
var btn21Element = document.querySelector('button[name=btn2]');
var btn3Element = document.querySelector('button[name=btn3]');
var btn4Element = document.querySelector('button[name=btn4]');
var btn5Element = document.querySelector('button[name=btn5]');
var btn6Element = document.querySelector('button[name=btn6]');
var btn7Element = document.querySelector('button[name=btn7]');
var btn8Element = document.querySelector('button[name=btn8]');
var btn9Element = document.querySelector('button[name=btn9]');
var btnPlusElement = document.querySelector('button[name=btn-plus]');
var btnMinusElement = document.querySelector('button[name=btn-minus]');
var btnTimesElement = document.querySelector('button[name=btn-times]');
var btnDivisionElement = document.querySelector('button[name=btn-division]');
var btnCommaElement = document.querySelector('button[name=btn-comma]');
var btnEqualElement = document.querySelector('button[name=btn-equal]');
var btnClearElement = document.querySelector('button[name=btn-clear]');
var resultElement = document.querySelector('p[name=btn-result]');



btn7Element.onclick = function mostrarValor() {
    resultElement.innerHTML = resultElement.innerHTML + btn7Element.value;
}

