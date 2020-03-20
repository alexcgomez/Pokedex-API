const div = document.querySelector("#poke");
const input = document.querySelector("#pokeid");

function showPokemon(id) {
  const pokemonList = data => {
    fetch(data[id].url)
      .then(resp => resp.json())
      .then(data => {
        pokemon(data);
      });
  };

  const pokemon = data => {
    let pokediv = document.createElement("div");
    div.innerHTML = `
  <div class="div-img">
    <img src="${data.sprites.front_default}" >
  <div class="info">
    <span class="name">${data.name}</span>
    <span class="id">${data.id}</span>
  </div>
`;
  };

  fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
    .then(resp => resp.json())
    .then(data => {
      pokemonList(data.results);
    });
}
document.addEventListener("keyup", event => {
  if (event.keyCode == 13) {
    if (input.value != "") {
      showPokemon(input.value);
    }
  }
});
