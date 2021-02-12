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
			const newObject = state.products.filter((product) => product.id === action.itemID);

			return {
				...state,
				cart: [...state.cart, newObject],
			};
		}
		case actionTypes.ADD_TO_WISHLIST: {
			const newObject = state.products.filter((product) => product.id === action.itemID);

			// checking for duplicates

			return {
				...state,
				wishlist: [...state.wishlist, ...newObject],
			};
		}
		default:
			return state;
	}
};
