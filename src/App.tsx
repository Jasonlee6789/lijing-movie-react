import React, { createContext, useState } from 'react'
import './App.css'
import SearchMovieList from './pages/SearchMovieList'
import MovieDetail from './pages/MovieDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Movie } from './interfaces/MovieInterface'

interface IMovieContextProps {
	movie?: Movie
	setMovie?: (movie: Movie) => void
}

export const MovieContext = createContext<IMovieContextProps>({
	movie: undefined,
	setMovie: undefined,
})

function App() {
	const [movie, setMovie] = useState<Movie>()

	return (
		<MovieContext.Provider value={{ movie, setMovie }}>
			<Router>
				<div className="App">
					<h1>Li Jing Movies Show && Search App Demo</h1>
					<Routes>
						<Route path="/" element={<SearchMovieList />} />
						<Route
							path="/movie/:movieId"
							element={<MovieDetail data={movie} />}
						/>
					</Routes>
				</div>
			</Router>
		</MovieContext.Provider>
	)
}

export default App
