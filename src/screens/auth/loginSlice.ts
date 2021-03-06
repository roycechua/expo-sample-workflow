import { createSlice, Dispatch } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'

const initialState = {
    isLoggedIn: false,
    attemptingLogin: false
}

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        attemptLogin: (state) => {
            state.attemptingLogin = true;
        },
        setLoginSuccessful: (state) => {
            state.isLoggedIn = true;
            state.attemptingLogin = false;
        },
        setLoginFailed: (state) => {
            state.isLoggedIn = false;
            state.attemptingLogin = false;
        },
        resetAuth: (state) => initialState
    }
});

export const {
    attemptLogin,
    setLoginSuccessful,
    setLoginFailed,
    resetAuth,
} = loginSlice.actions

// selectors
export const authStatus = (state: RootState) => state.auth.isLoggedIn

// thunks
export const login = (payload : any) => async (dispatch : Dispatch) => {
    try {
        dispatch(attemptLogin())
        const res = await new Promise<{ token: string, status: number }>((resolve, reject) => {
            setTimeout(() => {
                resolve({ token: 'sample', status: 200 })
            }, 2000);
        })
        if(res.status == 200) {
            alert('Login successful')
            dispatch(setLoginSuccessful())
        } else {
            alert('Login failed')
            dispatch(setLoginFailed())
        }
    } catch (error) {
        alert(error.message)
        dispatch(resetAuth())
    }
}

export default loginSlice.reducer
