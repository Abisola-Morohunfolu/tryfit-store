import * as React from 'react';
import { ProductData } from '../../../data';
import ProductCard from '../../ProductCard/ProductCard';

const ProductSlider = () => {
	const [sliderIndex, setSliderIndex] = React.useState(0);

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
				changeIndex={setSliderIndex}
			/>
			<button onClick={() => setSliderIndex(sliderIndex + 1)}>chaneg index</button>
		</>
	);
};

export default ProductSlider;
