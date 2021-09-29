import { SearchBar } from './src/components/SearchBar.js'
import { getCharacters } from './src/utils/getCharacters.js'
import { renderCharacters } from './src/utils/renderCharacters.js'
import { PageError } from './src/components/PageError.js'
import { Loader } from './src/components/Loader.js'

document.addEventListener('DOMContentLoaded', pageLoaded)

async function pageLoaded() {
    try {
        Loader()
        const data = await getCharacters()
        renderCharacters(data)
        SearchBar(data)
    } catch (error) {
        const newError = new Error(error)
        console.log(newError)
        PageError()
    }
}