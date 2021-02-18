import { Link } from 'react-router-dom';
import { useGlobalStateContext } from '../../context/context';
import Button from '../UI/Button/Button';
import CartItem from './CartItem/CartItem';
import {
	CartContainer,
	CartHeading,
	EmptyCartContainer,
	CheckoutBox,
	TotalText,
} from './style/CartStyle';

const Cart = () => {
	const { cart, total } = useGlobalStateContext();

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
			{cart.length > 0 ? (
				<CartContainer>
					{cart.map((product) => (
						<CartItem
							price={product.price}
							image={product.image}
							title={product.title}
							count={product.count}
							key={product.title}
							id={product.id}
							total={product.total}
						/>
					))}
					<CheckoutBox>
						<TotalText>
							<div>
								<h6>Order-Sub Total:</h6>
								<p>{cart.length} items</p>
							</div>
							<h6>$ {total}</h6>
						</TotalText>
						<Button greenButton clicked={() => alert('to do !')}>
							checkout
						</Button>
					</CheckoutBox>
				</CartContainer>
			) : null}
		</div>
	);
};

export default Cart;
