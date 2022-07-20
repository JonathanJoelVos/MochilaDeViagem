const form = document.getElementById("novoItem");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event.target.elements["nome"].value);
    console.log(event.target.elements["quantidade"].value);
}
)