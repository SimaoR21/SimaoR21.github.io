document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myform');

    form.addEventListener('submit', (event) => {
        let isValid = true; // Acompanhar a validade geral
        const errors = []; // Coletar mensagens de erro

        // Função auxiliar para adicionar mensagem de erro
        const addError = (field, message) => {
            isValid = false;
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = message;
            field.insertAdjacentElement('afterend', errorMessage); // Adicionar mensagem de erro abaixo do campo
        };

        // Função auxiliar para remover mensagens de erro
        const clearErrors = () => {
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(error => error.remove());
        };

        // Limpar erros anteriores antes de revalidar
        clearErrors();

        // Validar Primeiro Nome
        const firstName = document.getElementById('firstname');
        if (firstName.value.trim() === '') {
            addError(firstName, "O Primeiro Nome é obrigatório.");
        } else if (firstName.value.length < 2) {
            addError(firstName, "O Primeiro Nome deve ter pelo menos 2 caracteres.");
        }

        // Validar Sobrenome
        const lastName = document.getElementById('lastname');
        if (lastName.value.trim() === '') {
            addError(lastName, "O Sobrenome é obrigatório.");
        } else if (lastName.value.length < 2) {
            addError(lastName, "O Sobrenome deve ter pelo menos 2 caracteres.");
        }

        // Validar Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            addError(email, "O Email é obrigatório.");
        } else if (!emailRegex.test(email.value)) {
            addError(email, "Por favor, insira um email válido.");
        }

        // Validar Campos do Endereço
        const street = document.getElementById('street');
        if (street.value.trim() === '') {
            addError(street, "O endereço é obrigatório.");
        }

        const city = document.getElementById('city');
        if (city.value.trim() === '') {
            addError(city, "A cidade é obrigatória.");
        }

        const state = document.getElementById('state');
        if (state.value.trim() === '') {
            addError(state, "O estado/região é obrigatório.");
        }

        const postcode = document.getElementById('postalcode');
        if (postcode.value.trim() === '') {
            addError(postcode, "O Código Postal é obrigatório.");
        }

        // Validar Detalhes do Cartão de Crédito
        const card = document.getElementById('card');
        const cardRegex = /^\d{16}$/;
        if (card.value.trim() === '') {
            addError(card, "O Número do Cartão é obrigatório.");
        } else if (!cardRegex.test(card.value)) {
            addError(card, "O Número do Cartão deve ter 16 dígitos.");
        }

        const month = document.getElementById('month');
        if (month.value.trim() === '') {
            addError(month, "A Data de Validade é obrigatória.");
        }

        const cvv = document.getElementById('cvv');
        const cvvRegex = /^\d{3}$/;
        if (cvv.value.trim() === '') {
            addError(cvv, "O CVV é obrigatório.");
        } else if (!cvvRegex.test(cvv.value)) {
            addError(cvv, "O CVV deve ter 3 dígitos.");
        }

        // Validar Termos e Condições
        const terms = document.querySelector('input[name="terms"]');
        if (!terms.checked) {
            addError(terms, "Você deve concordar com os termos e condições.");
        }

        // Impedir envio do formulário se for inválido
        if (!isValid) {
            event.preventDefault();
        }
    });
});
