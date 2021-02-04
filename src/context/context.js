import * as React from 'react';
import { intialState, reducer } from './reducer/reducer';

const GlobalStateContext = React.createContext();
const GlobalDispatchContext = React.createContext();

const GlobalContextProvider = ({ children }) => {
	// const [products, setProducts] = React.useState(null);

	const [state, dispatch] = React.useReducer(reducer, intialState);

	return (
		<GlobalDispatchContext.Provider value={dispatch}>
			<GlobalStateContext.Provider value={state}>{children}</GlobalStateContext.Provider>
		</GlobalDispatchContext.Provider>
	);
};

export const useGlobalStateContext = () => React.useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => React.useContext(GlobalDispatchContext);

export default GlobalContextProvider;
