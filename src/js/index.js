
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaotrocaDeTema = document.getElementById("imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if(modoEscuroAtivo == true) { // Muda para o modo claro
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/sun.png"); 
        
    } else{ // Muda para o modo escuro
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/moon.png"); 
    }

});

