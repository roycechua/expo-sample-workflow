import { createSlice, Dispatch } from '@reduxjs/toolkit';
import type { RootState } from '../../redux/store';
import authAPI from './authAPI';

const initialState = {
	isLoggedIn: false,
	attemptingLogin: false,
	token: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		attemptLogin: (state) => {
			state.attemptingLogin = true;
		},
		setLoginSuccessful: (state, action) => {
			state.isLoggedIn = true;
			(state.token = action.payload.token),
				(state.attemptingLogin = false);
		},
		setLoginFailed: (state) => {
			state.isLoggedIn = false;
			state.attemptingLogin = false;
		},
		resetAuth: (state) => initialState,
	},
});

export const { attemptLogin, setLoginSuccessful, setLoginFailed, resetAuth } =
	authSlice.actions;

// selectors
export const authStatus = (state: RootState) => state.auth.isLoggedIn;

// thunks
export const login = (payload: any) => async (dispatch: Dispatch) => {
	try {
		dispatch(attemptLogin());
		const res = await new Promise<{ token: string; status: number }>(
			(resolve, reject) => {
				setTimeout(() => {
					resolve({ token: 'sample', status: 200 });
				}, 2000);
			}
		);

		// Actual API Call
		// const res = await authAPI.login({
		//     email: '',
		//     password: '',
		// })

		if (res.status == 200) {
			alert('Login successful');
			dispatch(setLoginSuccessful({ token: res.token }));
		} else {
			alert('Login failed');
			dispatch(setLoginFailed());
		}
	} catch (error) {
		alert(error.message);
		dispatch(resetAuth());
	}
};

export default authSlice.reducer;
