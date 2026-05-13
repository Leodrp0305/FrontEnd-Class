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

let Array_imgs = document.images;
console.log("Essa pagina tem " + Array_imgs.length +" imagens");
let Array_links = document.links;
console.log("Essa pagina tem " + Array_Links.length + " links");
for (let i = 0; 0 <= Array_Links.length; i++) {
        console.log("O texto do link " + (i + 1) + " é " + links[i].innerText);
        console.log("O texto do link " + (i + 1) + " é " + links[i].innerHTML);
}
console.log(document.Array_links);

//Formulario
let data_forms = document.forms["form_contato"];
for (let i = 0; i < data_forms.length; i++){
        console.log("nome do elemento: "+ data_forms.elements[i].name);
        console.log("placeholder do elemento: "+ data_forms.elements[i].placeholder);
        console.log("tipo do elemento: "+ data_forms.elements[i].type);
}

