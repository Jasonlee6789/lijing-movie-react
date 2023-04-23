import React, { useEffect, useState } from 'react'
import { useAsyncFn } from 'react-use'
import { getMoviesByTitle } from '../utils/api'
import { Input } from 'antd'
import MovieList from './MovieList'

const SearchMovieList: React.FC = () => {
	const [searchResults, setSearchResults] = useState([])

	const [{ loading }, getMoviesByTitleFn] = useAsyncFn(getMoviesByTitle)

	const [preTitle, setTitle] = useState(
		localStorage.getItem('searchTitle') || 'tokyo'
	)

	const { Search } = Input

	const handleSearch = async (title?: string) => {
		localStorage.setItem('searchTitle', title || '')
		setTitle(title || '')
		const res = await getMoviesByTitleFn(title as string)
		setSearchResults(res)
	}
	useEffect(() => {
		handleSearch(preTitle)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [preTitle])
	return (
		<>
			<Search
				placeholder="Input Movie Title keywords (eg: default search title is Tokyo)"
				allowClear
				enterButton="Search"
				size="large"
				style={{ width: 800 }}
				onSearch={handleSearch}
				defaultValue={preTitle}
			/>
			<MovieList datas={searchResults} loading={loading} />
		</>
	)
}

export default SearchMovieList
