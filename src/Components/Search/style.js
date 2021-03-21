import styled from 'styled-components';

export const SearchStyles = styled.div`
	font-family: 'Titillium Web', sans-serif;
	.input {
		height: 40px;
		width: 100%;
		padding: 10px;
		background-color: #111;
		border: 1px solid #fff;
		margin-bottom: 20px;
		font-size: 1.5em;
		color: white;
		:focus {
			outline: red auto 0px;
			border-radius: 0;
			border-color: red;
		}
		@media screen and (max-width: 700px) {
			width: auto;
		}
		@media screen and (max-width: 450px) {
			width: 100%;
		}
	}
	.label {
		font-size: 1.5em;
		line-height: 24px;
		display: block;
		padding-bottom: 10px;
	}
	@media screen and (max-width: 670px) {
		//width: 50%;
	}
	@media screen and (max-width: 450px) {
		width: 100%;
	}
`;

export const StyledSearchBar = styled.div`
	width: 100%;
	background: #777774;
	padding: 20px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	color: rgba(239, 235, 231, 0.9);
`;

export const StyledSearchBarContent = styled.div`
	//	max-width: 640px;
	width: 30%;
	height: 55px;
	background: #111;
	border: 1px solid white;
	position: relative;
	color: rgba(239, 235, 231, 0.9);
	.icon {
		position: absolute;
		left: 7px;
		top: 9px;
		width: 40px;
		color: rgba(187, 0, 17, 1);
		z-index: 9000;
	}
	input {
		font-size: 1.5rem;
		position: absolute;
		left: 0px;
		margin: 8px 0;
		padding: 0 0 0 60px;
		border: 0;
		width: 95%;
		background: transparent;
		height: 40px;
		color: rgba(239, 235, 231, 0.9);
		box-sizing: border-box;
		:focus {
			outline: none;
		}
		::placeholder {
			color: rgba(239, 235, 231, 0.19);
		}
	}
	@media screen and (max-width: 748px) {
		width: 95%;
		margin-bottom: 20px;
	}
`;
