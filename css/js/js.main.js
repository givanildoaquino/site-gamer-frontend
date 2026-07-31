js/main.js
avaScript
$(document).ready(function() {
    $('.comprar-btn').on('click', function() {
        alert('Produto adicionado ao carrinho com sucesso!');
    });

    $('#form-login').on('submit', function(event) {
        event.preventDefault();
        let email = $('#email').val().trim();
        let senha = $('#senha').val().trim();
        let alerta = $('#login-alert');

        if(email === "" || senha === "") {
            alerta.removeClass('d-none alert-success').addClass('alert-danger')
                  .text('Por favor, preencha todos os campos!');
        } else {
            alerta.removeClass('d-none alert-danger').addClass('alert-success')
                  .text('Login realizado com sucesso! Redirecionando...');
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
        }
    });
});
