import { getCharacters } from "../utils/getCharacters.js"

export const CharactersContainer =  async () => {
    const Container = document.querySelector('#characters-container')

    const data = await getCharacters()

    data.forEach( (element, index ) => Container.append(element.name))
}

