const URL_API = import.meta.env.PUBLIC_URL_API_BASE
const fetchFromApi = async (endpoint = '', body = null) => {
  
  try {
    const response = await fetch(`${URL_API}${endpoint}`)
        return await response.json()
  } catch (error) {
    return error
  }
}

export default fetchFromApi