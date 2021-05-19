import AxiosModule from '../../services/AxiosModule';

export default {
	login: (payload: { email: string; password: string }) =>
		AxiosModule.post({
			endpoint: 'login',
			data: payload,
		}),
};
