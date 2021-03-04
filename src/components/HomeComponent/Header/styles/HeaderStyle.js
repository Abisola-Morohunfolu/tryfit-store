import styled from 'styled-components';

export const HeaderContainer = styled.header`
	/* padding: 0 10rem; */
	height: 90vh;
	display: flex;
	flex-wrap: wrap;
	align-content: center;

	a {
		text-decoration: none;
		font-family: 'Lato' sans-serif;
		font-size: 2.4rem;
		font-weight: 400;
		background-color: ${(props) => props.theme.green};
		color: ${(props) => props.theme.background};
		text-transform: uppercase;
		padding: 1.6rem 2.4rem;
		border-radius: 2px;
		transition: all 0.3s ease-in-out;
		outline: none;
		display: flex;
		align-items: center;
	}

	a svg {
		transform: translateX(8px);
	}

	a:hover {
		transform: translateX(10px);
	}

	@media only screen and (max-width: 50em) {
		height: 80vh;
	}

	@media only screen and (max-width: 37.5em) {
		text-align: center;
		justify-content: center;
		height: 90vh;
	}
`;

export const TextHeading = styled.h1`
	font-size: 9rem;
	line-height: 9.2rem;
	color: ${(props) => props.theme.text};
	text-transform: uppercase;
	width: 80%;

	span {
		color: ${(props) => props.theme.green};
	}

	@media only screen and (max-width: 37.5em) {
		font-size: 5rem;
		line-height: 6rem;
		width: 100%;
	}
`;

export const HeaderText = styled.p`
	font-size: 3rem;
	width: 100%;
	font-family: 'Lato', sans-serif;
	margin-bottom: 1.5rem;
	color: ${(props) => props.theme.green};

	@media only screen and (max-width: 37.5em) {
		font-size: 2.8rem;
		margin-bottom: 3rem;
		margin-top: 3rem;
	}
`;
