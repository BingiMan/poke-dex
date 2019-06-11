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
  let pokemonDetails = document.createElement('ul');
  let pokemonImg = document.createElement('img');

  pokemonName.innerHTML = `Name: ${poke.name}`;
  for (let i = 0; i < poke.abilities.length; i++) { // looping through abilities length
    let pokemonAbilities = document.createElement('li'); // creating one 'li' per ability
    pokemonAbilities.innerHTML = poke.abilities[i].ability.name; // creating the li with the name of the ability
    pokemonDetails.appendChild(pokemonAbilities); // inserting the 'li' into the container 'lu'
  }
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

})
//DISPLAY LIST//
// let displayPokemonList = async function () {
//   const gobalContainerList = document.querySelector('#display-list');
//   let containerPokemonList = document.createElement('ul');
//   let response = await axios.get(searchBase);
//   let pokeList = response.result;
//   console.log(pokeList);
//   for (let i = 0; i < pokeList; i++) {
//     let listDetails = document.createElement('li');
//     listDetails.innerHTML = pokeList.results[i].name;
//     containerPokemonList.appendChild(listDetails)
//   }
//   gobalContainerList.appendChild(containerPokemonList);
//   console.log(gobalContainerList);
// }


// let displayPokemonList = async function () {
//   const gobalContainerList = document.querySelector('#display-list');
//   let containerPokemonList = document.createElement('ul');
//   let response = await axios.get(searchBase);
//   let pokeList = response.result;
//   console.log(pokeList);

// }





