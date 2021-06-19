import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Screen from '../../common/components/Screen';
import { RootStackParamsList } from '../../navigation/MainNavigator';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { login, resetAuth } from './authSlice';

// Props
type SignInScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'SignIn'>;

type Props = {
	navigation: SignInScreenNavigationProp;
};

const SignInScreen : React.FC<Props> = (props: Props) => {
	const { navigation } = props;

	const { isLoggedIn, attemptingLogin } = useAppSelector(
		(state) => state.auth
	);
	const dispatch = useAppDispatch();

	return (
		<Screen center>
			<Text>Login Screen</Text>
			<Button 
				onPress={() => dispatch(login(''))}
				icon="login"
				loading={attemptingLogin}
				disabled={attemptingLogin}
			>
				Login
			</Button>
		</Screen>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({});
