import { connectionApi } from './connectionApi.js';

const listCards = document.querySelector('[data-list]');

function handleBuildCard(id, title, category, price, image) {
    const card = document.createElement('article');
    card.className = 'card-article';
    card.setAttribute('data-id', id);
    card.innerHTML = `
        <div class="card-image">
            <img src="${image}" alt="Imagem do Anime Naruto" class="card-img">
        </div>
        <div class="card-data">
            <h2 class="card-title">${title}</h2>
            <p class="card-category">${category}</p>
            <p class="card-price">R$ ${price}</p>
            <button class="card-button" data-delete-card>Excluir</button>
        </div>
        <span class="message"></span>`;
    
    const deleteCard = card.querySelector('[data-delete-card]');
    
    deleteCard.addEventListener('click', async (event) => {
        event.preventDefault();
        handleDeleteCard(id, deleteCard);
    });

    return card;
}

async function handleShowCards() {   
    const cards = await connectionApi.handleConnectionApi();
    try {
        cards.forEach(element => listCards.appendChild(
            handleBuildCard(
                element.id, 
                element.title, 
                element.category, 
                element.price, 
                element.image
            )
        ));
    } catch(Error) {
        console.error(Error );
    }
}

async function handleDeleteCard(id, card) {
    try {
        await connectionApi.handleDeleteApi(id);
        card.remove();

    } catch(Error) {
        console.error(Error);
    }

    return card;
}

handleShowCards();
