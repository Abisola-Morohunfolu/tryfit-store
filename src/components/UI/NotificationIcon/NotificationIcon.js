import { IconContainer } from './style/NotificationIconStyle';

const NotificationIcon = ({ children, badge, clicked }) => {
	return (
		<IconContainer onClick={clicked}>
			{children}

			{badge > 0 ? <span>{badge}</span> : null}
		</IconContainer>
	);
};

export default NotificationIcon;
