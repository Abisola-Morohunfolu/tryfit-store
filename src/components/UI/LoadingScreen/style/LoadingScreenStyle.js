import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
    0% {
        opacity: 1;
    }

    0% {
        opacity: 0.5;
    }
`;

export const Loading = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: ${(props) => props.theme.background};
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		height: 15rem;
		width: 15rem;
		animation: ${breatheAnimation} 1s alternate-reverse infinite backwards;
	}
`;
