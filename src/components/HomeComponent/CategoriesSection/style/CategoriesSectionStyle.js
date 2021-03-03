import styled from 'styled-components';

export const SectionStyle = styled.section`
	margin-top: 5rem;
`;

export const HeaderSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3rem;

	h3 {
		font-size: 3rem;
		font-family: 'Lato', sans-serif;
	}

	a {
		text-decoration: none;
		color: ${(props) => props.theme.green};
		font-size: 1.8rem;

		transition: all 0.3s ease-in-out;
	}

	a:hover {
		letter-spacing: 1px;
	}
`;

export const CategoryContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 5rem;

	@media only screen and (max-width: 37.5em) {
		flex-direction: column;
		align-items: center;
	}
`;
