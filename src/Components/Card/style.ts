import styled from 'styled-components';

export const SimpleCardStyles = styled.div`
  font-family: "Titillium Web", sans-serif;  
	position: relative;
	display: flex;
	flex-direction: column;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	transition: transform 0.45s;
  width: 150px;
  margin-inline: 10px;
  margin-bottom: 20px;
	cursor: pointer;
		:hover {
			transform: scale(1.03);
		}
	}
	.image {
		width: 100%;
	}
`;

export const StyledMovieCard = styled.div`
	position: unset;
	font-family: 'Titillium Web', sans-serif;
	display: flex;
	flex-direction: column;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	transition: transform 1.45s;
	max-width: 250px;
	width: 100%;
	margin-inline: 10px;
	margin-bottom: 20px;
	cursor: pointer;
	opacity: 0.9;
	:hover {
		transform: scale(0.95);
		opacity: 1;
	}
	.content {
		width: 100%;
		position: relative;
		white-space: normal;
		display: flex;
		align-content: flex-start;
		flex-wrap: wrap;
		flex-direction: column;
		overflow-wrap: break-word;
		background-color: #2b2b2a;
		padding: 10px;
		min-height: 100px;
		.content-title {
			overflow-wrap: break-word;
			font-weight: 500;
			width: 200px;
			font-size: 1.2em;
			margin-bottom: 10px;
		}
		.content-data {
			font-size: 16px;
			color: #948c8c;
		}
	}
	@media screen and (max-width: 1369) {
		max-width: 243px;
		width: 100%;
	}

	@media screen and (max-width: 1023px) {
		max-width: 243px;
		width: 100%;
	}

	@media screen and (max-width: 770px) {
		max-width: 215px;
		width: 100%;
	}
	@media screen and (max-width: 600px) {
		max-width: 100%;
		width: 100%;
	}

	.score {
		position: absolute;
		top: -28%;
		right: 1%;
		z-index: 9999;
	}
	img {
		width: 100%;
		transition: all 0.3s;
		object-fit: cover;
		border: none;
	}
	@media screen and (max-width: 1023px) {
		max-width: 243px;
		width: 100%;
	}

	@media screen and (max-width: 1370) {
		max-width: 243px;
		width: 100%;
	}
	@media screen and (max-width: 770px) {
		max-width: 320px;
		width: 100%;
	}
	@media screen and (max-width: 600px) {
		max-width: 100%;
		width: 100%;
	}
`;
