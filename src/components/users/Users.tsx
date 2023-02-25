import axios from 'axios';
import React from 'react';
import {UserType} from "../../redux/store";
import style from './Users.module.css'
import avatar from '../../assets/images/avatar.jpg'

type UsersPropsType = {
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
}


export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div>
            {props.users.map((user) => {
                    return (
                        <div key={user.id} className={style.users}>
                             <span className={style.span}>
                                 <div>
                                     <img src={user.photos !== null ? user.photos : avatar}/>
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
                }
            )
            }
        </div>
    );
};

