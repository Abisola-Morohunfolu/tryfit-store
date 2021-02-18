import styled, { css } from 'styled-components';

export const Button = styled.button`
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	padding: 1.6rem 3.5rem;
	font-family: 'Lato', sans-serif;
	font-size: 1.8rem;
	text-transform: uppercase;
	transition: all 0.4s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		margin-left: 1rem;
		transition: all 0.3s ease-in-out;
	}

	svg line,
	svg path {
		stroke: ${(props) => props.theme.background};
	}

	${(props) =>
		props.cta &&
		css`
			font-size: 3rem;
			font-family: 'Montserrat', sans-serif;
			font-weight: 600;
		`}

	${(props) =>
		props.greenButton &&
		css`
			background-color: ${(props) => props.theme.green};
			color: ${(props) => props.theme.background};
		`}

	${(props) =>
		props.outline &&
		css`
			border: 1px solid ${(props) => props.theme.green};
			color: ${(props) => props.theme.text};
		`}
        
    &:hover {
		${(props) =>
			props.outline &&
			css`
				background-color: ${(props) => props.theme.green};
				color: ${(props) => props.theme.background};
				outline: 2px solid ${(props) => props.theme.background};
				outline-offset: -4px;
			`}

		${(props) =>
			props.greenButton &&
			css`
				background-color: #07b858;
			`}
            
        svg {
			transform: translateX(5px);
		}
	}
`;
