import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './theme/themeContext';
import { BrowserRouter } from 'react-router-dom';
import GlobalContextProvider from './context/context';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalContextProvider>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</GlobalContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
