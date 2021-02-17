import { Link } from 'react-router-dom';
import { useGlobalStateContext } from '../../context/context';
import CartItem from './CartItem/CartItem';
import { CartHeading, EmptyCartContainer } from './style/CartStyle';

const Cart = () => {
	const { cart } = useGlobalStateContext();

	return (
		<div>
			<CartHeading>
				<h2>Your Cart</h2>
				<p>
					You have {cart.length} {cart.length > 1 ? 'items' : 'item'} in your cart
				</p>
			</CartHeading>
			{cart.length === 0 && (
				<EmptyCartContainer>
					<h3>Your cart is empty</h3>
					<Link to="/categories">go to shop</Link>
				</EmptyCartContainer>
			)}
			{cart.length > 0
				? cart.map((product) => (
						<CartItem
							price={product.price}
							image={product.image}
							title={product.title}
							count={product.count}
							key={product.title}
							id={product.id}
						/>
				  ))
				: null}
		</div>
	);
};

export default Cart;
