import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios';
import Consts from '../utils/Consts';
import { store } from '../redux/store';
import { useAppDispatch } from '../redux/hooks';
import { resetAuth } from '../screens/auth/authSlice';

interface AxiosWrapperInterface {
	method: Method;
	endpoint: string;
	data?: any;
	token?: string;
	headers?: any;
}

export const axiosWrapper = ({
	method,
	endpoint,
	data,
	token,
	headers,
}: AxiosWrapperInterface) => {
	let config: AxiosRequestConfig = {
		method,
		url: `${Consts.BASE_URL}/${endpoint}`,
		headers: {
			'accept-data': 'application/json',
			'content-type': 'application/json',
			...headers,
		},
	};

    // token can either be explicitly provided or retrieved from the user
    // if token was not provided and not available in the auth reducer, log the user out
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	} else {
		const state = store.getState();
		const dispatch = useAppDispatch();
		const stateToken = state.auth.token;
		if (stateToken) {
			config.headers.Authorization = `Bearer ${token}`;
		} else {
			dispatch(resetAuth());
		}
	}

	if (data) {
		// Check if payload is meant for form data, should not be Stringified
		if (data instanceof FormData) {
			config.data = data;
		} else {
			config.data = JSON.stringify(data);
		}
	}

	return axios(config);
};

interface APIMethodInterface {
	endpoint: string;
	data?: any;
	token?: string;
	headers?: any;
}

export default {
	get: ({ endpoint, token, headers }: APIMethodInterface) =>
		axiosWrapper({ method: 'GET', endpoint, token, headers }),

	post: ({ endpoint, data, token, headers }: APIMethodInterface) =>
		axiosWrapper({ method: 'POST', data, endpoint, token, headers }),

	put: ({ endpoint, data, token, headers }: APIMethodInterface) =>
		axiosWrapper({ method: 'PUT', data, endpoint, token, headers }),

	delete: ({ endpoint, token, headers }: APIMethodInterface) =>
		axiosWrapper({ method: 'GET', endpoint, token, headers }),
};
