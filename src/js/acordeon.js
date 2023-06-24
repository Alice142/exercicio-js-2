const itensPerguntasRespostas = document.querySelectorAll(".item");

itensPerguntasRespostas.forEach(function (item) {
    item.addEventListener("click", function(){
        item.classList.add("ativo");
        const itemAtivoAtual = document.querySelector(".ativo");
        itemAtivoAtual.classList.remove("ativo"); 


        item.classList.add("ativo");
    });

});