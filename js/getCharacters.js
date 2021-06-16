import renderCharacters from "./renderCharacters.js"

const URL_API = "https://www.breakingbadapi.com/api/"

async function fetchCharacter() {
    const response = await fetch(`${URL_API}characters`)
    const data = await response.json()
    return data
  }

  async function getCharacters() {
    let response = []
    if (response.length === 0) {
        response = await fetchCharacter()
    }
    renderCharacters(response)
}

export default getCharacters