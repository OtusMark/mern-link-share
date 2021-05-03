import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {linkApi} from "../../api/link-api";

export const generateLink = createAsyncThunk('link/link', async (payload: {link: string, history: any}, thunkAPI) => {


    const res = await linkApi.generateLink(payload.link)
    try {
        if (res.status === 200) {
            payload.history.push(`/detail/${res.data.link._id}`)
            return (res.data)
        } else {
            return thunkAPI.rejectWithValue({})
        }

    } catch (err) {
        console.log(err)
        return thunkAPI.rejectWithValue({})
    }
})

const initialState = {
    link: {} as any,
}
const slice = createSlice({
    name: 'link',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(generateLink.fulfilled, (state, action: PayloadAction) => {
            state.link = action.payload
        })
    }
})

export const linkReducer = slice.reducer