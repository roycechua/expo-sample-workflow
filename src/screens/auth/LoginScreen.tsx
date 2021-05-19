import React from 'react';
import {
	ActivityIndicator,
	Button,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import Screen from '../../common/components/Screen';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { login, resetAuth } from './loginSlice';

const LoginScreen = (props: any) => {
	const { isLoggedIn, attemptingLogin } = useAppSelector(
		(state) => state.auth
	);
	const dispatch = useAppDispatch();

	return (
		<Screen center>
			<Text>Login Screen</Text>
			{attemptingLogin ? (
				<ActivityIndicator color='blue' size='large' />
			) : null}
			{isLoggedIn ? (
				<Button onPress={() => dispatch(resetAuth())} title='Logout' />
			) : (
				<>
					{!attemptingLogin ? (
						<Button
							onPress={() => dispatch(login(''))}
							title='Login'
						/>
					) : null}
				</>
			)}
		</Screen>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({});
