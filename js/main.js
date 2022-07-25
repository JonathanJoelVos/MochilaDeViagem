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
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
    } else {
        itemAtual.id = itens.length
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

    lista.appendChild(li);

    /* console.log(localStorage.key(0)) */ // retorna itens

}

function atualizaElemento(item) {
}
