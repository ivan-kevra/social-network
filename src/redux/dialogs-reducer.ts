import {ActionType} from "./users-reducer";


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

export type InitialStateType = typeof initialState

let initialState = {
    messages: [
        {
            id: 1,
            message: 'Hi, I am 1st user',
            userId: 1,
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
        },
        {
            id: 2,
            message: 'Hi, I am 2nd user',
            userId: 2,
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
        },
        {
            id: 3,
            message: 'Bye from 1st user',
            userId: 1,
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
        },
        {
            id: 4,
            message: 'Bye from 2nd user',
            userId: 2,
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
        },
    ] as Array<MessageType>,
    newMessageText: '',
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
        },
        {
            id: 2,
            name: 'Andrey',
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
        },
        {
            id: 3,
            name: 'Sveta',
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
        },
        {
            id: 4,
            name: 'Sasha',
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
        },
        {
            id: 5,
            name: 'Victor',
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
        },
        {
            id: 6,
            name: 'Valera',
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
        },
    ] as Array<DialogType>,
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {
                    id: 5,
                    message: state.newMessageText,
                    userId: 1,
                    avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'
                }],
                newMessageText: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            return state
    }
}

export const addMessageAC = () => ({type: 'ADD-MESSAGE'}) as const
export const updateNewMessageTextAC = (newMessageText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText
}) as const