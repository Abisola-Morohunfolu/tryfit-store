import * as actionTypes from './actionTypes';

export const setProducts = (products) => {
	return {
		type: actionTypes.SET_PRODUCTS,
		products: products,
	};
};

export const fetchedData = (products) => {
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

export const addToCart = (id) => {
	return {
		type: actionTypes.ADD_TO_CART,
		itemID: id,
	};
};

export const addToWishlist = (id) => {
	return {
		type: actionTypes.ADD_TO_WISHLIST,
		itemID: id,
	};
};
