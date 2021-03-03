import styled from 'styled-components';

export const ListCard = styled.div`
	border-radius: 3px;
	box-shadow: 2px 5px 12px rgba(0, 0, 0, 0.1);
	transition: all 0.4s ease-in-out;
	max-width: 25vw;
	height: 410px;
	margin: 3rem 0;
	padding: 1rem;

	&:hover {
		transform: translateY(-3px);
	}

	@media only screen and (max-width: 37.5em) {
		height: 100%;
		max-width: 100%;
		padding: 1.5rem;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 300px;
	object-fit: contain;
`;

export const CardFooter = styled.div`
	margin-top: 5px;
	border-top: 1px solid #aaa;

	h4 {
		color: ${(props) => props.theme.green};
		font-size: 1.6rem;
		margin: 1rem 0;
	}

	div p {
		font-size: 1.4rem;
		color: #666;
	}
`;
