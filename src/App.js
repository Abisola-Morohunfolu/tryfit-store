import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './theme/themeContext';
import { darkTheme, lightTheme } from './theme/theme';
import { GlobalStyle } from './styles/globalStyles';
import Home from './components/HomeComponent/HomeComponent';

function App() {
	const { currentTheme, toggleTheme } = useThemeContext();

	return (
		<ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<Home />
			<button onClick={toggleTheme}>Change Theme</button>
		</ThemeProvider>
	);
}

export default App;
