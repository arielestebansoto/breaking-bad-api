import renderCharacters from "./renderCharacters.js"

const buttonSearch = document.querySelector('#buttonSearch')
const searchInput = document.querySelector('#searchInput')
buttonSearch.addEventListener('click', searchSubmit)

async function fetchSearch(search) {
    const URL_API = `https://www.breakingbadapi.com/api/characters?name=${search}`
    const response = await fetch(URL_API)
    const data = await response.json()
    return data
}

async function searchSubmit() {
    const search = await searchInput.value
    const data = await fetchSearch(search)
    renderCharacters(data)
}

export default searchSubmit 