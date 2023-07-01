import React from 'react';
import style from "./Users.module.css";
import avatar from "../../assets/images/avatar.jpg";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    user: UserType
}

export const User: React.FC<UsersPropsType> = ({
                                                   user,
                                                   followingInProgress,
                                                   follow,
                                                   unfollow,
                                               }) => {
    return <div className={style.users}>
                        <span>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : avatar} alt='user'/>
                            </NavLink>
                        </div>
                        <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                  onClick={() => unfollow(user.id)}>unfollow</button>
                        : <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                  onClick={() => follow(user.id)}>follow</button>
                    }
                        </div>
                        </span>
        <span>
                        <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        </span>
                        <span className={style.span}>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                        </span>
                        </span>
    </div>
}

