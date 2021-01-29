import styled from 'styled-components';

export const StyledNav = styled.nav`
	display: flex;
	padding: 2rem 0;
`;

export const LogoContainer = styled.div`
	display: inline-block;

	svg:last-child path {
		fill: ${(props) => props.theme.text};
	}
`;
