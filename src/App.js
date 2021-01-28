import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './theme/themeContext';
import { darkTheme, lightTheme } from './theme/theme';
import { GlobalStyle } from './styles/globalStyles';

function App() {
	const { currentTheme, toggleTheme } = useThemeContext();

	console.log(currentTheme);

	return (
		<ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<div className="App">
				<h1>This is my app</h1>
				<button onClick={toggleTheme}>Change Theme</button>
			</div>
		</ThemeProvider>
	);
}

export default App;
