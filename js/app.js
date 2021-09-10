

// Criamos uma variavel para armazenar o button
let button = document.getElementById("enviar");


// criando um verificação para os tres campos de input
let verificarCampos = document.getElementsByName("Verificar");

//Função para validação parcial 
function validarCampos() {

    if (verificarCampos[0].value == "") {
        alert('Por favor, preencha o campo nome');
        return

    }
    else if (verificarCampos[1].value == "") {
        alert('Por favor, preencha  o descricao');
        return
        
    }
    else if (verificarCampos[2].value == "") {
        alert('Por favor, preencha a url');
        return
        
    }

    criarCard();

}

let titulo = "";
let descricao = "";
let urlImagem = "";
let element = 0;
let json = {
    'id': [],
    'imagemJson': [],
    'tituloJson': [],
    'descricaoJson': []
}


function criarCard() {
    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;
    let urlImagem = document.getElementById("url").value;

    let card = document.getElementById("container-cards");

    card.innerHTML += `<div class="cards"> <img src= "${urlImagem}">
    <h2 id="titulo-carro">${titulo}</h2>
    <p id="descricaoP" >${descricao}</p> </div>`;



    json.imagemJson.push(urlImagem);
    json.tituloJson.push(titulo);
    json.descricaoJson.push(descricao);

    json = JSON.stringify(json);


    localStorage.setItem("json", json);
    json = JSON.parse(json);

}


/************ Adicionamos uma função ao button com base em um evento *************/
button.addEventListener("click", function (event) {
    event.preventDefault();

    validarCampos();

})




window.onload = function () {

    let array = localStorage.getItem("json");
    array = JSON.parse(array);


    for (element in array.imagemJson) {

        let card = document.getElementById("container-cards");
        card.innerHTML += `<div class="cards"> <img src= "${array.imagemJson[element]}">
            <h2 id="titulo-carro">${array.tituloJson[element]}</h2>
            <p id="descricaoP" >${array.descricaoJson[element]}</p> </div>`;

        json.imagemJson.push(array.imagemJson[element]);
        json.tituloJson.push(array.tituloJson[element]);
        json.descricaoJson.push(array.descricaoJson[element]);
    }

}

