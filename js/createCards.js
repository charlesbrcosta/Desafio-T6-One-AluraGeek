import { connectionApi } from './connectionApi.js';

const form = document.querySelector('[data-form]');

async function handleCreateCard(event) {
    event.preventDefault();

    const title = document.querySelector('[data-title]').value;
    const category = document.querySelector('[data-category]').value;
    const price = document.querySelector('[data-price]').value;
    const image = document.querySelector('[data-image]').value;

    try {
        await connectionApi.handlePostApi(title, category, price, image);
        
    } catch(Error) {
        console.error(Error);
    }
}

form.addEventListener('submit', event => handleCreateCard(event));