import {ActionType, SidebarType} from "./store";

let initialState = {
    friends: [
        {id: 1, name: 'Andrew', avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'},
        {id: 2, name: 'Sasha', avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'},
        {id: 3, name: 'Igor', avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'},
    ]
}

export const sidebarReducer = (state: SidebarType = initialState , action: ActionType) => {
    return state
}