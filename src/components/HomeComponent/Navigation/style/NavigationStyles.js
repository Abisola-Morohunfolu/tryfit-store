import styled from 'styled-components';

export const StyledNav = styled.nav`
	display: flex;
	padding: 2rem 0;
`;

export const LogoContainer = styled.div`
	display: inline-block;
	margin-right: auto;
	cursor: pointer;

	svg:last-child path {
		fill: ${(props) => props.theme.text};
	}
`;
