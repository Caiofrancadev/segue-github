// Função para mostrar ou ocultar o campo "Quanto de entrada"
function mostrarOcultarEntrada() {
    var tipoEmprestimo = document.getElementById("tipoEmprestimo").value;
    var entradaContainer = document.getElementById("entradaContainer");

    // Verifica se o tipo de empréstimo selecionado requer entrada
    if (tipoEmprestimo === "Financiamento de carro" || tipoEmprestimo === "Refinanciamento de carro") {
        entradaContainer.style.display = "block"; // Mostra o campo de entrada
    } else {
        entradaContainer.style.display = "none"; // Oculta o campo de entrada
    }
}

// Adiciona o evento onchange ao campo "Tipo de Empréstimo"
document.getElementById("tipoEmprestimo").addEventListener("change", mostrarOcultarEntrada);

// Função para enviar a mensagem via WhatsApp
function enviarMensagemWhatsApp() {
    // Captura os valores dos campos de entrada
    var tipoEmprestimo = document.getElementById("tipoEmprestimo").value;
    var valor = document.getElementById("valor").value;
    var tempo = document.getElementById("tempo").value;
    var entrada = document.getElementById("entrada").value;
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    // Verifica se o tipo de empréstimo selecionado requer entrada
    var requerEntrada = tipoEmprestimo === "Financiamento de carro" || tipoEmprestimo === "Refinanciamento de carro";

    // Monta a frase com as informações
    var mensagem = "Olá, me chamo " + nome + " " + sobrenome + ". Gostaria de simular um " + tipoEmprestimo + ". Aqui estão as informações:\n\n";
    mensagem += "Valor em dinheiro (R$): " + valor + "\n";
    mensagem += "Quanto tempo (mês): " + tempo + "\n";

    if (requerEntrada) {
        mensagem += "Quanto de entrada: " + entrada + "\n";
    }

    // Abre uma nova janela com o link para o WhatsApp do consultor
    var link = "https://api.whatsapp.com/send?phone=5519992701313&text=" + encodeURIComponent(mensagem);
    window.open(link, "_blank");
}

// Evento para chamar a função de mostrar/ocultar entrada inicialmente
mostrarOcultarEntrada();
function enviarMensagemWhatsApp2() {
    var nomeC = document.getElementById("nomeC").value;
    var emailC = document.getElementById("emailC").value;
    var mensagemC = document.getElementById("mensagemC").value;

    // Monta a mensagem para o WhatsApp
    var mensagemWhatsApp = "Olá, me chamo " + nomeC+ ". Este é o meu email de contato: " + emailC + "\n\n" + mensagemC;

    // Formata a mensagem para a URL do WhatsApp
    var mensagemWhatsAppEncoded = encodeURIComponent(mensagemWhatsApp);

    // Abre uma nova janela com o link para o WhatsApp
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=5519992701313&text=" + mensagemWhatsAppEncoded;
    window.open(linkWhatsApp, "_blank");
}