import { Redirect } from 'react-router-dom';
import { useGlobalStateContext } from '../../context/context';
import ProductCard from '../ProductCard/ProductCard';

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
		<div>
			<h3>{category}</h3>
			{categoryProducts.map((product) => (
				<ProductCard
					title={product.title}
					description={products.description}
					key={products.id}
					price={product.price}
					image={product.image}
					reversed
				/>
			))}
		</div>
	);
};

export default ProductList;
