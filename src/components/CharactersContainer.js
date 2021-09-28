import { getCharacters } from "../utils/getCharacters.js"

const Container = document.querySelector('#characters-container')

export const CharactersContainer =  async () => {
    const data = await getCharacters()
    data.forEach( (element, index ) => Container.append(element.name))
}

