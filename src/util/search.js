const apiKey = process.env.REACT_APP_TMDB_KEY

export const getSearchResult = async (url, query = '', parameters = '') => {
  const endpoint = url + apiKey + parameters + query

  try {
    const data = await fetch(endpoint)
    const result = await data.json()

    return result
  }
  catch (err) {
    return err
  }
}