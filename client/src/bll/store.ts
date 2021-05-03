import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {authReducer} from "./reducers/auth-reducer";
import {loadState, saveState} from "../utils/localStorage";
import {linkReducer} from "./reducers/link-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    link: linkReducer
})

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState(),
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

store.subscribe(() => {
    saveState({
        auth: store.getState().auth,
        link: store.getState().link
    })
})

// Types
export type AppRootStateT = ReturnType<typeof rootReducer>
export type AppDispatchT = typeof store.dispatch