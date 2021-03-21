import styled from 'styled-components';

export const StyledFooter = styled.div`
	.footer {
		font-family: 'Titillium Web', sans-serif;
		overflow: hidden;
		background: #2b2b2a;
		font-size: 0.95rem;
		color: #fff;
		text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.25);
		padding-left: 20px;
		padding-top: 36px;
		.link {
			color: #fff;
		}
	}
	@media screen and (max-width: 500px) {
		opacity: 0.9;
		font-size: 0.9rem;
	}
`;

export const StyledTMDBLogo = styled.img`
	width: 122px;
	float: right;
	margin: 0 1rem 0.5rem;
	filter: opacity(0.9) brightness(2);

	@media screen and (max-width: 500px) {
		display: inline-block;
		width: 90px;
		margin: 0 10px;
	}
`;
