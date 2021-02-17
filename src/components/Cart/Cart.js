import { useGlobalStateContext } from '../../context/context';

const Cart = () => {
	const { cart } = useGlobalStateContext();
	console.log(cart);
	return (
		<div>
			<h1>{cart[0].count}</h1>
		</div>
	);
};

export default Cart;
