import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
`;

export const HeroStyles = styled.div`
	background-color: #111;
`;

export const HeroItemStyles = styled.div`
	transition: transform 0.45s;
	:hover {
		transform: scale(1.09);
	}
`;

export const HeroTitle = styled.h2`
	font-family: 'Titillium Web', sans-serif;
	color: #fff;
	display: inline-block;
	font-size: 1.8em;
	padding-left: 20px;
	padding-top: 16px;
	padding-bottom: 26px;
	font-weight: bold;
`;
