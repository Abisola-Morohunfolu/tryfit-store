import styled from 'styled-components';

export const CurrentDot = styled.span`
	height: 1.5rem;
	width: 1.5rem;
	border-radius: 100%;
	background-color: #666666;

	@media only screen and (max-width: 37.5em) {
		height: 2.5rem;
		width: 2.5rem;
	}
`;

export const Dot = styled.span`
	height: 1rem;
	width: 1rem;
	border-radius: 100%;
	border: 1px solid #666666;
	cursor: pointer;

	@media only screen and (max-width: 37.5em) {
		height: 2rem;
		width: 2rem;
	}
`;
