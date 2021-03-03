import styled from 'styled-components';

export const SectionCategory = styled.div`
	width: 40%;
	height: 70vh;
	position: relative;
	margin-right: 3rem;
	margin-bottom: 5rem;
	border-radius: 5px;
	overflow: hidden;
	transform: translateY(0);
	transition: all 0.4s ease-in-out;

	&:hover {
		transform: translateY(-5px);
	}

	img {
		width: 100%;
		object-fit: contain;
		height: 100%;
	}

	@media only screen and (max-width: 75em) {
		height: 50vh;
	}

	@media only screen and (max-width: 50em) {
		height: 100%;
	}

	@media only screen and (max-width: 37.5em) {
		height: 50vh;
		width: 90%;
	}
`;

export const TextContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 3;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;

	h5 {
		font-size: 2.4rem;
		background-color: ${(props) => props.theme.green};
		padding: 1.5rem;
		text-transform: uppercase;
		color: ${(props) => props.theme.background};
	}
`;
