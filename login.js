function login(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario == "KAIOMF97" && senha == "06052008"){
        window.location.href = "notas.html";
    }
    else {
        alert("Dados Incorretos")
    }
}

function salvar(){
    const conteudo = document.getElementById("notas").value;
    localStorage.setItem("notasUsuario", conteudo);
    alert("Anotações salvas com sucesso!");
}

function carregar() {
    const notasSalvas = localStorage.getItem("notasUsuario");
    if (notasSalvas) {
        document.getElementById("notas").value = notasSalvas;
    }
}

// Carrega as anotações ao abrir a página de notas
if (window.location.pathname.endsWith("notas.html")) {
    carregar();
}