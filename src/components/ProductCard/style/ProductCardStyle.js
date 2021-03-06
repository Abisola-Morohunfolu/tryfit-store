import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section`
	padding: 2rem 0;
	display: flex;
	height: 90vh;
	flex-direction: row-reverse;

	@media only screen and (max-width: 75em) {
		height: 75vh;
	}

	@media only screen and (max-width: 50em) {
		height: 50vh;
	}

	@media only screen and (max-width: 37.5em) {
		flex-direction: column;
		min-height: 110%;
		height: 120%;
		margin-bottom: 10rem;
	}

	/* ${(props) =>
		props.reversed &&
		css`
			flex-direction: row-reverse;
		`} */
`;

export const ImageConatiner = styled(motion.div)`
	height: 100%;
	width: 45vw;
	display: flex;
	justify-content: center;

	img {
		height: 80%;

		max-width: 90%;
		object-fit: cover;
	}

	@media only screen and (max-width: 75em) {
		& {
			height: 75%;

			img {
				object-fit: contain;
			}
		}
	}

	@media only screen and (max-width: 37.5em) {
		width: 100%;
	}
`;

export const TextContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */

	h3 {
		color: ${(props) => props.theme.green};
		font-family: 'Lato', sans-serif;
		font-size: 3.6rem;
		margin-bottom: 3rem;
		transition: all ease-in-out 6s;
	}

	p {
		font-size: 1.8rem;
		line-height: 2.1rem;
		font-family: 'Lato', sans-serif;
		width: 90%;
		text-transform: capitalize;
		font-weight: 400;
		margin-bottom: 5rem;
	}

	h6 {
		font-family: 'Lato', sans-serif;
		font-size: 2.4rem;
		color: ${(props) => props.theme.green};
		margin-bottom: 5rem;
	}

	@media only screen and (max-width: 62.5em) {
		h3 {
			font-size: 3rem;
		}

		p {
			/* font-size: 2rem; */
			line-height: 2.6rem;
		}
	}

	@media only screen and (max-width: 37.5em) {
		width: 100%;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	margin-bottom: 5rem;

	button:first-child {
		margin-right: 3rem;
	}

	@media only screen and (max-width: 50em) {
		flex-direction: column;

		button:first-child {
			margin-right: 0rem;
			margin-bottom: 3rem;
		}
	}
`;

export const SliderControls = styled.div`
	display: flex;
	align-items: center;
	transform: translateX(25%);
	/* align-self: center; */
	/* place-self: center; */

	@media only screen and (max-width: 37.5em) {
		align-self: center;
		margin-bottom: 2rem;
	}
	span {
		margin: 0 5px;
	}
`;
