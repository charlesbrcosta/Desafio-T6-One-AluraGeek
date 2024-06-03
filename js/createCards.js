import { connectionApi } from './connectionApi.js';

const form = document.querySelector('[data-form]');

if(form) {
    form.addEventListener('submit', event => handleCreateCard(event));
}

async function handleCreateCard(event) {
    event.preventDefault();

    const title = document.querySelector('[data-title]').value;
    const category = document.querySelector('[data-category]').value;
    const price = document.querySelector('[data-price]').value;
    const image = document.querySelector('[data-image]').value;

    try {
        await connectionApi.handlePostApi(title, category, price, image);
        console.log('Card criado com sucesso');
    } catch(error) {
        console.error('Erro ao criar card', error);
    }
}

