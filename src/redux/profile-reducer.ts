import {ActionType, ProfilePageType} from "./state";

export const addPostAC = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextAC = (newPostText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText}) as const

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 5, postMessage: state.newPostText, likesCount: 50}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}