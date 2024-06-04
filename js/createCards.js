import { connectionApi } from './connectionApi.js';

const form = document.querySelector('[data-form]');
const titleInput = document.querySelector('[data-title]');
const categoryInput = document.querySelector('[data-category]');
const priceInput = document.querySelector('[data-price]');
const imageInput = document.querySelector('[data-image]');
const clearButton = document.querySelector('[data-clear-button]');

if(form) {
    form.addEventListener('submit', event => handleCreateCard(event));
}

async function handleCreateCard(event) {
    event.preventDefault();

    const title = titleInput.value;
    const category = categoryInput.value;
    const price = priceInput.value;
    const image = imageInput.value;

    try {
        await connectionApi.handlePostApi(title, category, price, image);
        handleFieldClear();
        console.log('Card criado com sucesso');
    } catch(erro) {
        console.error('Erro ao criar card', erro);
    }
}

function handleFieldClear() {
    titleInput.value = '';
    categoryInput.value = '';
    priceInput.value = '';
    imageInput.value = '';
}

clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleFieldClear();
});
