import styled from 'styled-components';

export const HeaderContainer = styled.header`
	/* padding: 0 10rem; */
	height: 90vh;
	display: flex;
	flex-wrap: wrap;
	align-content: center;
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
`;

export const HeaderText = styled.p`
	font-size: 3rem;
	width: 100%;
	font-family: 'Lato', sans-serif;
	margin-bottom: 1.5rem;
	color: ${(props) => props.theme.green};
`;
