import { ReactComponent as LogoIcon } from '../../../assets/icon.svg';
import { ReactComponent as LogoText } from '../../../assets/tryfit.svg';
import { ReactComponent as CartIcon } from '../../../assets/iconfinder_simpline_41_2305621.svg';
import { ReactComponent as WishListIcon } from '../../../assets/iconfinder_icon-ios7-heart-outline_211754.svg';
import NotificationIcon from '../../UI/NotificationIcon/NotificationIcon';
import { StyledNav, LogoContainer } from './style/NavigationStyles';
import { useGlobalStateContext } from '../../../context/context';
import { useHistory } from 'react-router-dom';

const Navigation = () => {
	const { cart, wishlist } = useGlobalStateContext();
	const history = useHistory();

	return (
		<StyledNav>
			<LogoContainer onClick={() => history.push('/')}>
				<LogoIcon />
				<LogoText />
			</LogoContainer>
			<NotificationIcon badge={cart.length} clicked={() => history.push('/cart')}>
				<CartIcon />
			</NotificationIcon>
			<NotificationIcon badge={wishlist.length} clicked={() => history.push('/wishlist')}>
				<WishListIcon />
			</NotificationIcon>
		</StyledNav>
	);
};

export default Navigation;
