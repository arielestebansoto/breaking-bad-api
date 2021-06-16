import getCharacters from "./js/getCharacters.js"
import searchSubmit  from "./js/searchCharacters.js"
import renderCharacters from "./js/renderCharacters.js"

const app = document.querySelector('#app')
const buttonGetCharacters = document.querySelector('#buttonGetCharacter')
buttonGetCharacters.addEventListener('click', getCharacters)
