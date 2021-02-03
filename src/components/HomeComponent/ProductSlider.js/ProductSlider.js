import * as React from 'react';
import { ProductData } from '../../../data';
import ProductCard from '../../ProductCard/ProductCard';

const ProductSlider = () => {
	const [sliderIndex, setSliderIndex] = React.useState(0);

	React.useLayoutEffect(() => {
		const index = sliderIndex;
		const nextIndex = index === 4 ? 0 : index + 1;

		// console.log(index, `Next index is ${nextIndex}`);

		let timer1 = setTimeout(() => {
			onIndexChange(nextIndex);
		}, 5000);

		return () => {
			clearTimeout(timer1);
		};
	}, [sliderIndex]);

	const onIndexChange = (index) => {
		return setSliderIndex(index);
	};

	return (
		<>
			<ProductCard
				title={ProductData[sliderIndex].title}
				description={ProductData[sliderIndex].description}
				image={ProductData[sliderIndex].image}
				price={ProductData[sliderIndex].price}
				reversed
				slider
				currentSliderIndex={sliderIndex}
				changeIndex={onIndexChange}
			/>
		</>
	);
};

export default ProductSlider;
