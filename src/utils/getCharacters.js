const URL_API = "https://www.breakingbadapi.com/api/characters"

export const getCharacters = async () => {
    try {
      const response = await fetch(URL_API)
      const data = await response.json()
      return data
    } catch (error) {
        const e = new Error(error)
        console.error(e.message)
      }
}