const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
let itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(element => {
    criarElemento(element);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let nome = event.target.elements["nome"].value;
    let quantidade = event.target.elements["quantidade"].value;

    let existe = itens.find((element) => element.nome === nome);//retorna o elemento

    let itemAtual = {
        nome: nome,
        quantidade: quantidade
    }

    if (existe) {
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);
        itens.findIndex((elemento) => {
            elemento.id === existe.id
        }, 1) = itemAtual;
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1].id + 1) : 0;
        console.log(itemAtual.id)
        criarElemento(itemAtual);

        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens))

    form.reset();
})

function criarElemento(item) {

    let li = document.createElement("li");
    li.classList.add("item");

    let strong = document.createElement("strong");
    strong.textContent = item.quantidade;
    strong.dataset.id = item.id
    li.appendChild(strong);
    li.innerHTML += item.nome;

    li.appendChild(botaoDeleta(item.id));

    lista.appendChild(li);

    /* console.log(localStorage.key(0)) */ // retorna itens

}

function atualizaElemento(item) {
    document.querySelector("[data-id = '" + item.id + "']").innerHTML = item.quantidade;
}

function botaoDeleta(id) {
    const botao = document.createElement("button");
    botao.innerText = "X";

    botao.addEventListener("click", function (event) {
        /* event.target.parentNode.remove()  ou...*/
        this.parentNode.remove();

        itens.splice(itens.findIndex((element) => {
            element.id === id;
        }), 1)
        localStorage.setItem("itens", JSON.stringify(itens))
    })

    return botao;
}
