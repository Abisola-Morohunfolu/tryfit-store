import styled from 'styled-components';

export const Category = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Container = styled.section`
	margin-top: 10rem;
	text-align: center;

	h2 {
		font-size: 3.6rem;
		color: ${(props) => props.theme.green};
		margin-bottom: 3rem;
	}
`;
