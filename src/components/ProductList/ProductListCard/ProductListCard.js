import { Link, useRouteMatch } from 'react-router-dom';
import { CardFooter, Image, ListCard } from './ProductListCardStyle';

const ProductListCard = ({ image, title, price, wishlist, productID }) => {
	const { url } = useRouteMatch();

	return (
		<Link to={`${url}/${productID}`}>
			<ListCard>
				<div>
					<Image src={image} alt={title} />
				</div>
				<CardFooter>
					<h4>{title}</h4>
					<div>
						<p>$ {price}</p>
					</div>
				</CardFooter>
			</ListCard>
		</Link>
	);
};

export default ProductListCard;
