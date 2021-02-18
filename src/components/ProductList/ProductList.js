import { Redirect } from 'react-router-dom';
import { useGlobalStateContext } from '../../context/context';

import ProductListCard from './ProductListCard/ProductListCard';
import { ListContainer, ProductListStyle } from './ProductListStyle';

// const splitAndJoinText = (word) => {
// 	const splitText = word.split('-')
// 	const
// }

const ProductList = ({ match }) => {
	const { products } = useGlobalStateContext();

	if (products.length === 0) return <Redirect to="/" />;

	const { id } = match.params;

	//check if there's hyphen
	const splitText = id.split('-');
	const category = splitText.length > 1 ? splitText[0] + ' ' + splitText[1] : id;

	const categoryProducts = products.filter((product) => {
		return product.category === category;
	});

	return (
		<ProductListStyle>
			<h2>{category}</h2>
			<ListContainer>
				{categoryProducts.map((product) => (
					<ProductListCard
						title={product.title}
						key={product.id}
						productID={product.id}
						price={product.price}
						image={product.image}
						wishlist={product.inWishList}
					/>
				))}
			</ListContainer>
		</ProductListStyle>
	);
};

export default ProductList;
