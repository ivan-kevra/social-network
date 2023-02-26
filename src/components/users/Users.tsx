import React from 'react';
import style from "./Users.module.css";
import avatar from "../../assets/images/avatar.jpg";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";

export class Users extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.usersPage.users.map((user: UserType) => {
                        return (
                            <div key={user.id} className={style.users}>
                             <span className={style.span}>
                                 <div>
                                     <img src={user.photos.small !== null ? user.photos.small : avatar}/>
                                 </div>
                                 <div>
                                     {user.followed
                                         ? <button onClick={() => this.props.follow(user.id)}>follow</button>
                                         : <button onClick={() => this.props.unfollow(user.id)}>unfollow</button>
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
    }
}

