import styled from 'styled-components';

export const ListContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	@media only screen and (max-width: 37.5em) {
		flex-direction: column;
		justify-content: center;
		place-content: center;
	}
`;

export const ProductListStyle = styled.section`
	h2 {
		font-size: 3.6rem;
		margin-bottom: 2.5rem;
		text-align: center;
		text-transform: capitalize;
	}

	@media only screen and (max-width: 37.5em) {
		margin: 0 auto;
	}
`;
