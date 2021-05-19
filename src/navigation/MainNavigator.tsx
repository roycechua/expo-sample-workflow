import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

function MainNavigator(props: any) {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Home' component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainNavigator;
