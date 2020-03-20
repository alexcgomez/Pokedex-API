const div = document.querySelector("#poke");
const input = document.querySelector("#pokeid");
const rightdiv = document.querySelector(".div-right");

function showPokemon(id) {
  const pokemonList = data => {
    fetch(data[id].url)
      .then(resp => resp.json())
      .then(data => {
        pokemon(data);
      });
  };

  const pokemon = data => {
    div.innerHTML = `
  <div class="div-img">
    <img src="${data.sprites.front_default}" >
  <div class="info">
    <span class="name">${data.name}</span>
    <span class="id">${data.id}</span>
  </div>
`;
    rightdiv.innerHTML = `
    <label for="name">Nombre</label><br>
    <p id="name">${data.name}</p>
    <label for="xp">Experiencia Base</label><br>
    <p id="xp">${data.base_experience}</p>
    <label for="height">Altura</label><br>
    <p id="height">${data.height}</p>
    <label for="weight">Peso</label><br>
    <p id="weight">${data.weight} kg</p>
    <label for="shiny">Shiny</label><br><br><br>
    <img id="shiny" src="${data.sprites.front_shiny}">
  
  
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
