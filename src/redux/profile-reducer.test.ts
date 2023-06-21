import {addPost, deletePost, ProfilePageType, profileReducer} from "./profile-reducer";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, postMessage: 'post 1', likesCount: 10},
        {id: 2, postMessage: 'post 2', likesCount: 15},
        {id: 3, postMessage: 'post 3', likesCount: 20},
    ],
    profileInfo: null,
    status: ''
}
it('new post should be added', () => {
    let action = addPost('SOME NEW POST')
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(4)
})
it('message of new post should be added', () => {
    let action = addPost('SOME NEW POST')
    let newState = profileReducer(initialState, action)
    expect(newState.posts[3].postMessage).toBe('SOME NEW POST')
})

it('after deleting lengtn of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(2)
})

it(' if id is not correct, after deleting length of messages shouldn`t be decrement', () => {
    let action = deletePost(1000)
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(3)
})