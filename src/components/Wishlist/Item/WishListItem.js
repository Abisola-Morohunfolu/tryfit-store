import { addToCart, removeFromWishlist } from '../../../context/actions/actions';
import { useGlobalDispatchContext } from '../../../context/context';
import { Button, ButtonDiv, WishListImage, WishListItemContainer } from './ItemStyle';

const WishListItem = ({ title, price, image, id }) => {
	const dispatch = useGlobalDispatchContext();
	return (
		<WishListItemContainer>
			<WishListImage src={image} alt={title} />
			<div>
				<h4>{title}</h4>
				<p>$ {price}</p>
			</div>
			<ButtonDiv>
				<Button onClick={() => dispatch(removeFromWishlist(id))}>Remove from Wishlist</Button>
				<Button onClick={() => dispatch(addToCart(id))} green>
					add to cart
				</Button>
			</ButtonDiv>
		</WishListItemContainer>
	);
};

export default WishListItem;
