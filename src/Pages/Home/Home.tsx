import React, { useState } from 'react';
// API Variables
import {
	POPULAR_BASE_URL,
	SEARCH_BASE_URL,
	POSTER_SIZE,
	IMAGE_BASE_URL,
} from '../../api/API';

// Components
import SearchBar from '../../Components/Search/SearchBar';
import MovieWall from '../../Components/MovieWall/MovieWall';
import MovieCard from '../../Components/Card/MovieCard';
import Loader from '../../Components/Loader/Loader';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';

// styled-components
import { GlobalStyle } from './style';

// Custom Hook
import { useNowPlayingFetch } from '../../hooks/useNowPlayingFetch';
// Images
import NoImage from '../../assets/no_image.jpg';

export interface HomeProps {
	state: { movies: never[] };

}

export const Home: React.FC<HomeProps> = ({
	state,
	...props

}) => {
	const [searchTerm, setSearchTerm] = useState<any[]>([])
	const [
		{
			state: {
				movies
			},
			loading,
			error
		},
		fetchMovies,
	] = useNowPlayingFetch(searchTerm);

	const searchMovies = (search: any) => {
		const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
		setSearchTerm(search);
		fetchMovies(endpoint);
	};

	return (
		<>
			<GlobalStyle {...props} />
			<Header title='App Movies' />
			<Hero />
			<SearchBar callback={searchMovies} />
			{error && <p>something went wrong</p>}

			<MovieWall header={searchTerm ? 'Search Result' : 'Now Playing  '}>
				{loading ? <Loader /> : undefined}

				{movies.map((movie: { poster_path: string; id: string | number | null | undefined; overview: string | undefined; original_title: string | null | undefined; release_date: string | null | undefined; vote_average: string; }, index: React.Key | null | undefined) => (
					<>
						<div key={index}>
							<MovieCard
								clickable
								image={
									movie.poster_path
										? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
										: NoImage
								}
								movieId={movie.id}
								overview={movie.overview}
								originalTitle={movie.original_title}
								releaseDate={movie.release_date}
								voteAverage={parseFloat(movie.vote_average).toFixed(1) * 10}
							/>
						</div>
					</>
				))}
			</MovieWall>

			<Footer />
		</>
	);
};

export default Home;
