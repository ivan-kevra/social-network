import {ActionType} from "./users-reducer";
import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";

type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    initialized: boolean
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state, initialized: true
            }
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
                id: action.payload.userId,
                isAuth: action.payload.isAuth,
                email: action.payload.email,
                login: action.payload.login
            }
        case 'SET-IS-LOGGED-IN':
            return {
                ...state,
                isAuth: action.value
            }
        default:
            return state
    }
}
export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    payload: {userId, login, email, isAuth}
}) as const
export const setIsLoggedInAC = (value: boolean) => ({type: 'SET-IS-LOGGED-IN', value} as const)


export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())
}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const res = await authAPI.me()
    if (res.resultCode === 0) {
        let {id, login, email} = res.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const loginTC = (data: LoginParamsType, setFieldValue: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void) => async (dispatch: any) => {
    const res = await authAPI.login(data)
    try {
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            setFieldValue("general", res.data.messages.join(" "))
        }
    } catch (error) {
        alert(error + 'Error')
    }
}

export const logoutTC = () => async (dispatch: any) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}