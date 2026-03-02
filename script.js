function mostrarMensagem() {
    alert("Agendamento realizado com sucesso! 🐾");
}

document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato.");
});