import * as React from 'react';
// import { useGlobalStateContext } from '../../../context/context';
// import { ProductData } from '../../../data';
import ProductCard from '../../ProductCard/ProductCard';
import { ProductSlider as ProductSliderContainer } from './style/ProductSliderStyle';

const ProductSlider = ({ products, loading }) => {
	const [sliderIndex, setSliderIndex] = React.useState(0);
	// const { products, loading } = useGlobalStateContext();
	// console.log(products[sliderIndex].title);

	React.useEffect(() => {
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
		<ProductSliderContainer>
			{products.length === 0 ? null : (
				<ProductCard
					title={products[sliderIndex].title}
					description={products[sliderIndex].description}
					image={products[sliderIndex].image}
					price={products[sliderIndex].price}
					slider
					currentSliderIndex={sliderIndex}
					changeIndex={onIndexChange}
					id={products[sliderIndex].id}
					inCart={products[sliderIndex].inCart}
					inWishList={products[sliderIndex].inWishList}
				/>
			)}
		</ProductSliderContainer>
	);
};

export default ProductSlider;
