
const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';

fetch(url)
    .then(response => response.json())
    .then(data => {
        
        const container = document.getElementById('pokemon-container');

        data.results.forEach((pokemon) => {
            fetch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {
                    const card = document.createElement('div');
                    card.classList.add('card');

                    const img = document.createElement('img');
                    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`;

                    const name = document.createElement('h2');
                    name.textContent = pokemonData.name;

                    const type = document.createElement('p');
                    type.classList.add('type');
                    type.textContent = `Tipo: ${pokemonData.types[0].type.name}`;

                    const weight = document.createElement('p');
                    weight.classList.add('weight');
                    weight.textContent = `Peso: ${pokemonData.weight} kg`;

                    card.appendChild(img);
                    card.appendChild(name);
                    card.appendChild(type);
                    card.appendChild(weight);

                    container.appendChild(card);
                });
        });
    })
    .catch(error => console.error(error));