import React, { useContext, useEffect, useState } from 'react'
import { Card, Typography } from 'antd'
import { Movie } from '../interfaces/MovieInterface'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { MovieContext } from '../App'
interface MovieProps {
	data?: Movie
}

const MovieDetail: React.FC<MovieProps> = ({
	data = JSON.parse(localStorage.getItem('curMovie') || ''),
}) => {
	const { Title, Text } = Typography
	const [favorites, setFavorites] = useState<Movie[]>([])
	const isFavorite = favorites.some((fav) => fav.imdbID === data?.imdbID)
	const { setMovie } = useContext(MovieContext)

	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites')
		if (storedFavorites) {
			setFavorites(JSON.parse(storedFavorites))
		}
	}, [])

	const handleLikeClick = (movie: Movie) => {
		if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
			setFavorites([...favorites, movie])
			localStorage.setItem(
				'favorites',
				JSON.stringify([...favorites, movie])
			)
		} else {
			const filteredFavorites = favorites.filter(
				(fav) => fav.imdbID !== movie.imdbID
			)
			setFavorites(filteredFavorites)
			localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
		}
	}
	return (
		<Card style={{ width: '100%' }}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Link
					to={`/movie/${data?.imdbID}`}
					onClick={() => {
						data && setMovie?.(data)
						localStorage.setItem('curMovie', JSON.stringify(data))
					}}
				>
					<img
						src={data?.Poster}
						alt={data?.Title}
						style={{ width: 200, height: 300, margin: 10 }}
					/>
				</Link>
				<div
					style={{
						display: 'flex',
						textAlign: 'center',
						flexDirection: 'column',
						flex: 1,
					}}
				>
					<Title level={5} style={{ marginBottom: 5 }}>
						Title: {data?.Title}
					</Title>
					<Text type="secondary" style={{ marginBottom: 5 }}>
						Year: {data?.Year}
					</Text>
				</div>

				{isFavorite ? (
					<AiFillHeart
						onClick={() => data && handleLikeClick(data)}
						style={{ fontSize: 30, color: 'red' }}
					/>
				) : (
					<AiOutlineHeart
						onClick={() => data && handleLikeClick(data)}
						style={{ fontSize: 30 }}
					/>
				)}
			</div>
		</Card>
	)
}

export default MovieDetail
