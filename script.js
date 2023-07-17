const dropdownSelect = document.getElementById('dropdownSelect');
const pokemonImageContainer = document.getElementById('pokemonImageContainer');

const dropdownSelect2 = document.getElementById('dropdownSelect2');
const pokemonImageContainer2 = document.getElementById('pokemonImageContainer2');

const fightButton = document.getElementsByClassName('fight__button');

dropdownSelect.addEventListener('change', () => {
  const selectedOption = dropdownSelect.value;

  // Realiza la llamada a la API de Pokémon para obtener los datos del Pokémon seleccionado
  fetch(`https://pokeapi.co/api/v2/pokemon/${selectedOption}`)
    .then(response => response.json())
    .then(data => {
      const pokemonId = data.id;
      const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

      // Crea la imagen del Pokémon y la muestra en el contenedor
      const pokemonImage = document.createElement('img');
      pokemonImage.src = pokemonImageURL;
      pokemonImageContainer.innerHTML = ''; // Limpia el contenedor antes de añadir la nueva imagen
      pokemonImageContainer.appendChild(pokemonImage);
    })
    .catch(error => {
      console.log('Error:', error);
    });
});

dropdownSelect2.addEventListener('change', ()=>{
  const selectedOption2 = dropdownSelect2.value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${selectedOption2}`)
    .then(response => response.json())
    .then(data => {
      const pokemonId = data.id;
      const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

      // Crea la imagen del Pokémon y la muestra en el contenedor
      const pokemonImage2 = document.createElement('img');
      pokemonImage2.src = pokemonImageURL;
      pokemonImageContainer2.innerHTML = ''; // Limpia el contenedor antes de añadir la nueva imagen
      pokemonImageContainer2.appendChild(pokemonImage2);
    })
    .catch(error => {
      console.log('Error:', error);
    });
});


fetch('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
  .then(response => response.json())
  .then(data => {
    const results = data.results;

    // Crea las opciones del select para el segundo pokemon
    results.forEach(result => {
      const option = document.createElement('option');
      option.value = result.name;
      option.text = result.name;
      dropdownSelect2.appendChild(option);
    });
  })
  .catch(error => {
    console.log('Error:', error);
});


// Realiza la llamada a la API de Pokémon para obtener la lista de nombres de los Pokémon
fetch('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
  .then(response => response.json())
  .then(data => {
    const results = data.results;

    // Crea las opciones del select
    results.forEach(result => {
      const option = document.createElement('option');
      option.value = result.name;
      option.text = result.name;
      dropdownSelect.appendChild(option);
    });
  })
  .catch(error => {
    console.log('Error:', error);
});