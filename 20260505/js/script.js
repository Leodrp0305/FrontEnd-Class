console.log("Console via JS externo");

//DOM PROPRIEDADES
let tit = document.title;
let url = document.URL;

console.log("O titulo da página é: " + tit);
console.log("O link da página é: " + url);

let corpo = document.body;
let cabeca = document.head;

console.log(corpo);
console.log(cabeca);

//imagens e links 

let array_imgs = document.images;
console.log("Essa pagina tem " + array_imgs.length +" imagens");

let array_links = document.links;
console.log("Essa pagina tem " + array_links.length + " links");
for (let i = 0; i < array_links.length; i++){
        console.log("O texto do link " + (i + 1) + " é " + array_links[i].innerText);
        console.log("O texto do link " + (i + 1) + " é " + array_links[i].innerHTML);
}
console.log(document.array_links);

//Formularioo CTRL + SHIF
let data_forms = document.forms["form_contato"];
for (let i = 0; i < data_forms.length; i++){
        console.log("nome do elemento: "+ data_forms.elements[i].name);
        console.log("placeholder do elemento: "+ data_forms.elements[i].placeholder);
        console.log("tipo do elemento: "+ data_forms.elements[i].type);
}

//DOM Metodos
let p1 = document.getElementById("prim_paragr");
console.log(p1);
p1.style.color = "blue";
p1.style.fontSize = "25px";

//getElementByTagName 
let array_Tit1 = document.getElementsByTagName("h1");
for (let i = 0; i < array_Tit1.length; i++){
        console.log("Elemento h1: "+ (i+1));
        console.log("O texto desse titulo é :" + array_Tit1[i]);
}

let array_camposForm = document.getElementsByClassName("campo");
console.log(array_camposForm);
for(let i = 0; i < array_camposForm.length; i++){
        console.log("o nome do campo é "+ array_camposForm[i].name);
        console.log("o place holder do campo é "+ array_camposForm[i].placeholder);
        console.log("a cor de fundo do campo é "+ array_camposForm[i].style_backgroundColor);
}

for(let i = 0; i < array_camposForm.length; i++) {
        array_camposForm[i].name = "nome_ "+i;
        array_camposForm[i].placeholder = "Digite aqui";
        array_camposForm[i].style.backgroundColor = "pink";
}

let array_nome = document.getElementsByName("Titulo_principal");
console.log(array_nome);
for (let i = 0; i < array_nome.length; i++){
        array_nome[i].innerText = "Novo Titulo Principal";
        array_nome[i].fontSize = "30";
        array_nome[i].style_backgroundColor = "pink";
}

let array_botao = document.querySelector(".botao");
array_botao.style.backgroundColor = "blue";
array_botao.style.color = "white";
array_botao.style.fontSize = "40px";

let B = document.querySelectorAll(".botao");
for(let i = 0; i < B.length; i++) {
        if(i > 0) {
                B[i].style.backgroundColor = "purple";
                B[i].style.color = "white";
                B[i].style.fontSize = "20px";
                }
        }       