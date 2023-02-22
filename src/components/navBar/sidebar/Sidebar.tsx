import React from "react";
import style from './Sidebar.module.css'
import {FriendType} from "../../../redux/store";

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
