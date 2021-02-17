export const updateFetchedProducts = (arrObject) => {
	const newProductsState = arrObject.map((product) => {
		return {
			...product,
			inCart: false,
			inWishList: false,
			count: 0,
		};
	});

	return newProductsState;
};

export const findItem = (arrObject, id) => {
	const item = arrObject.filter((obj) => obj.id === id);

	return item;
};
