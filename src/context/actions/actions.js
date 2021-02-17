import { updateFetchedProducts } from '../../utils';
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
			const updatedProducts = updateFetchedProducts(products);
			// console.log(updatedProducts);
			dispatch(setProducts(updatedProducts));
			// console.log(products);
		});
};

export const addToCart = (id) => {
	return {
		type: actionTypes.ADD_TO_CART,
		itemID: id,
	};
};

export const removeFromCart = (id) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		itemID: id,
	};
};

export const addToWishlist = (id) => {
	return {
		type: actionTypes.ADD_TO_WISHLIST,
		itemID: id,
	};
};

export const removeFromWishlist = (id) => {
	return {
		type: actionTypes.REMOVE_FROM_WISHLIST,
		itemID: id,
	};
};

export const incrementCart = (id) => {
	return {
		type: actionTypes.INCREMENT_CART,
		itemID: id,
	};
};

export const decrementCart = (id) => {
	return {
		type: actionTypes.DECREMENT_CART,
		itemID: id,
	};
};
