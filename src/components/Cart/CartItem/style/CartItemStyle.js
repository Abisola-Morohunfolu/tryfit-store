import styled from 'styled-components';

export const CartItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 4rem 0;

	h4 {
		color: ${(props) => props.theme.green};
		font-size: 1.8rem;
		text-align: left;
		margin-right: auto;
	}
`;

export const CartImage = styled.img`
	width: 6rem;
	height: 6rem;
	margin-right: 1rem;
	object-fit: contain;
`;

export const Counter = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #ccc;
	padding: 0.5rem 1.2rem;
	font-size: 2rem;
	color: ${(props) => props.theme.green};
	margin-right: 1.5rem;

	button {
		border: none;
		outline: none;
		color: #777;
		background-color: transparent;
		font-size: 1.8rem;
		padding: 1rem 1.2rem;
		cursor: pointer;
		font-weight: bold;
	}
`;

export const Price = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1rem;

	p {
		font-size: 1.6rem;
		color: ${(props) => props.theme.green};
	}

	button {
		border: none;
		outline: none;
		color: #777;
		background-color: transparent;
		font-size: 1.4rem;
		font-family: inherit;
		cursor: pointer;
		text-transform: capitalize;
	}
`;
