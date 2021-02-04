import { ReactComponent as Logo } from '../../../assets/icon.svg';
import { Loading } from './style/LoadingScreenStyle';

const LoadingScreen = () => {
	return (
		<Loading>
			<Logo />
		</Loading>
	);
};

export default LoadingScreen;
