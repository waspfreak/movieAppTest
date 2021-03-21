import React, { useState } from 'react';
import moment from 'moment';
// Components
import Modal from '../Modal/Modal';
import MovieDetails from '../MovieDetail/MovieDetails';
import ProgressBar from '../ProgressBar/ProgressBar';
// Custom Hook
import { useMovieFetch } from '../../hooks/useMovieFetch';
// Styled Components
import { StyledMovieCard } from './style';

/**
 * Movie Card  UI component for user interaction
 */
export interface MovieCardProps {
	image: any,
	movieId: number | string | null | undefined;
	clickable: boolean;
	originalTitle: string | null | undefined;
	releaseDate?: string | null | undefined;
	voteAverage: number;
	overview?: string;
}
export const MovieCard: React.FC<MovieCardProps> = ({
	image,
	movieId,
	clickable,
	originalTitle,
	releaseDate,
	voteAverage,
	overview,
	...props
}) => {
	const [isModal, setModal] = useState(false);
	const [movie] = useMovieFetch(movieId);

	return (
		<>
			<StyledMovieCard {...props} key={movieId} onClick={() => setModal(true)}>
				<>
					{clickable ? (
						<>
							<img className='clickable' src={image} alt={originalTitle} />
							<div className='content'>
								<div className='score'>
									<ProgressBar
										progress={voteAverage}
										size={50}
										strokeWidth={4}
										circleOneStroke='#3c0a0adb'
										circleTwoStroke='red'
									/>
								</div>
								<h2 className='content-title'>{originalTitle}</h2>
								<p className='content-data'>
									{moment(releaseDate).format('MMM, YYYY')}
								</p>
							</div>
						</>
					) : (
						<img src={image} alt={originalTitle} />
					)}
				</>
			</StyledMovieCard>
			<Modal isVisible={isModal} onClose={() => setModal(false)}>
				<MovieDetails
					modalOverview={overview}
					detailTitle={originalTitle}
					movie={movie}
					posterPath={image}
					voteAverage={voteAverage}
				/>
			</Modal>
		</>
	);
};


export default MovieCard;
