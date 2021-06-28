import PageLoading from "./PageLoading.js"
import PageError from "./PageError.js"

const URL_API = "https://www.breakingbadapi.com/api/"
// const URL_API = '/api/characters.json'

let characters = []

async function fetchCharacters() {
  if (characters.length === 0 ){
    try {
      PageLoading()
      const response = await fetch(`${URL_API}characters`)
      // const response = await fetch(URL_API)
      const data = await response.json()
      await data.forEach( character => {
          characters.push(character)
      });
      return characters
    } catch (error) {
        const e = new Error(error)
        console.error(e.message)
        PageError()
      }
  } else {
    return characters
  }
}
export default fetchCharacters