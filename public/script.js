
let funcionarios =
    JSON.parse(localStorage.getItem("funcionarios")) || [];


const listaFuncionarios =
    document.getElementById("listaFuncionarios");

const quantidade =
    document.getElementById("quantidade");

const btnCadastrar =
    document.getElementById("btnCadastrar");


function salvarLocalStorage() {
    localStorage.setItem(
        "funcionarios",
        JSON.stringify(funcionarios)
    );
}


function atualizarQuantidade() {
    quantidade.textContent =
        `Total de funcionários: ${funcionarios.length}`;
}


function listarFuncionarios() {

    listaFuncionarios.innerHTML = "";

    funcionarios.forEach(funcionario => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${funcionario.nome}</h3>
            <p><strong>E-mail:</strong> ${funcionario.email}</p>
            <p><strong>Cargo:</strong> ${funcionario.cargo}</p>
            <p><strong>Departamento:</strong> ${funcionario.departamento}</p>
        `;

        listaFuncionarios.appendChild(card);
    });

    atualizarQuantidade();
}


function cadastrarFuncionario() {

    const nome =
        document.getElementById("nome").value;

    const email =
        document.getElementById("email").value;

    const cargo =
        document.getElementById("cargo").value;

    const departamento =
        document.getElementById("departamento").value;

    const senha =
        document.getElementById("senha").value;

    if (
        nome === "" ||
        email === "" ||
        cargo === "" ||
        departamento === "" ||
        senha === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    const novoFuncionario = {
        id: Date.now(),
        nome,
        email,
        cargo,
        departamento,
        senha
    };

    funcionarios.push(novoFuncionario);

    salvarLocalStorage();
    listarFuncionarios();

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("departamento").value = "";
    document.getElementById("senha").value = "";
}


btnCadastrar.addEventListener(
    "click",
    cadastrarFuncionario
);


listarFuncionarios();