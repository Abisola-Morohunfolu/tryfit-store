import { useGlobalStateContext } from '../../context/context';
import { EmptyCartContainer } from '../Cart/style/CartStyle';
import WishListItem from './Item/WishListItem';

const Wishlist = () => {
	const { wishlist } = useGlobalStateContext();
	return (
		<div>
			{wishlist.length === 0 && (
				<EmptyCartContainer>
					<h3>You have no items in your wishlist</h3>
				</EmptyCartContainer>
			)}

			{wishlist.length > 0 &&
				wishlist.map((product) => (
					<WishListItem
						key={product.title}
						title={product.title}
						image={product.image}
						price={product.price}
						id={product.id}
					/>
				))}
		</div>
	);
};

export default Wishlist;
