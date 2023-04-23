import React, { useEffect, useState } from 'react'
import { useAsyncFn } from 'react-use'
import { getMoviesByTitle } from '../api/api'
import { Input } from 'antd'
import MovieList from './MovieList'
import { getLocalStorage, setLocalStorage } from '../utils/util'

const SearchMovieList: React.FC = () => {
	const [searchResults, setSearchResults] = useState([])

	const [{ loading }, getMoviesByTitleFn] = useAsyncFn(getMoviesByTitle)

	const [preTitle, setTitle] = useState(
		getLocalStorage('searchTitle') || 'tokyo'
	)

	const { Search } = Input

	const handleSearch = async (title?: string) => {
		setLocalStorage('searchTitle', title || '')
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
				placeholder="Input Movie Title keywords"
				allowClear
				enterButton="Search"
				size="large"
				style={{ width: '60%' }}
				onSearch={handleSearch}
				defaultValue={preTitle}
			/>
			<MovieList datas={searchResults} loading={loading} />
		</>
	)
}

export default SearchMovieList
