import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, LoginRegisterDataT} from "../../api/auth-api";

// Thunk
export const login = createAsyncThunk('auth/login', async (body: LoginRegisterDataT, thunkAPI) => {

    const res = await authAPI.login(body)
    try {
        if (res.status === 200) {
            return (res.data)
        } else {
            return thunkAPI.rejectWithValue({})
        }

    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue({})
    }
})

export const register = createAsyncThunk('auth/register', async (body: LoginRegisterDataT, thunkAPI) => {

    const res = await authAPI.login(body)

    try {
        if (res.status === 200) {
            return
        } else {
            return thunkAPI.rejectWithValue({})
        }

    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue({})
    }
})

const initialState = {
    isLoggedIn: false,
    isRegistered: false,
    userId: '',
    token: ''
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout(state) {
            state.isLoggedIn = false
            state.userId = ''
            state.token = ''
        },
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action: PayloadAction<{ userId: string, token: string }>) => {
            state.isLoggedIn = true
            state.userId = action.payload.userId
            state.token = action.payload.token
        })
        builder.addCase(register.fulfilled, (state) => {
            state.isRegistered = true
        })
    }
})

export const authReducer = slice.reducer

export const {logout} = slice.actions