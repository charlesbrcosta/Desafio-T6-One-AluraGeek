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
    `;
    
    const deleteCard = card.querySelector('[data-delete-card]');
    
    deleteCard.addEventListener('click', async (event) => {
        event.preventDefault();
        await handleDeleteCard(id, card);
    });

    return card;
}

async function handleShowCards() {
    try {
        const cards = await connectionApi.handleConnectionApi();

        if(cards.length === 0) {
            listCards.innerHTML = `<span class="message">Nenhum produto cadastrador</span>`;
        } else {
            listCards.innerHTML = '';
            cards.forEach(element => {
                listCards.appendChild(handleBuildCard(
                    element.id,
                    element.title,
                    element.category,
                    element.price,
                    element.image
                ));
            });
        }
    } catch (erro){
        console.error('Erro ao exibir cards:', erro);
        listCards.innerHTML = `<span class="message">Não foi possível carregar a lista de cards</span>`;

    }
}

async function handleDeleteCard(id, card) {
    try {
        await connectionApi.handleDeleteApi(id);
        card.remove();
    } catch (erro) {
        console.error('Erro ao deletar card:', erro);
    }
}

handleShowCards();
