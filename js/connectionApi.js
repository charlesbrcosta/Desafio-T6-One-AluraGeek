const port = 3000;
const apiUrl = `http://localhost:${port}/cards`;


async function handleConnectionApi() {
    const connection = await fetch(apiUrl);
    
    if(!connection.ok) {
        throw new Error('Erro ao conectar com a API');
    }

    const res = await connection.json();
    return res;
}

async function handlePostApi(title, category, price, image) {
    const connection = await fetch(apiUrl, 
        {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    title : title,
                    category : category,
                    price : price, 
                    image : image
                }
            )
        }
    );

    if(!connection.ok) {
        throw new Error('Erro ao inserir dados na API');
    }

    const res = await connection.json();
    return res;
}

async function handleDeleteApi(id) {
    const connection = await fetch(`${apiUrl}/${id}`, {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json'
        },
    });

    if(!connection.ok) {
        throw new Error('Erro ao deletar dados da API');
    }

    return connection;
}

export const connectionApi = {
    handleConnectionApi,
    handlePostApi,
    handleDeleteApi
};



/* comparar *//* 
const port = 3000;
const apiUrl = `http://localhost:${port}/cards`;

async function handleConnetionApi() {
    const connection = await fetch(apiUrl);
    if (!connection.ok) {
        throw new Error('Erro ao conectar com a API');
    }
    const res = await connection.json();
    return res;
}

async function handlePostApi(title, description, price, image) {
    const connection = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: description,
            price: price,
            image: image
        })
    });

    if (!connection.ok) {
        throw new Error('Erro ao postar dados na API');
    }

    const res = await connection.json();
    return res;
}

export const connectionApi = {
    handleConnetionApi,
    handlePostApi
};
 */