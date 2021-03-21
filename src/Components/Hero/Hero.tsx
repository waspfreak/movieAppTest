import React, { useState, useEffect } from 'react';
import SimpleCard from '../Card/SimpleCard';
import { HeroStyles, HeroItemStyles, HeroTitle, Container } from './style';

// Environment Variables
import { TRENDING_NOW, IMAGE_BASE_URL, POSTER_SIZE } from '../../api/API';

// Images
import NoImage from '../../assets/no_image.jpg';

/**
 *Hero UI component for user interaction
 */

export interface HeroProps { }

export const Hero: React.FC<HeroProps> = ({
	...props
}) => {
	const [movies, setMovies] = useState<any[]>([])
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		async function fetchData() {
			const response = await fetch(TRENDING_NOW);
			const data = await response.json();
			setMovies(data.results);
			setLoading(false);
		}

		fetchData();
	}, []);

	return (
		<HeroStyles {...props}>
			<HeroTitle>Popular Movies</HeroTitle>
			<Container>
				{loading && 'loading...'}
				{movies.map((movie) => (
					<HeroItemStyles key={movie.id}>
						<SimpleCard
							id={movie.id}
							originalTitle={movie.original_title}
							posterPath={
								movie.poster_path
									? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
									: NoImage
							}
						/>
					</HeroItemStyles>
				))}
			</Container>
		</HeroStyles>
	);
};

export default Hero;
