import React from 'react';
import { StyledNavbar, Logo } from './style';

/**
 *Header UI component for user interaction
 */
export interface HeaderProps {
	title: string
}

export const Header: React.FC<HeaderProps> = ({
	title,
	...props
}) => {

	return (
		<StyledNavbar {...props}>
			<Logo>
				<h1>{title}</h1>
			</Logo>
		</StyledNavbar>
	);
};

export default Header;
