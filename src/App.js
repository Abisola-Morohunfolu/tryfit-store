import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './theme/themeContext';
import { darkTheme, lightTheme } from './theme/theme';
import { GlobalStyle } from './styles/globalStyles';
import Home from './components/HomeComponent/HomeComponent';
import { Route, Switch } from 'react-router-dom';
import Categories from './components/CategoriesComponent/Categories';
import ProductList from './components/ProductList/ProductList';
import Navigation from './components/HomeComponent/Navigation/Navigation';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import DetailProduct from './components/DetailProduct/DetailProduct';
import NotFound from './components/NotFound/NotFound';

function App() {
	const { currentTheme } = useThemeContext();

	return (
		<ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/cart" component={Cart} />
				<Route exact path="/wishlist" component={Wishlist} />
				<Route exact path="/categories" component={Categories} />
				<Route exact path="/categories/:id" component={ProductList} />
				<Route path="/categories/:id/:productID" component={DetailProduct} />
				<Route component={NotFound} />
			</Switch>
		</ThemeProvider>
	);
}

export default App;
