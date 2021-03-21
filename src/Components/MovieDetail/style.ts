import styled from 'styled-components';

export const StyledMovieDetails = styled.div`
	background-size: cover !important;
	background-position: center !important;
	width: 100%;
	padding: 40px 20px;
	box-sizing: border-box;
	animation: animateMovieinfo 1s;

	.movie_details-content {
		max-width: 1280px;
		display: flex;
		margin: 0 auto;
		background: rgb(0, 0, 0, 0.8);
		position: relative;
	}

	.movie_details-thumb {
		margin-top: 20px;
		.image-thumb {
			width: 300px;
			@media screen and (max-width: 700px) {
				width: 100%;
				opacity: 0.5;
			}
		}
	}
	.movie_details-text {
		color: rgba(239, 235, 231, 0.9);
		overflow: hidden;
		padding: 16px;

		@media screen and (max-width: 700px) {
			position: absolute;
			margin-top: 25%;
		}

		.movie_details_title {
			font-size: 48px;
		}
		.movie_details_description {
			font-size: 18px;
			line-height: 26px;
			padding-top: 16px;
			padding-bottom: 16px;
		}
	}

	.rating {
		display: flex;
		justify-content: flex-start;
	}

	.score {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		border-radius: 50%;
		margin: 0 0 0 0;
	}

	@media screen and (max-width: 768px) {
		min-height: 600px;
		height: auto;
	}

	@keyframes animateMovieinfo {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
