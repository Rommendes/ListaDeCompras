import { criarItemDaLista}  from "./scripts/criarItemDaLista.js";
import verificarListavazia from "./scripts/verificarListasVazias.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");



botaoAdicionar.addEventListener("click", (evento)=>{
    evento.preventDefault();
    //chama os itens da lista criada
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    
    verificarListavazia(listaDeCompras);
})  


    verificarListavazia(listaDeCompras);

    
    