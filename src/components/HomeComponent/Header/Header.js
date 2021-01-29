import Button from '../../UI/Button/Button';
import { HeaderContainer, TextHeading, HeaderText } from './styles/HeaderStyle';
import { ReactComponent as RightArrow } from '../../../assets/right-arrow.svg';

const Header = () => {
	return (
		<HeaderContainer>
			<TextHeading>
				Explore the very best <span>deals</span>
			</TextHeading>
			<HeaderText>Quality Products, Amazing Offers.</HeaderText>
			<Button greenButton cta>
				Shop now
				<RightArrow />
			</Button>
		</HeaderContainer>
	);
};

export default Header;
