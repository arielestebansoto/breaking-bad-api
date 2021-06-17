import renderCharacters from "./renderCharacters.js"

const URL_API = "https://www.breakingbadapi.com/api/"
// const URL_API = '/api/characters.json'

async function fetchCharacters() {
    try {
        const response = await fetch(`${URL_API}characters`)
        // const response = await fetch(URL_API)
        const data = await response.json()
        return data
    } catch (error) {
      const e = new Error(error)
      console.error(e.message)
    }
}
export default fetchCharacters