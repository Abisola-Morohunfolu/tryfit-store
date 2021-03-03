import styled from 'styled-components';

export const IconContainer = styled.div`
	position: relative;
	margin: 0 1.5rem;
	cursor: pointer;
	text-align: center;
	font-size: 1.4rem;

	svg {
		width: 4rem;
		fill: none;
		stroke: ${(props) => props.theme.text};
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 3px;
		margin-bottom: 0;
	}

	svg path {
		fill: ${(props) => props.theme.text};
	}

	span {
		position: absolute;
		top: 0;
		right: -10%;
		background-color: ${(props) => props.theme.green};
		border-radius: 100%;
		height: 1.75rem;
		width: 1.75rem;
		font-size: 1.2rem;
		color: ${(props) => props.theme.background};
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
