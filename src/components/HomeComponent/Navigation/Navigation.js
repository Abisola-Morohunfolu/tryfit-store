import { ReactComponent as LogoIcon } from '../../../assets/icon.svg';
import { ReactComponent as LogoText } from '../../../assets/tryfit.svg';
import { StyledNav, LogoContainer } from './style/NavigationStyles';

const Navigation = () => {
	return (
		<StyledNav>
			<LogoContainer>
				<LogoIcon />
				<LogoText />
			</LogoContainer>
		</StyledNav>
	);
};

export default Navigation;
