import React from 'react';
import { SimpleCardStyles } from './style';

/**
 * Simple Card  UI component for user interaction
 */
export interface SimpleCardProps {
	originalTitle: string;
	id: string;
	posterPath: string;
}

export const SimpleCard: React.FC<SimpleCardProps> = ({
	id,
	posterPath,
	originalTitle,
	...props
}) => {

	return (
		<SimpleCardStyles {...props} key={id}>
			<img className='image' src={posterPath} alt={originalTitle} />
		</SimpleCardStyles>
	);
};



export default SimpleCard;
