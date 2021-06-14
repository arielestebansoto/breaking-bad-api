const cardContainer = document.querySelector('#cardContainer')
const buttonGetCharacters = document.querySelector('#buttonGetCharacter')
buttonGetCharacters.addEventListener('click', getCharacter)

const URL_API = "https://www.breakingbadapi.com/api/"

async function fetchCharacter() {
    const response = await fetch(`${URL_API}characters`)
    const data = await response.json()
    return data
}

async function getCharacter() {
    let response = []
    if (response.length === 0) {
        response = await fetchCharacter()
    }
    cardArray = []
    response.forEach(character => {
        let col = document.createElement('div') 
        col.classList.add('col', 's12', 'm6', 'l4')

        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <div class="card-image">
          <img src=${character.img}>
          <span class="card-title">${character.name}</span>
        </div>
        <div class="card-content">
          <p>Nick Name: ${character.nickname}</p>
          <p>Actor: ${character.portrayed}</p>
        </div>
        <div class="card-action">
          <a href="#" class="red-text">More Info</a>
        </div>
        `
        col.append(card)
        cardContainer.append(col)
    });
}