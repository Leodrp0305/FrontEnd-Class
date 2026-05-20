
function captura(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
}
function MostraResult(b,d) {
    let result = document.getElementById("resultado");
  
    result.value = n1 + b + n2 + " = " + d;
}
function soma() {
    captura();
    let resultado = (Number(n1) + Number(n2));
    MostraResult("+",resultado);
}

function subtracao() {
    captura();
    let resultado = (Number(n1) -+ Number(n2));
    MostraResult("-",resultado);
}

function divisao() {
    captura();
    let resultado = (Number(n1) / Number(n2));
    MostraResult("/",resultado);

}

function multiplicacao() {
    captura();
    let resultado = (Number(n1) * Number(n2));
    MostraResult("*",resultado);
}

