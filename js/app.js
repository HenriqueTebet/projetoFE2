/************ Criando função para Obter a Url proposta pelo Usuario ************ */
let pegarValor = function(){
    document.querySelector("input");
    let urlImagem = document.getElementById("url").value;
    return urlImagem
}


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

// let titulo = document.getElementById("titulo-carro").value;
// let descricao = document.getElementById("descricaoP").value;

/************ Adicionamos uma função ao button com base em um evento *************/
button.addEventListener("click",function(event){
    event.preventDefault();
    let img = document.querySelector("img");
    img.setAttribute("src",`${pegarValor()}`);
    
    
    
    document.getElementById("titulo-carro").innerHTML += titulo.value.trim();
    document.getElementById("descricaoP").innerHTML += descricao.value.trim();
    
    validarCampos();

    // let card = document.getElementById("cards");

    // card.innerHTML += titulo.value.trim()
    // card.innerHTML += descricao.value.trim();
    // card.innerHTML += img.value;

})



// let urlImg = ""
// let imagemTexto = document.getElementById("url_img")
// window.onload = imagemTexto.focus()

// function createCard() {

//     urlImg = document.getElementById("url_img").value


//     let cardSection = document.getElementById("card");
//     cardSection.innerHTML += <div> <img src="${urlImg}"></div>;
// }

// imagemTexto.addEventListener('keydown', function(event) {
//     if (imagemTexto.value.length >= 12 && event.key != "Backspace") {
//         imagemTexto.blur()
//         document.querySelector("button").focus()
//     }
// })