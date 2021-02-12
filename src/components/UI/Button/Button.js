import { Button as StyledButton } from './style/ButtonStyle';

const Button = (props) => {
	const { children, clicked, ...otherProps } = props;
	return (
		<StyledButton {...otherProps} onClick={clicked}>
			{children}
		</StyledButton>
	);
};

export default Button;
