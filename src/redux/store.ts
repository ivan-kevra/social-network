import {addPost, profileReducer, setUserProfile, updateNewPostText} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateNewMessageTextAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "./users-reducer";
import avatar from '../assets/images/avatar.jpg'
import {StateType} from "./redux-store";


export type PostType = {
    id: number
    postMessage: string
    likesCount: number
}
export type FriendType = {
    id: number
    name: string
    avatar: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: string
}
export type SidebarType = {
    friends: FriendType[]
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    getState: () => StateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionType) => void
}

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


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postMessage: 'post 1', likesCount: 10},
                {id: 2, postMessage: 'post 2', likesCount: 15},
                {id: 3, postMessage: 'post 3', likesCount: 20},
            ],
            newPostText: '',
            profile: ''
        },
        dialogsPage: {
            messages: [
                {
                    id: 1,
                    message: 'Hi, I am 1st user',
                    userId: 1,
                    avatar: avatar
                },
                {
                    id: 2,
                    message: 'Hi, I am 2nd user',
                    userId: 2,
                    avatar: avatar
                },
                {
                    id: 3,
                    message: 'Bye from 1st user',
                    userId: 1,
                    avatar: avatar
                },
                {
                    id: 4,
                    message: 'Bye from 2nd user',
                    userId: 2,
                    avatar: avatar
                },
            ],
            newMessageText: '',
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych',
                    avatar: avatar
                },
                {
                    id: 2,
                    name: 'Andrey',
                    avatar: avatar
                },
                {
                    id: 3,
                    name: 'Sveta',
                    avatar: avatar
                },
                {
                    id: 4,
                    name: 'Sasha',
                    avatar: avatar
                },
                {
                    id: 5,
                    name: 'Victor',
                    avatar: avatar
                },
                {
                    id: 6,
                    name: 'Valera',
                    avatar: avatar
                },
            ],
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Andrew',
                    avatar: avatar
                },
                {
                    id: 2,
                    name: 'Sasha',
                    avatar: avatar
                },
                {
                    id: 3,
                    name: 'Igor',
                    avatar: avatar
                },
            ]
        },
        usersPage: {
            users: [
                {
                    id: 1,
                    followed: true,
                    name: 'User 1',
                    photos: {
                        small: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg',
                        large: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
                    },
                    status: 'Hello',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    followed: false,
                    name: 'User 2',
                    photos: {
                        small: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg',
                        large: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
                    }, status: 'Hello 2',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    followed: false,
                    name: 'User 3',
                    photos: {
                        small: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg',
                        large: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
                    }, status: 'Hello 3',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ],
            currentPage: 0,
            totalUsersCount: 0,
            pageSize: 0,
            isFetching: false
        },

    },
    _callSubscriber(_state: StateType) {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}



