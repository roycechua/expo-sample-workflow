import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import { useAppSelector } from '../redux/hooks';

const Stack = createStackNavigator();

function MainNavigator(props: any) {
	
	const { isLoggedIn } = useAppSelector(
		(state) => state.auth
	);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{
					isLoggedIn 
					?
					<Stack.Screen name='Home' component={HomeScreen} />
					:
					<Stack.Screen name='Login' component={LoginScreen} />
				}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainNavigator;
