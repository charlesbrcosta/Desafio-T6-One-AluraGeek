# AluraGeek

AluraGeek é um projeto focado em um sistema de cadastro de produtos em formato de cards. Este repositório contém o código fonte e as instruções necessárias para executar o projeto localmente, bem como os links para acessar o deploy online.
Funcionalidades

## :dizzy: Tecnologias utilizadas

<div>
  <img src="https://img.shields.io/badge/HTML5-e34c26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-264de4?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/json--server-323330?style=for-the-badge&logo=json&logoColor=white" alt="json-server" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MockAPI-ff69b4?style=for-the-badge&logoColor=white" alt="MockAPI" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub">
</div>

## :computer: Estrutura do projeto

### O projeto é dividido em duas telas principais:

1. Tela Inicial: Exibe os produtos cadastrados em formatos de cartão.
2. Tela de Cadastro: Utiliza um menu dropdown para a construção do menu de cadastro e dentro deste, um submenu para produtos.

## :hammer: Funcionalidades

- `Inserção`: insere novos produtos.
- `validação`: valida campos ínvalidos.
- `Exclusão`: exclue produtos cadastrados.

### Interface da página inicial: 
<img src="./assets/screenShot/paginaInicial.png"  alt="Pagina inicial." width="900">

### Interface de cadastro de produtos: 
<img src="./assets/screenShot/cadastro.png"  alt="Tela de cadastro de produtos." width="900">

<br />

### Interface do Usuário Responsiva:

<div style="display: flex; justify-content: flex-start; gap: 90px;"> 
   <div>
      <h4>Página inicial</h4>
      <img src="./assets/screenShot/mobilePaginaInicial.png" width="400">
   </div>
   <div>
      <h4>Cadastro de produtos</h4>
      <img src="./assets/screenShot/mobileCadastroProdutos.png" width="400">
   </div>
</div>

## :dizzy: Como Acessar o Deploy Online

### Vercel

O projeto está disponível na Vercel. Você pode acessá-lo através do seguinte link: 

[AluraGeek na Vercel.](https://desafio-t6-one-alura-geek.vercel.app/)

### GitHub Pages

Alternativamente, você pode acessar o projeto através do GitHub Pages:

[AluraGeek no GitHub Pages.](https://charlesbrcosta.github.io/Desafio-T6-One-AluraGeek/)

## :memo: Observação

Caso você pretenda utilizar o projeto no seu computador local, será necessário alterar o link no atributo `apiUrl` do arquivo `connectionApi` para `http://localhost:3000/cards` no . Este arquivo está localizado: `js/connectionApi.js`

## :warning: Como Executar o Projeto Localmente usando o node

### Pré-requisitos

- Node.js instalado
- npm (gerenciador de pacotes do Node.js)
- Navegador web moderno que suporte HTML5, CSS3 e JavaScript.

## :dvd: Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/charlesbrcosta/Desafio-T6-One-AluraGeek.git

2. Acesse o diretório do projeto:
    ```bash
    cd Desafio-T6-One-AluraGeek

3. Instale as dependências:
    ```bash
    npm install ou npm i

4. Inicie o json-server:
    ```bash
    npm run start ou npm start

5. Acesse o projeto no navegador:
    ```bash
    http://localhost:3000/cards

## :warning: Como Executar o Projeto Localmente sem o node

### Pré-requisitos

- Navegador de internet
- json-server instalado

## :dvd: Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/charlesbrcosta/Desafio-T6-One-AluraGeek.git

2. Abra o terminal do Windows ou Linux

3. No Windows:

4. Navegue até o diretório do projeto:
    ```bash
    cd Desafio-T6-One-AluraGeek

- Abra o terminal do windows ou vscode e digite o comando na raiz do projeto:
    ```bash
    json-server --watch db.json

- Abra o arquivo index.html no navegador:
    ```bash
    start index.html

5. No Linux

- Abra o terminal do linux ou vscode e digite o comando na raiz do projeto:
    ```bash
    json-server --watch db.json

- Navegue até o diretório do projeto:
    ```bash
    cd Desafio-T6-One-AluraGeek

- Abra o arquivo index.html no navegador:
    ```bash 
    xdg-open index.html

## :handshake: Contribuição

Se você quiser contribuir com o projeto, siga os passos abaixo:

    Faça um fork deste repositório.
    Crie uma nova branch (git checkout -b feature/nova-feature).
    Faça commit das suas alterações (git commit -am 'Adiciona nova feature').
    Faça push para a branch (git push origin feature/nova-feature).
    Abra um Pull Request.

## :student: Autor

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/48035699?v=4" width=115><br><sub>Charles Bruno</sub>](https://github.com/charlesbrcosta)


## :page_facing_up: Licença

Este projeto está licenciado sob a [Licença MIT](https://www.mit.edu/~amini/LICENSE.md).
