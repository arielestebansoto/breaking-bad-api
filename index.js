import fetchCharacters from "./js/fetchCharacters.js"
import renderCharacters from "./js/renderCharacters.js"
import filterCharacters from "./js/filterCharacters.js"

const app = document.querySelector('#app')

async function printCharacters() {
    try {
        let data = await fetchCharacters()
        await renderCharacters(data)
    } catch (error) {
        const e = new Error(error)
        console.error(e.message)
    }
}
printCharacters()