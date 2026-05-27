console.log("JS Online");

//Exe01

let btnExe01;
btnExe01 = document.getElementById("botaoExe01");
btnExe01.addEventListener("click", exe01botao)
function exe01botao() {
let Exe01nome, Exe01paragrafo;
Exe01nome = document.getElementById("Exe01name").value;
Exe01paragrafo = document.getElementById("Exe01paragrafo");

if(Exe01nome != "") {
    Exe01paragrafo.innerText = "Olá, "+Exe01nome + ". Seja Bem-vindo(a)!"
    Exe01paragrafo.style.color ="";
} else {
    Exe01paragrafo.innerText = "Digite seu nome!";
    Exe01paragrafo.style.color ="red";
    }
}

//Exe02
let Exe02paragrafo, Exe02btn;
Exe02paragrafo = document.getElementById("Exe02paragrafo");
Exe02btn = document.getElementById("Exe02btn");
Exe02btn.addEventListener("click", exe02botao);

function exe02botao() {
let Labelbtn = Exe02btn.innerText;
if (Labelbtn == "Mudar estilo") {
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
let btnExe03 = document.querySelectorAll(".Exe03btn");
for (let i = 0; i < btnExe03.length; i++){
    btnExe03[i].addEventListener("click", trocar);
}
function trocar() {
    let cor = this.dataset.cor;    
    document.body.style.background = cor;
    if (cor != "") {
    document.body.style.color="white";
    } else {
    document.body.style.color=""; 
    }
}

//Exe04
let Exe04Criar = document.getElementById("Exe04Criar");
let Exe04Remover = document.getElementById("Exe04Remover");
let Exe04Limpar = document.getElementById("Exe04Limpar");

Exe04Criar.addEventListener("click", Exe04CriarParagrafo);
Exe04Remover.addEventListener("click", Exe04RemoverParagrafo);
Exe04Limpar.addEventListener("click", Exe04LimparParagrafo);
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
let Exe05butn = document.getElementById("Exe05btn");
Exe05butn.addEventListener("click", Exe05btn);
function Exe05btn(){
    let img, btnTxt;
    img = document.getElementById("Exe05imagem");
    if (Exe05butn.innerText == "sumiu!"){
        img.style.display = "block";
        Exe05butn.innerText = "achou!";
    } else {
        img.style.display = "none";
        Exe05butn.innerText = "sumiu!";
    }
}

//Exe06
let Exe06slct = document.getElementById("Exe06Select");
Exe06slct.addEventListener("change",Exe06Select);
function Exe06Select() {
    let img, select;
    img = document.getElementById("Exe06img");
    select = Exe06slct.value;
    switch(select) {
        case "Pikachu":
        img.src = "./img/pikachu.jpeg";
        break;
        case "Galinha":
        img.src = "./img/Buque_de_galinha.jpeg";
        break;
    }
}

//Exe07
    let div = document.getElementById("Exe07Div");
    div.addEventListener("mouseenter", Exe07DivEnter);
    div.addEventListener("mouseleave", Exe07DivLeave);
function Exe07DivEnter(){
    div.style.width = "400px";
    div.style.height= "400px";
    div.style.background = "green";
}

function Exe07DivLeave(){
    div.style.width = "300px";
    div.style.height= "300px";
    div.style.background = "blue";
}

//Exe08
let imgExe08 = document.getElementById("Exe08Img");
imgExe08.addEventListener ("mouseover", Exe08Aparecer);
imgExe08.addEventListener ("mouseout", Exe08Desaparecer);
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
    let Exe09btn = document.getElementById("Exe09btn");
    Exe09btn.addEventListener("click", Exe09Gerarlista);
function Exe09Gerarlista(){
    let div, li, txt, Txtitem;
    txt = document.getElementById("Exe09CaixaDeTexto").value;
    if (txt != "") {
            txt = Number(txt);
            div = document.getElementById("Exe09lista");
        for (let i=0; i< txt; i++){
                Txtitem = prompt("Digite o texto do "+(i+1)+"º item");
                li = document.createElement("li");
                li.innerText = Txtitem;
                div.appendChild(li);
        }   
    }else {
        alert("Digite o número de itens  que deseja inserir!");
    }


}

//Exe10
let Exe10produtosAdd = document.querySelectorAll(".produtoAdd");
let Exe10produtosRmv = document.querySelectorAll(".produtoRmv");


for(let i=0; i < Exe10produtosAdd.length; i++){
    Exe10produtosAdd[i].addEventListener("click",Exe10AdicionarItem);
}   

for(let i=0; i < Exe10produtosRmv.length; i++){
    Exe10produtosRmv[i].addEventListener("click",Exe10RemoverItem);
}   

let Exe10Lista = document.getElementById("Exe10Lista");
let valor = document.getElementById("Exe10Valor");
let soma = 0;
function Exe10AdicionarItem() {
    let li = document.createElement("li");
    li.innerText = this.dataset.descr;
    Exe10Lista.appendChild(li);
    soma = soma + Number(this.dataset.preco);
    valor.innerText ="R$"+ soma;
}

function Exe10RemoverItem() {
    let li = document.createElement("li");
    li.innerText = this.dataset.descr;
    Exe10Lista.removeChild(li);
    soma = soma - Number(this.dataset.preco);
    valor.innerText ="R$"+ soma;
}