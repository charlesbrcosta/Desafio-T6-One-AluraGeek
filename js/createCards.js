 
import { connectionApi } from './connectionApi.js';

const form = document.querySelector('[data-form]');
const submitButton = document.querySelector('[data-button-submit]');

const nameInput = document.querySelector('[data-name]');
const categoryInput = document.querySelector('[data-category]');
const priceInput = document.querySelector('[data-price]');
const imageInput = document.querySelector('[data-image]');
const clearButton = document.querySelector('[data-clear-button]');

// Elements Success Modal
const successModal = document.querySelector('[data-success-modal]');
const successButton = document.querySelector('[data-success-button]');

//Elements Confirmation Modal
const confirmationModal = document.querySelector('[data-confirmation-modal]');
const yesButton = document.querySelector('[data-yes-button]');
const noButton = document.querySelector('[data-no-button]');

const formFields = document.querySelectorAll('[required]');

const errorTypes = ['valueMissing', 'tooShort'];

const messages = {
    name: {
        valueMissing: "O campo não pode estar vazio.",
        tooShort: "O campo não pode ter menos de 6 caracteres",
    },
    category: {
        valueMissing: "O campo não pode estar vazio.",
        tooShort: "O campo não pode ter menos de 5 caracteres",
    },
    price: {
        valueMissing: "O campo não pode estar vazio.",
        tooShort: "O campo não pode ter menos de 4 caracteres",
    },
    image: {
        valueMissing: "O campo não pode estar vazio",
        tooShort: "O campo não pode ter menos de 20 caracteres",
    }
};

function handleCheckField(field) {
    let message = '';

    field.setCustomValidity('');

    /* if(field.value.trim() === '') {
        field.setCustomValidity(messages[field.name].valueMissing)
    } */

    errorTypes.forEach(error => {
        if (field.validity[error]) {
            message = messages[field.name][error];
        } else if (field.value.trim() === '') {
            field.setCustomValidity(messages[field.name][error])
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
    const price = priceInput.value.trim();
    const image = imageInput.value.trim();

    try {
        await connectionApi.handlePostApi(name, category, price, image);
        console.log("Card criado com sucesso");
        form.reset();
    } catch (error) {
        console.error('Erro ao criar card:', error);
            throw error; /* // Propaga o erro para handleFormSubmit*/
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

