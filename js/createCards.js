import { connectionApi } from './connectionApi.js';

const form = document.querySelector('[data-form]');
const submitButton = document.querySelector('[data-button-submit]');

const nameInput = document.querySelector('[data-name]');
const categoryInput = document.querySelector('[data-category]');
const priceInput = document.querySelector('[data-price]');
const imageInput = document.querySelector('[data-image]');
const clearButton = document.querySelector('[data-clear-button]');

// Elementos do modal sucesso
const successModal = document.querySelector('[data-success-modal]');
const successButton = document.querySelector('[data-success-button]');

// Elementos do modal de confirmação
const confirmationModal = document.querySelector('[data-confirmation-modal]');
const yesButton = document.querySelector('[data-yes-button]');
const noButton = document.querySelector('[data-no-button]');

//Elemento da obrigatoriedade dos inputs
const formFields = document.querySelectorAll('[required]');

const errorTypes = ['valueMissing', 'tooShort'];

// objeto que armazena mensagens referente a validação dos inputs
const messages = {
    name: {
        valueMissing: "O campo não pode estar vazio.",
        tooShort: "O campo não pode ter menos de 6 caracteres",
    },
    category: {
        valueMissing: "O campo não pode estar vazio.",
        tooShort: "O campo não pode ter menos de 4 caracteres",
    },
    price: {
        valueMissing: "O campo não pode estar vazio.",
        /* tooShort: "O campo não pode ter menos de 4 caracteres", */
    },
    image: {
        valueMissing: "O campo não pode estar vazio",
        tooShort: "O campo não pode ter menos de 20 caracteres",
    }
};

// função responsavel para verificação dos campos
function handleCheckField(field) {
    let message = '';

    field.setCustomValidity('');

    if (field.value.trim() === '') {
        field.setCustomValidity(messages[field.name].valueMissing);
    }

    errorTypes.forEach(error => {
        if (field.validity[error]) {
            message = messages[field.name][error];
        }
    });

    const errorMessage = field.parentNode.querySelector('[data-error]');
    const inputValidator = field.checkValidity();

    if (!inputValidator) {
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = '';
    }
}

// Função para formatar o valor do campo de preço ao sair do campo
function formatPriceInput(event) {
    let value = event.target.value;

    // Remove qualquer caractere que não seja número
    value = value.replace(/\D/g, '');

    // Adiciona vírgula e ponto conforme necessário
    const formattedValue = (Number(value) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    // Atualiza o valor do campo de entrada
    event.target.value = formattedValue;
}

// Adiciona ouvintes de eventos ao campo de preço
priceInput.addEventListener('blur', formatPriceInput);

// Função para verificar se o valor é válido antes de enviar para a API
function isValidPrice(value) {
    const regex = /^\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/;
    return regex.test(value);
}

formFields.forEach(field => {
    field.addEventListener('focus', () => {
        field.classList.add('active');
    });

    field.addEventListener('blur', () => {
        handleCheckField(field);
        field.classList.remove('active');
    });

    field.addEventListener('invalid', event => event.preventDefault());
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleFormSubmit();       
});

form.addEventListener('submit', event => {
    event.preventDefault();
    handleFormSubmit();   
});

async function handleFormSubmit() {
    console.log("Início da submissão do formulário");

    let formIsValid = true;

    formFields.forEach(field => {
        handleCheckField(field);
        if (!field.checkValidity()) {
            formIsValid = false;
        }
    });

    const priceValue = priceInput.value;

    if (!isValidPrice(priceValue)) {
        console.log('Valor inválido. Por favor, insira um valor válido.');
        formIsValid = false;
    }

    if (formIsValid) {      
        console.log("Formulário válido");
        await handleCreateCard(); 
        handleShowSuccessModal();         
    } else {
        console.log('Formulário inválido, verifique os campos obrigatórios.');
    }
}

async function handleCreateCard() {
    const name = nameInput.value.trim();
    const category = categoryInput.value.trim();
    let price = priceInput.value.trim();
    const image = imageInput.value.trim();

    // Converte o valor para o formato com ponto decimal antes de enviar
    price = price.replace(/\./g, '').replace(',', '.');

    try {
        await connectionApi.handlePostApi(name, category, price, image);
        console.log("Card criado com sucesso");
        form.reset();
    } catch (error) {
        console.error('Erro ao criar card:', error);
        throw error; // Propaga o erro para handleFormSubmit
    }
}

function handleShowSuccessModal() {
    successModal.classList.remove('hidden-modal-form');
}

function handleHiddenSuccessModal() {
    successModal.classList.add('hidden-modal-form');
}

successButton.addEventListener('click', () => {
    console.log("Escondendo o modal");
    handleHiddenSuccessModal();
    handleShowConfirmationModal();
});

function handleShowConfirmationModal() {
    confirmationModal.classList.remove('hidden-modal-form');
}

function handleHiddenConfirmationModal() {
    confirmationModal.classList.add('hidden-modal-form');
}

yesButton.addEventListener('click', () => handleHiddenConfirmationModal());

noButton.addEventListener('click', () => {
    handleHiddenConfirmationModal();
    window.location.href = '../index.html';
});

clearButton.addEventListener('click', () => form.reset());





