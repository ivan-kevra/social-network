import {ActionType} from "./users-reducer";
import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";

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
        case 'SET-IS-LOGGED-IN':
            return {
                ...state,
                isAuth: action.value
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, login: string, email: string) => ({
    type: 'SET-USER-DATA',
    data: {userId, login, email}
}) as const
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'SET-IS-LOGGED-IN', value} as const)

export const getUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
    }
}
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionType>) => {
    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
                console.log('is logged')
            } else {
                alert('Error')
            }
        })
        .catch((error) => {
            alert('Error')
        })
}