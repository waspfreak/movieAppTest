import styled from 'styled-components';

export const StyledMovieModal = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.9);
	.modal {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 99999;
		left: 0;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.9);
		animation-name: appear;
		animation-duration: 0.5s;
	}
	.modal-dialog {
		border-radius: 0;
		max-width: 100%;
		background: transparent;
		position: relative;
		margin: 0 20px;
		max-height: calc(100vh - 100px);
		text-align: left;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		-webkit-animation-name: animatetop;
		-webkit-animation-duration: 0.4s;
		animation-name: slide-in;
		animation-duration: 0.5s;
	}
	.modal-header,
	.modal-footer {
		display: flex;
		align-items: center;
		color: white;
		padding: 1rem;
		font-size: xx-large;
	}
	.modal-header {
		justify-content: space-between;
	}
	.modal-footer {
		border-top: 1px solid rgba(239, 235, 231, 0.9);
		justify-content: flex-end;
	}
	.modal-close {
		cursor: pointer;
		padding: 1rem;
		margin: -1rem -1rem -1rem auto;
	}
	.modal-body {
		overflow: auto;
	}
	.modal-content {
		padding: 1rem;
	}
	@keyframes appear {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes slide-in {
		from {
			transform: translateY(-150px);
		}
		to {
			transform: translateY(0);
		}
	}
`;
