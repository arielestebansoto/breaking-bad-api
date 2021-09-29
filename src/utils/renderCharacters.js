import { CharacterCard } from "../components/CharacterCard.js"

const Container = document.querySelector('#characters-container')

export const renderCharacters = data => {
    Container.innerHTML=``
    data.forEach( character => Container.append(CharacterCard(character)))
}