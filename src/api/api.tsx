import axios from 'axios'

const host = 'http://www.omdbapi.com/?apikey=3b6e496e'

export const getMoviesByTitle = async (title: string) => {
	const response = await axios.get(`${host}&s=${title}`)
	return response.data.Search
}

export const getMovieDetailById = async (id: string) => {
	const response = await axios.get(`${host}&i=${id}`)
	return response.data
}
