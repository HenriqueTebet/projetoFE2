/************ Criando função para Obter a Url proposta pelo Usuario ************ */
let pegarValor = function(){
    document.querySelector("input");
    let urlImagem = document.getElementById("url").value;
    return urlImagem
}


// Criamos uma variavel para armazenar o button
let button = document.getElementById("enviar");


/************ Adicionamos uma função ao button com base em um evento *************/
button.addEventListener("click",function(event){
    event.preventDefault();
    let img = document.querySelector("img");
    img.setAttribute("src",`${pegarValor()}`);
});

