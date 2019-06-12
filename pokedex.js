//ULR/////////////////////////////////////////////////
const domain = 'https://pokeapi.co/api/v2';
const search = '/pokemon/';
const searchBase = `${domain}${search}`;
const listLimit = '?offset=1&limit=800'

// ELEMENT CONSTANT INSTANCES ////////////////////////
const buttonSearch = document.querySelector('#search-button');
const randomSearch = document.querySelector('#random-search');
const inputPokemon = document.querySelector('#pokemon-search');
const gobalContainerList = document.querySelector('#display-list');
const pokemonDetailsContainer = document.querySelector('.pokemon-details');
const pokemonNameElement = document.querySelector('#pokemon-name-container > span');
const pokemonDetailListContainer = document.querySelector('#pokemon-details-container > ul');
const pokemonImgContainer = document.querySelector('#pokemon-img-container');
//CLEAR POKEMON DETAILS ///////////////////////////////
function clearPokemonDetails() {
  pokemonImgContainer.innerHTML = '';
  pokemonNameElement.innerHTML = '';
  pokemonDetailListContainer.innerHTML = '';
}

function displayDetails(el) {
  if (el.getAttribute('data-active') === '0') {
    el.setAttribute('data-active', '1');
  }
}
//RENDER POKEMON DETAILS///////////////////////////////
let renderPokemonDetails = async (pokemonID) => {
  clearPokemonDetails();

  let response = await axios.get(searchBase + pokemonID);
  let poke = response.data;
  console.log(poke);

  let pokemonImg = document.createElement('img');

  pokemonImg.setAttribute('src', poke.sprites.front_default);
  pokemonImg.setAttribute('alt', poke.name);
  pokemonImgContainer.appendChild(pokemonImg);
  pokemonNameElement.classList.add('bold-text');
  pokemonNameElement.innerHTML = poke.name;

  for (let i = 0; i < poke.abilities.length; i++) { // looping through abilities length
    let pokemonAbilities = document.createElement('li'); // creating one 'li' per ability
    pokemonAbilities.innerHTML = poke.abilities[i].ability.name; // creating the li with the name of the ability
    pokemonDetailListContainer.appendChild(pokemonAbilities); // inserting the 'li' into the container 'lu'
  }

  displayDetails(pokemonDetailsContainer);
};

//SEARCH BUTTON/////////////////////////////////////////
buttonSearch.addEventListener('click', async () => {
  const inputValue = inputPokemon.value;
  renderPokemonDetails(inputValue);
});

//RANDOM SEARCH BUTTON///////////////////////////////////
randomSearch.addEventListener('click', async () => {
  let randomPokemon = Math.floor(Math.random() * 807);
  const randomValue = randomPokemon;

  renderPokemonDetails(randomValue);
});

////DISPLAY LIST/////////////////////////////////////////

let displayPokemonList = async () => {
  let containerPokemonList = document.createElement('ul');
  let response = await axios.get(searchBase + listLimit);
  console.log(response);
  let pokeList = response.data.results;
  console.log(pokeList);
  for (let i = 0; i < pokeList.length; i++) {
    let listDetails = document.createElement('li');
    listDetails.innerHTML = pokeList[i].name;
    containerPokemonList.appendChild(listDetails)
  }
  gobalContainerList.appendChild(containerPokemonList);
  console.log(gobalContainerList);
}

displayPokemonList();