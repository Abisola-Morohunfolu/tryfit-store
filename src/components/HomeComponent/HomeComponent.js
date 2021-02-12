import * as React from 'react';
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/context';
import { fetchProducts } from '../../context/actions/actions';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import Header from './Header/Header';
import ProductSlider from './ProductSlider.js/ProductSlider';
import LoadingScreen from '../UI/LoadingScreen/LoadingScreen';

const Home = () => {
	const dispatch = useGlobalDispatchContext();
	const { loading } = useGlobalStateContext();

	React.useEffect(() => {
		// fetch('https://fakestoreapi.com/products/')
		// 	.then((res) => res.json())
		// 	.then((products) => {
		// 		dispatch(setProducts(products));
		// 		console.log(products);
		// 	});
		fetchProducts(dispatch);
	}, [dispatch]);

	React.useEffect(() => {
		console.log(loading);
	}, [loading]);

	if (loading) {
		return <LoadingScreen />;
	}

	return (
		<>
			<Header />
			<ProductSlider />
			<CategoriesSection />
		</>
	);
};

export default Home;
