// Quando o usuário clica na div, abre o popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function aLei() {
  var popup = document.getElementById("myPopuplei");
  popup.classList.toggle("show");
}
  
function oLema() {
  var popup = document.getElementById("myPopuplema");
  popup.classList.toggle("show");
}

// Quando clicar no botão ENVIAR do formulário
function enviarform() {
  var nome = document.getElementById('cNome').value
  
  if (nome == 0) {
    window.alert('Por favor, preencher o formulário acima antes de prosseguir.')
  }
  else {
    window.alert(`${nome}, a sua mensagem foi enviada com sucesso. Obrigado!`)
  }
}