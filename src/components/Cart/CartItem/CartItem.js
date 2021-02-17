import { decrementCart, incrementCart, removeFromCart } from '../../../context/actions/actions';
import { useGlobalDispatchContext } from '../../../context/context';
import { CartImage, CartItemContainer, Counter, Price } from './style/CartItemStyle';

const CartItem = ({ image, id, title, count, price }) => {
	const dispatch = useGlobalDispatchContext();

	return (
		<CartItemContainer>
			<div>
				<CartImage src={image} alt={title} />
			</div>
			<h4>{title}</h4>
			<Counter>
				<button onClick={() => dispatch(decrementCart(id))}>-</button>
				<p>{count}</p>
				<button onClick={() => dispatch(incrementCart(id))}>+</button>
			</Counter>
			<Price>
				<p>$ {(price * count).toFixed(2)}</p>
				<button onClick={() => dispatch(removeFromCart(id))}>Remove from cart</button>
			</Price>
		</CartItemContainer>
	);
};

export default CartItem;
