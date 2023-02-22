import {ActionType, avatar, SidebarType} from "./store";

let initialState = {
    friends: [
        {id: 1, name: 'Andrew', avatar},
        {id: 2, name: 'Sasha', avatar},
        {id: 3, name: 'Igor', avatar},
    ]
}

export const sidebarReducer = (state: SidebarType = initialState , action: ActionType) => {
    return state
}