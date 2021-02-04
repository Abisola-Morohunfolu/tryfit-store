import * as actionTypes from './actionTypes';

export const setProducts = (products) => {
	return {
		type: actionTypes.SET_PRODUCTS,
		products: products,
	};
};

export const fetchedData = (products) => {
	console.log('dispatched');
	return {
		type: actionTypes.FECTHED_DATA,
	};
};

export const fetchProducts = (dispatch) => {
	fetch('https://fakestoreapi.com/products/')
		.then((res) => res.json())
		.then((products) => {
			dispatch(fetchedData());
			dispatch(setProducts(products));
			// console.log(products);
		});
};
