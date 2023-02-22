import {ActionType, ProfilePageType} from "./store";


let initialState = {
    posts: [
        {id: 1, postMessage: 'post 1', likesCount: 10},
        {id: 2, postMessage: 'post 2', likesCount: 15},
        {id: 3, postMessage: 'post 3', likesCount: 20},
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
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

export const addPostAC = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextAC = (newPostText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText}) as const