import React from 'react'
import { List } from 'antd'
import { Movie } from '../interfaces/MovieInterface'
import MovieDetail from './MovieDetail'
interface MovieListProps {
	datas: Movie[]
	loading: boolean
}
const MovieList: React.FC<MovieListProps> = ({ datas, loading }) => {
	return (
		<List
			loading={loading}
			dataSource={datas}
			renderItem={(movie) => (
				<List.Item key={movie.imdbID} onClick={() => {}}>
					<MovieDetail data={movie} />
				</List.Item>
			)}
		/>
	)
}

export default MovieList
