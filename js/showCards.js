import { connectionApi } from './connectionApi.js';

const listCards = document.querySelector('[data-list]');
const exclusionModal = document.querySelector('[data-exclusion-modal]');
const exclusionButton = document.querySelector('[data-exclusion-button]');

function handleBuildCard(id, name, category, price, image) {
    const card = document.createElement('article');
    card.className = 'card-article';
    card.setAttribute('data-id', id);
    card.innerHTML = `
        <div class="card-image">
            <img src="${image}" alt="Imagem do Anime Naruto" class="card-img">
        </div>
        <div class="card-data">
            <h2 class="card-name">${name}</h2>
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
            handleShowEmptyMessage();
            
            
        } else {
            listCards.innerHTML = '';
            cards.forEach(element => {
                listCards.appendChild(handleBuildCard(
                    element.id,
                    element.name,
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
        handleShowExclusionModal();
        if (listCards.children.length === 0) {
            handleShowEmptyMessage();
        }

    } catch (erro) {
        console.error('Erro ao deletar card:', erro);
    }
}

function handleShowEmptyMessage() {
    listCards.innerHTML = `<span class="message">Nenhum produto cadastrado</span>`;
}

function handleShowExclusionModal() {
    exclusionModal.classList.remove('hidden-modal-exclusion');
}

function handleHiddenExclusionModal() {
    exclusionModal.classList.add('hidden-modal-exclusion');
}

exclusionButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleHiddenExclusionModal();
});

handleShowCards();


