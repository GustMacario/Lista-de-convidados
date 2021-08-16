var convidados = JSON.parse(localStorage.getItem("convidados")) || [];

var elLista = document.getElementById("elLista");
var elCampo = document.getElementById("elCampo");
var elBotao = document.getElementById("elBotao");

elBotao.onclick = function () {
    var nome = elCampo.value;
    if (nome != "") {
        convidados.push({ nome: nome });
        elCampo.value = "";

        listarConvidados();
    };

    function salvarConvidados(){
        localStorage.setItem("convidados", JSON.stringify(convidados));
    };


function listarConvidados() {
    elLista.innerHTML = "";
    for ( const convidado of convidados) {
        var elConvidado = document.createElement("li");
        elConvidado.setAttribute("id", "convidado")
        var elNome = document.createTextNode(convidado.nome);

        var elExcluir = document.createElement("a");
        elExcluir.setAttribute("href", "#")
        elExcluir.setAttribute("id", "excluir")
        elExcluir.onclick = function (){
            convidados = convidados.filter(function(item) {
                return item.nome !== convidado.nome;
            });
            listarConvidados();    
        };
        var elExcluirTexto = document.createTextNode("Excluir")

        elExcluir.appendChild(elExcluirTexto);
        elConvidado.appendChild(elNome);
        elConvidado.appendChild(elExcluir);
        elLista.appendChild(elConvidado);
    }
}
listarConvidados();

}