import React, { useEffect, useState } from 'react'
import { useAsyncFn } from 'react-use'
import { getMoviesByTitle } from '../utils/api'
import { Input } from 'antd'
import MovieList from './MovieList'

const SearchMovieList = () => {
	const [searchResults, setSearchResults] = useState([])

	const [{ loading }, getMoviesByTitleFn] = useAsyncFn(getMoviesByTitle)

	const { Search } = Input

	const handleSearch = async (title?: string) => {
		const res = await getMoviesByTitleFn(title as string)
		setSearchResults(res)
	}
	useEffect(() => {
		handleSearch('Tokyo')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<>
			<Search
				placeholder="Input Movie Title keywords (eg: default search title is Tokyo)"
				allowClear
				enterButton="Search"
				size="large"
				style={{ width: 800 }}
				onSearch={handleSearch}
			/>
			<MovieList datas={searchResults} loading={loading} />
		</>
	)
}

export default SearchMovieList
