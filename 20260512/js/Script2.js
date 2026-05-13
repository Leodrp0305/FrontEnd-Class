
function calculamedia() {
    let calculo = document.getElementById("media").value;
    let numero = calculo.split("/");
    let total = 0;
    for(let i = 0; i < numero.length; i++) {
        total += Number(numero[i]);
    }
    let resultadoMedia = total/Number(numero.length);
    let saidaMedia = document.getElementById("resultadoMedia");
    saidaMedia.innerText = "a média é " +resultadoMedia;
}

function verifica(){
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    let num3 = Number(document.getElementById("n3").value);
    console.log(num1);
    console.log(num2);
    console.log(num3);
    let maior =0;

    if(num1 > num2 && num1 > num3) {
        maior = num1;
    } else if(num2 > num1 && num2 > num3) {
        maior = num2;
    } else if(num3 > num1 && num3 > num2) {
        maior = num3;
    }

    let paragrafo = document.getElementById("maior");
    paragrafo.innerText = "O maior número é: "+maior;
}