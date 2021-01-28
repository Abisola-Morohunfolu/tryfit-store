import * as React from 'react';

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
	let getTheme =
		window.localStorage.getItem('currentTheme') === null
			? 'light'
			: window.localStorage.getItem('currentTheme');

	const [currentTheme, setTheme] = React.useState(getTheme);

	const toggleTheme = () => {
		console.log('fired');
		if (currentTheme === 'dark') {
			setTheme('light');
			window.localStorage.setItem('currentTheme', 'light');
		} else {
			setTheme('dark');
			window.localStorage.setItem('currentTheme', 'dark');
		}
	};

	return (
		<ThemeContext.Provider value={{ currentTheme, toggleTheme }}>{children}</ThemeContext.Provider>
	);
};

export const useThemeContext = () => React.useContext(ThemeContext);
