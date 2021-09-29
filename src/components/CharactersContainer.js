import { getCharacters } from "../utils/getCharacters.js"
import { CharacterCard } from "./CharacterCard.js"

export const CharactersContainer =  async () => {
    const Container = document.querySelector('#characters-container')

    const data = await getCharacters()

    data.forEach( character => Container.append(CharacterCard(character)))
}

