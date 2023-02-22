import React from "react";
import style from './Sidebar.module.css'
import {FriendType} from "../../../redux/store";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";

type SidebarPropsType = {
    friends: FriendType[]
}

export const Sidebar: React.FC<SidebarPropsType> = (props) => {
    return (
        <div className={style.navbar}>
            <h2>Friends</h2>
            <div className={style.friendsContainer}>
                {props.friends.map((friend) => {
                    return (
                        <div key={friend.id} className={style.friendItem}>
                            <img src={friend.avatar}/>
                            <span>{friend.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// let mapStateToProps = (state: any) => {
//     return {navbar: state.sidebar.friends}
// }
// let mapDispatchToProps = (dispatch: any) => {
//     return {
//     }
// }
//
// export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Dialogs)