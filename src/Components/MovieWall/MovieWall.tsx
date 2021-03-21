import React from 'react';
import { StyledMovieWall, StyledMovieWallContent, Style } from './style';

/**
 * MovieWall UI component for user interaction
 */
export interface MovieWallProps {
	header?: string;
	children: any;
}

export const MovieWall: React.FC<MovieWallProps> = ({
	header,
	children,
	...props
}) => {

	return (
		<Style {...props}>
			<h2 className='title'>{header}</h2>
			<StyledMovieWall>
				<StyledMovieWallContent>{children}</StyledMovieWallContent>
			</StyledMovieWall>
		</Style>
	);
};



export default MovieWall;
