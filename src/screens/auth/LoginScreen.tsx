import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Screen from '../../common/components/Screen';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { login, resetAuth } from './authSlice';

const LoginScreen = (props: any) => {
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
				loading={attemptingLogin}
				disabled={attemptingLogin}
			>
				Login
			</Button>
		</Screen>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({});
