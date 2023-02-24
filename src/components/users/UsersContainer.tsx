import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {ActionType, UserType} from "../../redux/store";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

