import renderCharacters from "./renderCharacters.js"
import fetchCharacters from "./fetchCharacters.js"

const searchInput = document.querySelector('#searchInput')
searchInput.addEventListener('keyup', filterCharacters)

async function filterCharacters (input) {
    try {
        const inputValue  = input.target.value.toLowerCase()
        const data = await fetchCharacters()
        const filterCharacter = data.filter(characters => {
            return (
                characters.name.toLowerCase().includes(inputValue)
                )
            })
        renderCharacters(filterCharacter)
        }
     catch(error) {
         const e = new Error(error)
        console.error(e.message)
    }
}
    
export default filterCharacters