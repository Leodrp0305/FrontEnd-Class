console.log("JS Online");

//Exe01
function exe01botao() {
let Exe01nome, Exe01paragrafo;
Exe01nome = document.getElementById("Exe01name").value;
Exe01paragrafo = document.getElementById("Exe01paragrafo");

if(Exe01nome != "") {
    Exe01paragrafo.innerText = "Olá, "+Exe01nome + ". Seja Bem-vindo(a)!"
} else {
    Exe01paragrafo.innerText = "Digite seu nome!";
    Exe01paragrafo.style.color ="red";
    }
}

//Exe02
function exe02botao() {
let Exe02paragrafo, Exe02btn;
Exe02paragrafo = document.getElementById("Exe02paragrafo");
Exe02btn = document.getElementById("Exe02btn");
if (Exe02btn.innerText == "Mudar estilo") {
    Exe02paragrafo.style.color ="white";
    Exe02paragrafo.style.backgroundColor="black";
    Exe02btn.innerText = "Retornar estilo";
} else {
    Exe02paragrafo.style.color ="";
    Exe02paragrafo.style.backgroundColor="";
    Exe02btn.innerText = "Mudar estilo";
}


}
//Exe03

function trocar (x) {
document.body.style.background  = x;
document.body.style.color="white";
}
function Original() {
document.body.style.background = "";
document.body.style.color="";
}

//Exe04

function Exe04CriarParagrafo(){
    let paragrafos, novo;
    paragrafos = document.getElementById("Exe04paragrafos");
    novo = document.createElement("p");
    novo.innerText = "Elemento adicionado via JS";
    paragrafos.appendChild(novo);
}

function Exe04RemoverParagrafo(){
    let paragrafos, ultimoParagrafo;
    paragrafos = document.getElementById("Exe04paragrafos");
    ultimoParagrafo = paragrafos.lastElementChild;
    paragrafos.removeChild(ultimoParagrafo);
}

function Exe04LimparParagrafo() {
    let contador,i,paragrafos;
    paragrafos = document.getElementById("Exe04paragrafos");
    contador = paragrafos.children.length;
    console.log(contador);
   for (i = 0; i < contador; i++){
    Exe04RemoverParagrafo();
    }
}

//Exe05
function Exe05btn(){
    let Exe05btn,img;
    Exe05btn = document.getElementById("Exe05btn");
    img = document.getElementById("Exe05imagem");
    if (Exe05btn.innerText == "sumiu!"){
        img.style.display = "block";
        Exe05btn.innerText = "achou!";
    } else {
        img.style.display = "none";
        Exe05btn.innerText = "sumiu!";
    }
}

//Exe06

function Exe06Select(x) {
    let img;
    img = document.getElementById("Exe06img");

    switch(x) {
        case "Pikachu":
        img.src = "./img/pikachu.jpeg";
        break;
        case "Galinha":
        img.src = "./img/Buque_de_galinha.jpeg";
        break;
    }
}

//Exe07

function Exe07DivEnter(){
    let div = document.getElementById("Exe07Div");
    div.style.width = "400px";
    div.style.height= "400px";
    div.style.background = "green";

}

function Exe07DivLeave(){
    let div = document.getElementById("Exe07Div");
    div.style.width = "300px";
    div.style.height= "300px";
    div.style.background = "blue";
}

//Exe08

function Exe08Aparecer(){
    let paragrafo;
    paragrafo = document.getElementById("Exe08Paragrafo");
    paragrafo.style.opacity = "1";
}

function Exe08Desaparecer(){
    let paragrafo;
    paragrafo = document.getElementById("Exe08Paragrafo");
    paragrafo.style.opacity = "0";
}

//Exe09
