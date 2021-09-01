


let pegarValor = function(){
    document.querySelector("input");
    let urlImagem = document.getElementById("url").value;
    // urlImagem.setAttribute("src","urlImagem")
    return urlImagem
}

let button = document.getElementById("enviar");


// button.setAttribute("")


button.addEventListener("click",function(event){
    event.preventDefault();
    let imge = document.querySelector("img");
    imge.setAttribute("src",`${pegarValor()}}`);
    // let url = pegarValor();
    console.log(imge);
});

