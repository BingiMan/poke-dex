const domain = 'https://pokeapi.co/api/v2';
const search = '/pokemon/';
//ULR//
const searchBase = `${domain}${search}`;
console.log(searchBase);
const buttonSearch = document.querySelector('#search-button');
const inputPokemon = document.querySelector('#pokemon-search');

//SEARCH BUTTON//
buttonSearch.addEventListener('click', async () => {
  const inputValue = inputPokemon.value;
  let response = await axios.get(searchBase + inputValue);
  let poke = response.data;

  console.log(poke);

  const pokemonSearched = document.querySelector('#pokemon-list')
  pokemonSearched.innerHTML = '';

  let pokemonItem = document.createElement('div');
  let pokemonName = document.createElement('p');
  let pokemonDetails = document.createElement('li');
  let pokemonImg = document.createElement('img');
  pokemonName.innerHTML = poke.name;
  if (typeof poke.abilities === Array) {
    for (let ability of poke.abilities) {
      pokemonDetails.innerHTML = ability;
    }
  };

  pokemonImg.setAttribute('src', poke.sprites.front_default);
  pokemonImg.setAttribute('alt', poke.name);

  pokemonItem.appendChild(pokemonImg);
  pokemonItem.appendChild(pokemonName);
  pokemonItem.appendChild(pokemonDetails);

  pokemonSearched.appendChild(pokemonItem);
  console.log(pokemonSearched);
});
//RANDOM SEARCH BUTTON//
const randomSearch = document.querySelector('#random-search');

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
  let pokemonImg = document.createElement('img');
  pokemonName.innerHTML = ranPoke.name;

  pokemonImg.setAttribute('src', ranPoke.sprites.front_default);
  pokemonImg.setAttribute('alt', ranPoke.name);

  pokemonItem.appendChild(pokemonImg);
  pokemonItem.appendChild(pokemonName);

  pokemonRandom.appendChild(pokemonItem);
  console.log(pokemonRandom);
})
//DISPLAY LIST//

const displayListPokemon = document.querySelector('#display-list');

