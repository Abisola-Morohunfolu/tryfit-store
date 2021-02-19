import { AnimatePresence } from 'framer-motion';
import { sliderIndex } from '../../data';
import SliderDot from '../HomeComponent/ProductSlider.js/SliderDot';
import Button from '../UI/Button/Button';
import {
	Container,
	ImageConatiner,
	TextContainer,
	ButtonContainer,
	SliderControls,
} from './style/ProductCardStyle';
import { motion } from 'framer-motion';
import { useGlobalDispatchContext } from '../../context/context';
import {
	addToCart,
	addToWishlist,
	removeFromCart,
	removeFromWishlist,
} from '../../context/actions/actions';

const ProductCard = ({
	title,
	description,
	price,
	image,
	id,
	slider,
	currentSliderIndex,
	changeIndex,
	inCart,
	inWishList,
}) => {
	const dispatch = useGlobalDispatchContext();

	const slideAnimation = {
		initial: {
			y: 100,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,

				ease: [0.6, 0.01, -0.05, 0.9],
			},
		},
		exit: {
			y: -100,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: [0.6, 0.01, -0.05, 0.9],
			},
		},
	};
	const imageAnimation = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.8,
				// ease: [0.45, 0, 0.55, 1],
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.4,
				ease: [0.45, 0, 0.55, 1],
			},
		},
	};

	return (
		<AnimatePresence initial={false} exitBeforeEnter={false}>
			<Container>
				<ImageConatiner
					initial="initial"
					animate="animate"
					exit="exit"
					variants={imageAnimation}
					key={image}
				>
					<img src={image} alt={title} />
				</ImageConatiner>
				<TextContainer>
					<motion.div
						initial="initial"
						animate="animate"
						exit="exit"
						variants={slideAnimation}
						key={title}
					>
						<h3>{title}</h3>
						<p>{description}</p>
						<h6>$ {price}</h6>
					</motion.div>
					<ButtonContainer>
						{inCart ? (
							<Button greenButton clicked={() => dispatch(removeFromCart(id))}>
								remove from cart
							</Button>
						) : (
							<Button greenButton clicked={() => dispatch(addToCart(id))}>
								add to cart
							</Button>
						)}
						{inWishList ? (
							<Button outline clicked={() => dispatch(removeFromWishlist(id))}>
								remove from wishlist
							</Button>
						) : (
							<Button outline clicked={() => dispatch(addToWishlist(id))}>
								add to wishlist
							</Button>
						)}
					</ButtonContainer>
					{slider && (
						<SliderControls>
							{sliderIndex.map((dot) => (
								<SliderDot
									index={dot.index}
									currentIndex={currentSliderIndex}
									setIndex={changeIndex}
									key={dot.index}
								/>
							))}
						</SliderControls>
					)}
				</TextContainer>
			</Container>
		</AnimatePresence>
	);
};

export default ProductCard;
