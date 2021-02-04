import * as actionTypes from '../actions/actionTypes';

export const intialState = {
	products: [],
	cart: [],
	wishList: [],
	loading: true,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.FECTHED_DATA: {
			console.log(state);
			return {
				...state,
				loading: false,
			};
		}
		case actionTypes.SET_PRODUCTS: {
			return { ...state, products: action.products };
		}
		// case actionTypes.ADD_TO_CART: {
		// }
		default:
			return state;
	}
};
