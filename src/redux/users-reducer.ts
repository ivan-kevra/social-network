import {ActionType} from "./store";

export type PhotosType = {
    small: string
    large: string
}
export type locationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    followed: boolean
    name: string
    photos: PhotosType
    status: string
    location: locationType
}
export type InitialStateType = {
    users: Array<UserType>
}

const initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((user) => user.id === action.userId ? {...user, followed: false} : user)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((user) => user.id === action.userId ? {...user, followed: true} : user)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users}) as const