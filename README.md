# Rick and Morty
Projeto criado usando NodeJs e React

<p align="center">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/frontend/src/assets/pokemon-logo.png" width="300">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/node-js.png" width="300">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/react.png" width="300">
</p>

<hr>

### :scroll: Sobre o projeto

<p>Projeto para aprendizagem, construção de uma api com todos os personagens de Rick and Morty, listando cada detalhe individualmente.</p>
<p>Para o desenvolvimento do projeto, foram criadas duas aplicações, a primeira usando NodeJs para a construção do backend e a segunda usando React para a criado do frontend.
No projeto foi usado também CSS, criado especificamente para ele, usando Styled Components.</p>

<p align="center">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/listPokemons.png">
</p>

Além de exibir os detalhes de cada personagem.

<p align="center">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/listPokemons.png">
</p>

Para o projeto foi usado também o infinit scroll carregando os personagens de 20 em 20.

<p align="center">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/listPokemons.png">
</p>

Navegação entre as telas do projeto.

<p align="center">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/listPokemons.png">
</p>

### :rocket: Executando o projeto

<p>Primeiramente é preciso instalar as dependências necessárias para o projeto, para isso basta acessar as pastas backend e frontend pelo terminal, e em ambas, executar o install.</p>

```bash
  npm install
```

### :factory: Executando o servidor (Aplicação em NodeJs)

<p>Acessar a pasta backend e alterar o arquivo knexfile.js com as configurações de base de dados local. Para o projeto está configurado uma base de dados em Sqlite3, 
disponibilizada junto com o projeto. Entretanto o Knex suporta outras bases. Mais informaçõesna documentação http://knexjs.org/</p>

<p align="center">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/listPokemons.png">
</p>

<p>Configurado a base de dados, ou usado a que está no projeto, só será preciso executar o comando abaixo na pasta do backend para que o servidor fique rodando, 
ele funciona na porta 3333</p>

```bash
  npm start
```

### :computer: Executando o Frontend (React)

<p>Na aplicação react só será preciso executar o start e o site será carregado, é preciso uma conexão com a internet para exibir as imagens</p>

```bash
  npm start
```