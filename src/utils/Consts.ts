import { Platform } from 'react-native';

export default {
	IS_ANDROID: Platform.OS === 'android',
    BASE_URL: __DEV__ ? '' : '',
};
