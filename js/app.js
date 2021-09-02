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
    alert('Por favor, preencha o todos os nome');
    // document.getElementsByName("Verificar").focus();
    }
    else if(verificarCampos[1].value == ""){
    alert('Por favor, preencha o todos os descricao');
    // document.getElementsByName("Verificar").focus();
    }
    else if(verificarCampos[2].value == ""){
    alert('Por favor, preencha o todos os url');
    // document.getElementsByName("Verificar").focus();
    }

}



/************ Adicionamos uma função ao button com base em um evento *************/
button.addEventListener("click",function(event){
    event.preventDefault();
    let img = document.querySelector("img");
    img.setAttribute("src",`${pegarValor()}`);

    validarCampos();
})



