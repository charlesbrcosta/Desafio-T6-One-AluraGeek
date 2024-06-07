const apiUrl = 'https://66623db962966e20ef080bf7.mockapi.io/prod/cards';

/* function connection API */
async function handleConnectionApi() {
    const connection = await fetch(apiUrl);
    
    if (!connection.ok) {
        throw new Error('Erro ao conectar com a API');
    }

    const res = await connection.json();
    return res;
}

/* function POST API */
async function handlePostApi(name, category, price, image) {
    const connection = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, category, price, image })
    });

    if (!connection.ok) {
        throw new Error('Erro ao inserir dados na API');
    }

    const res = await connection.json();
    return res;
}

/* function DELETE API */
async function handleDeleteApi(id) {
    const connection = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (!connection.ok) {
        throw new Error('Erro ao deletar dados da API');
    }

    return connection;
}

export const connectionApi = {
    handleConnectionApi,
    handlePostApi,
    handleDeleteApi
};
