import {useState, useEffect} from 'react';

// Environment Variables
import {NOW_PLAYING} from '../api/API';

export const useNowPlayingFetch = (searchTerm: any) => {
	const [state, setState] = useState({movies: []});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchMovies = async (endpoint: any): Promise<void> => {
		setError(false);
		setLoading(true);
		const isLoadMore = endpoint.search('page');
		try {
			const result = await (await fetch(endpoint)).json();
			setState((prev: any) => ({
				...prev,
				movies:
					isLoadMore !== -1
						? [...prev.movies, ...result.results]
						: [...result.results],
				heroImage: prev.heroImage || result.results[0],
				currentPage: result.page,
				totalPages: result.total_pages,
			}));
		} catch (error) {
			setError(true);
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		if (sessionStorage.nowState) {
			setState(JSON.parse(sessionStorage.nowState));
			setLoading(false);
		} else {
			fetchMovies(NOW_PLAYING);
		}
	}, []);

	useEffect(() => {
		if (!searchTerm) {
			sessionStorage.setItem('nowState', JSON.stringify(state));
		}
	}, [searchTerm, state]);

	return [{state, loading, error}, fetchMovies];
};
