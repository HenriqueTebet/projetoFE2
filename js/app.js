

// Criamos uma variavel para armazenar o button
let button = document.getElementById("enviar");


// criando um verificação para os tres campos de input
let verificarCampos = document.getElementsByName("Verificar");

//Função para validação parcial 
function validarCampos (){
    
    if(verificarCampos[0].value == ""){
        alert('Por favor, preencha o campo nome');
        // document.getElementsByName("Verificar").focus();
    }
    else if(verificarCampos[1].value == ""){
        alert('Por favor, preencha  o descricao');
    // document.getElementsByName("Verificar").focus();
    }
    else if(verificarCampos[2].value == ""){
    alert('Por favor, preencha a url');
    // document.getElementsByName("Verificar").focus();
    }

    
}

let titulo = "";
let descricao = "";
let urlImagem = "";


function criarCard(){
    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;
    let urlImagem = document.getElementById("url").value;
    
    let card = document.getElementById("cards");
    
    card.innerHTML += `<div> <img src="${urlImagem}">
    <h2 id="titulo-carro">${titulo}</h2>
    <p id="descricaoP" >${descricao}</p> </div>`;
    
    
}

/************ Adicionamos uma função ao button com base em um evento *************/
button.addEventListener("click",function(event){
    event.preventDefault();
    // let img = document.querySelector("img");
    // img.setAttribute("src",`${pegarValor()}`);
    
    
    criarCard();
    validarCampos();

})

