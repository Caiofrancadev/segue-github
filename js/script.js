// form home
function enviarMensagemWhatsApp() {
    // Captura os valores dos campos de entrada
    var tipoEmprestimo = document.getElementById("tipoEmprestimo").value;
    var valor = document.getElementById("valor").value;
    var tempo = document.getElementById("tempo").value;
    var entrada = document.getElementById("entrada").value;
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    // Monta a frase com as informações
    var mensagem = "Olá, me chamo " + nome + " " + sobrenome + ". Gostaria de simular um " + tipoEmprestimo + ". Aqui estão as informações:\n\n";
    mensagem += "Valor em dinheiro (R$): " + valor + "\n";
    mensagem += "Quanto tempo (mês): " + tempo + "\n";
    mensagem += "Quanto de entrada: " + entrada + "\n";

    // Abre uma nova janela com o link para o WhatsApp do consultor
    var link = "https://api.whatsapp.com/send?phone=NUMERO_DO_CONSULTOR_AQUI&text=" + encodeURIComponent(mensagem);
    window.open(link, "_blank");
}
