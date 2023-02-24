import {ActionType, UsersPageType, UserType} from "./store";


let initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state = initialState, action: ActionType) => {
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
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users}) as const