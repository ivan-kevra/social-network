import React from 'react';
import style from "./Users.module.css";
import avatar from "../../assets/images/avatar.jpg";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((page) => {
                    return <button key={page}
                                   className={props.currentPage === page ? style.selectedPage : ''}
                                   onClick={(event) => {
                                       props.setCurrentPage(page)
                                   }}>
                        {page}
                    </button>
                })}
            </div>
            {props.usersPage.users.map((user: UserType) => {
                return (
                    <div key={user.id} className={style.users}>
                        <span className={style.span}>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : avatar}/>
                            </NavLink>
                        </div>
                        <div>
                    {user.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '9a6c26a3-7c0a-407d-ba38-123ea04fe40d'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }

                                })
                        }}>unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '9a6c26a3-7c0a-407d-ba38-123ea04fe40d'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                })
                        }}>follow</button>
                    }
                        </div>
                        </span>
                        <span>
                        <span className={style.span}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        </span>
                        <span className={style.span}>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                        </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
}

