PROJECT NUMBER 1\
* my website // http://poke-dex-luis-carbonel.surge.sh/
--------------------------------

* using // Pokemon: http://pokeapi.co/

--------------------------------
POKEDEX 
--------------------------------
When I chose the "PokeAPI" the app that I wanted to build an app to be designed for people who want to know more about Pokemons, the navegation bar is useful for people who have never watched or played "Pokemon".

The website is a starter pack for everyone:

* Navegation // a functional navegation bar
* Search button //  you can look up for the pokemon that you want
* Random search //  get a random pokemon 
* list display // a frame where we can look a list of pokemons

--------------------------------
TECHNOLOGIES USED
--------------------------------

randomSearch.addEventListener('click', () => {
  if (!buttonsDisabled) {
    let randomPokemon = Math.floor(Math.random() * 807);
    const randomValue = randomPokemon;

    renderPokemonDetails(randomValue);
    buttonsDisabled = true;
  } else {
    console.log('button is disabled');
  }
});

* I a problem, when you spam really fast the "Display Random Pokemon" the pokemons were displayed one on top of the other, I made an  if statement that disable the "Display Random Pokemon" button when if the function havent finished yet, after the pokemon display ir will enable the button.


--------------------------------
ULSOLVED PROBLEMS
--------------------------------
* Display correctly on mobiles