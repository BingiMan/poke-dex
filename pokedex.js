const domain = 'https://pokeapi.co/api/v2';
const search = '/pokemon/';
const searchBase = `${domain}${search}`;
const listLimit = '?offset=1&limit=800'
//ULR/////////////////////////////////////////////////


// Element Constants instances
const buttonSearch = document.querySelector('#search-button');
const randomSearch = document.querySelector('#random-search');

const inputPokemon = document.querySelector('#pokemon-search');

const gobalContainerList = document.querySelector('#display-list');
// const pokemonSearched = document.querySelector('#pokemon-list')

const pokemonDetailsContainer = document.querySelector('.pokemon-details');
const pokemonNameElement = document.querySelector('#pokemon-name-container > span');
const pokemonDetailListContainer = document.querySelector('#pokemon-details-container > ul');
const pokemonImgContainer = document.querySelector('#pokemon-img-container');
//SEARCH BUTTON////////////////////////////////////////

function clearPokemonDetails() {
  pokemonImgContainer.innerHTML = '';
  pokemonNameElement.innerHTML = '';
  pokemonDetailListContainer.innerHTML = '';
}

function renderPokemonDetails() {
  clearPokemonDetails();

  let response = await axios.get(searchBase + inputValue);
  let poke = response.data;
  console.log(poke);

  pokemonNameElement.classList.add('bold-text');

  let pokemonImg = document.createElement('img');

  pokemonNameElement.innerHTML = poke.name;

  for (let i = 0; i < poke.abilities.length; i++) { // looping through abilities length
    let pokemonAbilities = document.createElement('li'); // creating one 'li' per ability
    pokemonAbilities.innerHTML = poke.abilities[i].ability.name; // creating the li with the name of the ability
    pokemonDetailListContainer.appendChild(pokemonAbilities); // inserting the 'li' into the container 'lu'    
  }
  pokemonImg.setAttribute('src', poke.sprites.front_default);
  pokemonImg.setAttribute('alt', poke.name);

  pokemonImgContainer.appendChild(pokemonImg);

  displayDetails(pokemonDetailsContainer);
}
buttonSearch.addEventListener('click', async () => {
  const inputValue = inputPokemon.value;

  renderPokemonDetails();
});


function displayDetails(el) {
  console.log(el.getAttribute('data-active'))
  if (el.getAttribute('data-active') === '0') {
    el.setAttribute('data-active', '1');
  }
}

//RANDOM SEARCH BUTTON/////////////////////////////////////////

randomSearch.addEventListener('click', async () => {
  let randomPokemon = Math.floor(Math.random() * 807);
  const randomValue = randomPokemon;
  console.log(randomValue);
  let response = await axios.get(searchBase + randomValue);
  let ranPoke = response.data;

  console.log(ranPoke);

  const pokemonRandom = document.querySelector('#random-list');
  pokemonRandom.innerHTML = '';

  let pokemonItem = document.createElement('div');
  let pokemonName = document.createElement('p');
  let pokemonDetails = document.createElement('ul');
  let pokemonImg = document.createElement('img');

  pokemonName.innerHTML = `Name: ${ranPoke.name}`;
  for (let i = 0; i < ranPoke.abilities.length; i++) {
    let pokemonAbilities = document.createElement('li');
    pokemonAbilities.innerHTML = ranPoke.abilities[i].ability.name;
    pokemonDetails.appendChild(pokemonAbilities);
  };

  pokemonImg.setAttribute('src', ranPoke.sprites.front_default);
  pokemonImg.setAttribute('alt', ranPoke.name);

  pokemonItem.appendChild(pokemonImg);
  pokemonItem.appendChild(pokemonName);
  pokemonItem.appendChild(pokemonDetails);

  pokemonRandom.appendChild(pokemonItem);
  console.log(pokemonRandom);

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




