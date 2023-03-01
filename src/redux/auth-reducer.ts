import {ActionType} from "./users-reducer";
import {Dispatch} from "redux";
import {headerAPI} from "../api/api";

type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, login: string, email: string) => ({
    type: 'SET-USER-DATA',
    data: {userId, login, email}
}) as const

export const setUserData = () => {
    return (dispatch: Dispatch) => {
        headerAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
    }
}