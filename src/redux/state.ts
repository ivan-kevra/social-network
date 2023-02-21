export type PostType = {
    id: number
    postMessage: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    message: string
    userId: number
    avatar: string
}
export type FriendType = {
    id: number
    name: string
    avatar: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageText: string
}
export type NavbarType = {
    friends: FriendType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbar: NavbarType
}
const avatar = 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postMessage: 'post 1', likesCount: 10},
                {id: 2, postMessage: 'post 2', likesCount: 15},
                {id: 3, postMessage: 'post 3', likesCount: 20},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi, I am 1st user', userId: 1, avatar},
                {id: 2, message: 'Hi, I am 2nd user', userId: 2, avatar},
                {id: 3, message: 'Bye from 1st user', userId: 1, avatar},
                {id: 4, message: 'Bye from 2nd user', userId: 2, avatar},
            ],
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Dimych', avatar},
                {id: 2, name: 'Andrey', avatar},
                {id: 3, name: 'Sveta', avatar},
                {id: 4, name: 'Sasha', avatar},
                {id: 5, name: 'Victor', avatar},
                {id: 6, name: 'Valera', avatar},
            ],
        },
        navbar: {
            friends: [
                {id: 1, name: 'Andrew', avatar},
                {id: 2, name: 'Sasha', avatar},
                {id: 3, name: 'Igor', avatar},
            ]
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber(_state: StateType) {
        console.log('state was changed')
    },
    addPost() {
        let newPost = {id: 5, postMessage: this._state.profilePage.newPostText, likesCount: 50}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber(this._state)
    },
    addMessage() {
        let newMessage = {id: 5, message: this._state.dialogsPage.newMessageText, userId: 1, avatar: avatar}
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newMessageText: string) {
        this._state.dialogsPage.newMessageText = newMessageText
        this._callSubscriber(this._state)
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
}


