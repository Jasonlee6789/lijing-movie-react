import axios from 'axios'

const API_KEY = '3b6e496e'

export const getMoviesByTitle = async (title: string) => {
	const response = await axios.get(
		`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
	)
	console.log(response.data.Search)
	return response.data.Search
}
