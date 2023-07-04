import {ActionType, PhotosType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {AppRootStateType} from "./store";

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
    aboutMe: string
}

export type ProfilePageType = {
    posts: PostType[]
    profileInfo: ProfileInfoType | null
    status: string
}
let initialState: ProfilePageType = {
    posts: [
        {id: 1, postMessage: 'post 1', likesCount: 10},
        {id: 2, postMessage: 'post 2', likesCount: 15},
        {id: 3, postMessage: 'post 3', likesCount: 20},
    ],
    profileInfo: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): any => {

    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 5, postMessage: action.newPost, likesCount: 50}],
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
        case 'DELETE-POST':
            return {...state, posts: state.posts.filter((post) => post.id !== action.postId)}
        case 'SAVE-PHOTO-SUCCESS':
            return {...state, profileInfo: {...state.profileInfo, photos: action.photos}}

        default:
            return state
    }
}

export const addPost = (newPost: string) => ({type: 'ADD-POST', newPost}) as const
export const setUserProfile = (profileInfo: ProfileInfoType) => ({type: 'SET-USER-PROFILE', profileInfo}) as const
export const setStatus = (status: string) => ({type: 'SET-STATUS', status}) as const
export const deletePost = (postId: number) => ({type: 'DELETE-POST', postId}) as const
export const savePhotoSuccess = (photos: PhotosType) => ({type: 'SAVE-PHOTO-SUCCESS', photos}) as const


export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(res))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(res.data))
    }
}
export const savePhoto = (file: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}
export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
    const userId = getState().app.id
    const res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        alert(res.messages)
        // return Promise.reject(res.data.messages[0])
    }
}