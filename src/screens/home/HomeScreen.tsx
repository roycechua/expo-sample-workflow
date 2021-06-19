import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Screen from '../../common/components/Screen';
import { RootStackParamsList } from '../../navigation/MainNavigator';
import { useAppDispatch } from '../../redux/hooks';
import { resetAuth } from '../auth/authSlice';

// Props
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Home'>;

type Props = {
	navigation: HomeScreenNavigationProp;
};

const HomeScreen : React.FC<Props> = (props: Props) => {
    const { navigation } = props;
    
	const dispatch = useAppDispatch();

	return (
		<Screen center>
			<Text>Home Screen</Text>
			<Button icon="logout" onPress={() => dispatch(resetAuth())}>Logout</Button>
		</Screen>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
