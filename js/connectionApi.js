const port = 3000;
const apiUrl = `http://localhost:${port}/cards`;

/* function connection API */
async function handleConnectionApi() {
    const connection = await fetch(apiUrl);
    
    if(!connection.ok) {
        throw new Error('Erro ao conectar com a API');
    } else {
        
    }
    const res = await connection.json();
    return res;
}

/* function POST API */
async function handlePostApi(title, category, price, image) {
    const connection = await fetch(apiUrl, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    title: title,
                    category: category,
                    price: price, 
                    image: image
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

/* function DELETE API */
async function handleDeleteApi(id) {
    const connection = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if(!connection.ok) {
        throw new Error('Erro ao deletar dados da API');
    }

    return connection;
}

/* Export an object called connectionApi that contains references to three functions */
export const connectionApi = {
    handleConnectionApi,
    handlePostApi,
    handleDeleteApi
};
