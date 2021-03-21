import React from 'react';

// Components
import ProgressBar from '../ProgressBar/ProgressBar';

// Styled Components
import { StyledMovieDetails } from './style';

/**
 * Movie Detail UI component for user interaction
 */
export interface MovieDetailsProps {
	detailTitle: string,
	posterPath: string,
	modalOverview: string
	voteAverage: number,
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({
	detailTitle,
	posterPath,
	modalOverview,
	voteAverage,
	...props
}) => {

	return (
		<StyledMovieDetails {...props}>
			<div className='movie_details-content'>
				<div className='movie_details-thumb'>
					<img className='image-thumb' src={posterPath} alt={detailTitle} />
				</div>
				<div className='movie_details-text'>
					<h3 className='movie_details_title'>{detailTitle}</h3>
					<p className='movie_details_description'>{modalOverview}</p>
					<div className='rating'>
						<div className='score'>
							<ProgressBar
								progress={voteAverage}
								size={50}
								strokeWidth={4}
								circleOneStroke='#3c0a0adb'
								circleTwoStroke='red'
							/>
						</div>
					</div>
				</div>
			</div>
		</StyledMovieDetails>
	);
};

export default MovieDetails;