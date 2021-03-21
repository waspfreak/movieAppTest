const API_URL = 'https://api.themoviedb.org/3/';

//API Key will i never leave this key here in a real world project
const API_KEY = '4b84a47f0ca9e76273637bd77595b0e9';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const TRENDING_NOW = `${API_URL}/trending/all/day?api_key=${API_KEY}`;

const NOW_PLAYING = `${API_URL}movie/now_playing?api_key=${API_KEY}&page=1`;

const FILTER_BASE_URL = `${API_URL}movie/now_playing?api_key=${API_KEY}&page=1`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

const BACKDROP_SIZE = 'w1280';

const POSTER_SIZE = 'w500';

export {
	SEARCH_BASE_URL,
	POPULAR_BASE_URL,
	NOW_PLAYING,
	TRENDING_NOW,
	FILTER_BASE_URL,
	API_URL,
	API_KEY,
	IMAGE_BASE_URL,
	BACKDROP_SIZE,
	POSTER_SIZE,
};
