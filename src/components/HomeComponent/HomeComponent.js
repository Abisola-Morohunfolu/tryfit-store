import CategoriesSection from './CategoriesSection/CategoriesSection';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import ProductSlider from './ProductSlider.js/ProductSlider';

const Home = () => {
	return (
		<>
			<Navigation />
			<Header />
			<ProductSlider />
			<CategoriesSection />
		</>
	);
};

export default Home;
