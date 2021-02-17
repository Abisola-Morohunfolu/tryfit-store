import { findItem } from '../../utils';
import * as actionTypes from '../actions/actionTypes';

export const intialState = {
	products: [],
	cart: [],
	wishlist: [],
	loading: true,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.FECTHED_DATA: {
			return {
				...state,
				loading: false,
			};
		}
		case actionTypes.SET_PRODUCTS: {
			return { ...state, products: action.products };
		}
		case actionTypes.ADD_TO_CART: {
			// find object and change incart state
			const newState = [...state.products];
			const indexOfItem = newState.findIndex((product) => product.id === action.itemID);
			const selectedProduct = newState[indexOfItem];
			selectedProduct.inCart = true;

			//
			const newObject = findItem(state.products, action.itemID);
			newObject[0].count = 1;
			newObject[0].inCart = true;

			return {
				...state,
				products: [...newState],
				cart: [...state.cart, ...newObject],
			};
		}
		case actionTypes.REMOVE_FROM_CART: {
			// find object and change incart state
			const newState = [...state.products];
			const indexOfItem = newState.findIndex((product) => product.id === action.itemID);
			const selectedProduct = newState[indexOfItem];
			selectedProduct.inCart = false;

			const newCart = state.cart.filter((product) => product.id !== action.itemID);

			return {
				...state,
				products: [...newState],
				cart: [...newCart],
			};
		}
		case actionTypes.ADD_TO_WISHLIST: {
			// find object and change incart state
			const newState = [...state.products];
			const indexOfItem = newState.findIndex((product) => product.id === action.itemID);
			const selectedProduct = newState[indexOfItem];
			selectedProduct.inWishlist = true;

			const newObject = findItem(state.products, action.itemID);

			return {
				...state,
				products: [...newState],
				wishlist: [...state.wishlist, ...newObject],
			};
		}
		case actionTypes.REMOVE_FROM_WISHLIST: {
			//
			const newState = [...state.products];
			const indexOfItem = newState.findIndex((product) => product.id === action.itemID);
			const selectedProduct = newState[indexOfItem];
			selectedProduct.inWishlist = false;

			const newWishlist = state.wishlist.filter((product) => product.id !== action.itemID);

			return {
				...state,
				products: [...newState],
				wishlist: [...newWishlist],
			};
		}
		case actionTypes.INCREMENT_CART: {
			const newCart = [...state.cart];
			const selectedItem = newCart.find((cartItem) => cartItem.id === action.itemID);
			const index = newCart.indexOf(selectedItem);
			const updatedCart = [
				...newCart.slice(0, index),
				{ ...newCart[index], count: newCart[index].count + 1 },
				...newCart.slice(index + 1),
			];

			return {
				...state,
				cart: [...updatedCart],
			};
		}
		case actionTypes.DECREMENT_CART: {
			console.log('fired', state.count);
			let newCart = [...state.cart];
			const index = newCart.findIndex((cartItem) => cartItem.id === action.itemID);
			const selectedItem = newCart[index];
			let updatedCart;

			if (selectedItem.count === 1) {
				newCart = newCart.filter((product) => product.id !== action.itemID);
				updatedCart = [...newCart];
			} else {
				updatedCart = [
					...newCart.slice(0, index),
					{ ...newCart[index], count: newCart[index].count - 1 },
					...newCart.slice(index + 1),
				];
			}

			return {
				...state,
				cart: [...updatedCart],
			};
		}
		default:
			return state;
	}
};
