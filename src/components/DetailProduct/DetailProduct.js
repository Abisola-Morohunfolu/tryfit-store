import { Redirect } from 'react-router-dom';
import { useGlobalStateContext } from '../../context/context';
import { findItem } from '../../utils';
import ProductCard from '../ProductCard/ProductCard';

const DetailProduct = ({ match }) => {
	const { productID } = match.params;
	console.log(productID);

	const { products } = useGlobalStateContext();

	if (products.length === 0) return <Redirect to="/" />;

	const selectedProduct = { ...findItem(products, +productID)[0] };

	console.log(selectedProduct);
	return (
		<div>
			<ProductCard
				image={selectedProduct.image}
				title={selectedProduct.title}
				description={selectedProduct.description}
				inCart={selectedProduct.inCart}
				inWishList={selectedProduct.inWishList}
				price={selectedProduct.price}
				id={selectedProduct.id}
			/>
		</div>
	);
};

export default DetailProduct;
