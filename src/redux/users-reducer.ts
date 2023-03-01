import {addPost, setUserProfile, updateNewPostText} from "./profile-reducer";
import {addMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";
import {setAuthUserData} from "./auth-reducer";

export type ActionType = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setAuthUserData>

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((user) => user.id === action.userId ? {...user, followed: true} : user)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((user) => user.id === action.userId ? {...user, followed: false} : user)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users}) as const
export const setCurrentPage = (pageNumber: number) => ({type: 'SET-CURRENT-PAGE', pageNumber}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount
}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching}) as const