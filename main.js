const CHARACTERLIST = document.getElementById('characters');

const url = 'https://rickandmortyapi.com/api/character';


async function getData (url){
    const response = await fetch(url);
    const data = await response.json();
    renderCharacters(data.results);
}

function renderCharacters(characters) {
    characters.forEach(character => {
        const template = `
            <div class="characters__card">
                <img src="${character.image}" alt="${character.name}">
                <div class="characters__card__content">
                    <div class="characters__card__content__item">
                    <h2>${character.name}</h2>
                    <p>${character.species} -- ${character.status}</p>
                    </div>
                    <div class="characters__card__lastlocation">
                    <p>Last known location: ${character.location.name}</p>
                    </div>
                    <div class="characters__card__origin">
                    <p>Origin: ${character.origin.name}</p>
                    </div>
            </div>
        `;
        CHARACTERLIST.innerHTML += template;
    })
}

getData(url);