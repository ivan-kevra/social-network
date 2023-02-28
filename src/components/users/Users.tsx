import React from 'react';
import style from "./Users.module.css";
import avatar from "../../assets/images/avatar.jpg";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
    usersPage: any
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
                        <img src={user.photos.small !== null ? user.photos.small : avatar}/>
                        </div>
                        <div>
                    {user.followed
                        ? <button onClick={() => props.follow(user.id)}>follow</button>
                        : <button onClick={() => props.unfollow(user.id)}>unfollow</button>
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

