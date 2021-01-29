import { CurrentDot, Dot } from './style/SliderDotStyle';

const SliderDot = ({ index, currentIndex, setIndex }) => {
	if (index === currentIndex) return <CurrentDot />;

	return <Dot onClick={() => setIndex(index)} />;
};

export default SliderDot;
