import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
	return (
		<Provider store={store}>
			<MainNavigator />
		</Provider>
	);
}
