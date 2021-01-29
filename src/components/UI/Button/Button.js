import { Button as StyledButton } from './style/ButtonStyle';

const Button = (props) => {
	const { children, ...otherProps } = props;
	return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;
