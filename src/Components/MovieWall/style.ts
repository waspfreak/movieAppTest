import styled from 'styled-components';

export const Style = styled.div`
	font-family: 'Titillium Web', sans-serif;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	.title {
		color: #fff;
		display: block;
		font-size: 1.8em;
		padding-left: 20px;
		padding-top: 16px;
		padding-bottom: 26px;
		font-weight: bold;
		@media screen and (max-width: 768px) {
			font-size: 22px;
		}
	}
`;

export const StyledMovieWall = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 0;
`;

export const StyledMovieWallContent = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	position: relative;
`;
