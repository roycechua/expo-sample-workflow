import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { store } from './src/redux/store';
import { defaultTheme } from './src/themes/Themes'

export default function App() {
	return (
		<StoreProvider store={store}>
			<PaperProvider theme={defaultTheme}>
				<MainNavigator />
			</PaperProvider>
		</StoreProvider>
	);
}
