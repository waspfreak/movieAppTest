import {useState, useEffect, useCallback} from 'react';

// Environment Variables
import {API_URL, API_KEY} from '../api/API';

export const useMovieFetch = (movieId: any) => {
	const [state, setState] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchData = useCallback(async () => {
		setError(false);
		setLoading(true);

		try {
			const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
			const result = await (await fetch(endpoint)).json();
			setState(result);
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	}, [movieId]);

	useEffect(() => {
		if (localStorage[movieId]) {
			setState(JSON.parse(localStorage[movieId]));
			setLoading(false);
		} else {
			fetchData();
		}
	}, [fetchData, movieId]);

	useEffect(() => {
		localStorage.setItem(movieId, JSON.stringify(state));
	}, [movieId, state]);

	return [state, loading, error];
};
