import {ActionType, ProfilePageType} from "./store";


let initialState = {
    posts: [
        {id: 1, postMessage: 'post 1', likesCount: 10},
        {id: 2, postMessage: 'post 2', likesCount: 15},
        {id: 3, postMessage: 'post 3', likesCount: 20},
    ],
    newPostText: '',
    profile: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {

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
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPost = () => ({type: 'ADD-POST'}) as const
export const updateNewPostText = (newPostText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText}) as const
export const setUserProfile = (profile: string) => ({type: 'SET-USER-PROFILE', profile}) as const