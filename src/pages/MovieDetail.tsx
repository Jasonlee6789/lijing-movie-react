import React from 'react'
import { Card, Typography } from 'antd'
import { Movie } from '../interfaces/MovieInterface'
interface MovieProps {
	data: Movie
}

const MovieDetail: React.FC<MovieProps> = ({ data }) => {
	const { Title, Text } = Typography
	return (
		<Card style={{ width: '100%' }}>
			<a
				href={data.url}
				style={{ display: 'flex', alignItems: 'center' }}
			>
				<img
					src={data.Poster}
					alt={data.Title}
					style={{ width: 200, height: 300, margin: 10 }}
				/>

				<div
					style={{
						display: 'flex',
						textAlign: 'center',
						flexDirection: 'column',
						flex: 1,
					}}
				>
					<Title level={5} style={{ marginBottom: 5 }}>
						Title: {data.Title}
					</Title>
					<Text type="secondary" style={{ marginBottom: 5 }}>
						Year: {data.Year}
					</Text>
				</div>
			</a>
		</Card>
	)
}

export default MovieDetail
