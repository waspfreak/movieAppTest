import React from 'react';
import { Container, SpinnerIcon } from './style';

/**
 * Loader UI component for user interaction
 */

export interface LoaderProps { }

export const Loader: React.FC<LoaderProps> = ({
	...props
}) => {

	return (
		<Container {...props}>
			<SpinnerIcon />
			<h1>Loading Results</h1>
		</Container>
	);
};

export default Loader;
