import Button from '../../UI/Button/Button';
import { HeaderContainer, TextHeading, HeaderText } from './styles/HeaderStyle';
import { ReactComponent as RightArrow } from '../../../assets/right-arrow.svg';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<HeaderContainer>
			<TextHeading>
				Explore the very best <span>deals</span>
			</TextHeading>
			<HeaderText>Quality Products, Amazing Offers.</HeaderText>
			<Link to="/categories">
				Shop now
				<RightArrow />
			</Link>
		</HeaderContainer>
	);
};

export default Header;
