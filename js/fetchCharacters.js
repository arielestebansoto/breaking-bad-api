import renderCharacters from "./renderCharacters.js"

const URL_API = "https://www.breakingbadapi.com/api/"
// const URL_API = '/api/characters.json'
let data = []

async function fetchCharacters() {
  try {
    if (data.length === 0 ) {
      const response = await fetch(`${URL_API}characters`)
      // const response = await fetch(URL_API)
      data = await response.json()
      return data
    }
  } catch (error) {
    const e = new Error(error)
    console.error(e.message)
  }
  }
export default fetchCharacters