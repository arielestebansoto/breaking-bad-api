import getCharacters from "./js/getCharacters.js"
import searchSubmit  from "./js/searchCharacters.js"
import renderCharacters from "./js/renderCharacters.js"

const cardContainer = document.querySelector('#cardContainer')
const buttonGetCharacters = document.querySelector('#buttonGetCharacter')
buttonGetCharacters.addEventListener('click', getCharacters)
