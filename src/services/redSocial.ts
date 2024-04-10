const URL_API = import.meta.env.PUBLIC_URL_API_BASE
console.log(URL_API)
const fetchFromApi = async (endpoint = '', body = null) => {
  
  // try {
  //   const response = await fetch(
  //       endpoint, {method: 'GET', headers: {'Content-Type': 'application/json'}, body})
  //       return await response.json()
  // } catch (error) {
  //   return error
  // }



}

export default fetchFromApi