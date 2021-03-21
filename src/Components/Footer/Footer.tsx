import React from 'react';
// Styled Components
import { StyledFooter, StyledTMDBLogo } from './style';

import TMDBLogo from '../../assets/tmdb_logo.svg';

/**
 * Footer  UI component for user interaction
 */

export interface FooterProps { }
export const Footer: React.FC<FooterProps> = ({
	...props
}) => {
	return (
		<StyledFooter  {...props}>
			<div className='footer'>
				<a className='link' rel='noreferrer' href='https://www.themoviedb.org/'>
					<StyledTMDBLogo src={TMDBLogo} alt='tmdb-logo' target='_blank' />
				</a>
				Crafted by{' '}
				<a
					className='link'
					rel='noreferrer'
					href='https://github.com/waspfreak'
					target='_blank'>
					Juliana Leon
				</a>{' '}
				with{' '}
				<a
					className='link'
					rel='noreferrer'
					href='https://reactjs.org/'
					target='_blank'>
					{' '}
					React
				</a>
			</div>
		</StyledFooter>
	);
};

export default Footer;
