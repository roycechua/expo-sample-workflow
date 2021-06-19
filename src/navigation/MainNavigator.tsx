import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import { useAppSelector } from '../redux/hooks';

export type RootStackParamsList = {
	SignIn: undefined;
	SignUp: undefined;
	Home: undefined;
};

type Props = {};

const Stack = createStackNavigator();

function MainNavigator(props: any) {
	const { isLoggedIn } = useAppSelector((state) => state.auth);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isLoggedIn ? (
					<>
						<Stack.Screen name='Home' component={HomeScreen} />
					</>
				) : (
					<>
						<Stack.Screen name='SignIn' component={SignInScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainNavigator;
