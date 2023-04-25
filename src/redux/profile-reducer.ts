import {ActionType, PhotosType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id: number
    postMessage: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileInfoType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profileInfo: ProfileInfoType | null
    status: string
}
let initialState: ProfilePageType = {
    posts: [
        {id: 1, postMessage: 'post 1', likesCount: 10},
        {id: 2, postMessage: 'post 2', likesCount: 15},
        {id: 3, postMessage: 'post 3', likesCount: 20},
    ],
    newPostText: '',
    profileInfo: null,
    status: 'Set new status'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 5, postMessage: state.newPostText, likesCount: 50}],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newPostText
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPost = () => ({type: 'ADD-POST'}) as const
export const updateNewPostText = (newPostText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText}) as const
export const setUserProfile = (profileInfo: ProfileInfoType) => ({type: 'SET-USER-PROFILE', profileInfo}) as const
export const setStatus = (status: string) => ({type: 'SET-STATUS', status}) as const

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(res.data))
            }
        })
    }
}