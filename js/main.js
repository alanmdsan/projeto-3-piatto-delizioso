$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: '<span class="error-message">Por favor, insira o seu nome</span>',
            email: '<span class="error-message">Por favor, insira o seu email corretamente</span>',
            mensagem: '<span class="error-message">Por favor, insira sua mensagem</span>'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let campos_incorretos = validador.numberOfInvalids();
            if (campos_incorretos) {
                // alert(`Existe(m) ${campos_incorretos} campo(s) incorreto(s)`);
            }
        }
    });

})