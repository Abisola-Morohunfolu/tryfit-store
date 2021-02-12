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
				<Route path="/categories/:id" component={ProductList} />
			</Switch>
		</ThemeProvider>
	);
}

export default App;
