import styled from 'styled-components';

export const CartHeading = styled.div`
	h2 {
		font-size: 3.6rem;
	}

	p {
		color: ${(props) => props.theme.green};
		font-size: 1.4rem;
	}
`;

export const EmptyCartContainer = styled.div`
	text-align: center;
	width: 100%;
	min-height: 75vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		font-size: 2.8rem;
		margin-bottom: 3rem;
		color: #aaa;
	}

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
	}

	a:hover {
		transform: translateY(-3px) scale(1.03);
	}
`;

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CheckoutBox = styled.div`
	align-self: flex-end;

	h6 {
		font-size: 2rem;
	}

	button {
		width: 100%;
	}
`;

export const TotalText = styled.div`
	display: flex;
	margin-bottom: 3rem;

	div {
		margin-right: 2rem;
	}

	p {
		color: ${(props) => props.theme.green};
		font-size: 1.4rem;
	}
`;
