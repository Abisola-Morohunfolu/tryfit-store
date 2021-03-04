import styled, { css } from 'styled-components';

export const WishListItemContainer = styled.div`
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	padding: 4rem 0;

	h4 {
		color: ${(props) => props.theme.green};
		font-size: 1.8rem;
		text-align: left;
		margin-right: auto;
	}

	p {
		font-size: 1.4rem;
		margin-top: 4px;
		color: #777;
	}
`;

export const WishListImage = styled.img`
	width: 6rem;
	height: 6rem;
	margin-right: 1rem;
	object-fit: contain;
`;

export const ButtonDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: auto;
`;

export const Button = styled.button`
	border: none;
	outline: none;
	color: #777;
	background-color: transparent;
	font-size: 1.4rem;
	font-family: inherit;
	cursor: pointer;
	text-transform: capitalize;
	text-align: left;
	padding: 4px 0;

	${(props) =>
		props.green &&
		css`
			color: ${(props) => props.theme.green};
		`}
`;
