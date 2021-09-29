import { renderCharacters } from "../utils/renderCharacters.js"

export const SearchBar = data => {
    const searchInput = document.querySelector('#searchInput')
    
    searchInput.addEventListener('keyup', filterCharacters)

    function filterCharacters(input) {
        const inputValue  = input.target.value.toLowerCase()

        const filteredCharacters = data.filter(characters => 
            characters.name.toLowerCase().includes(inputValue))
            
        return renderCharacters(filteredCharacters)
    } 
}