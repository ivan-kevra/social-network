import React from 'react';
import {UserType} from "../../redux/store";
import style from './Users.module.css'


type UsersPropsType = {
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
}


export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: 'User 1',
                avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg',
                status: 'Hello',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                followed: false,
                fullName: 'User 2',
                avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg',
                status: 'Hello 2',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                followed: false,
                fullName: 'User 3',
                avatar: 'https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg',
                status: 'Hello 3',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div>
            {props.users.map((user) => {
                    return (
                        <div key={user.id} className={style.users}>
                             <span className={style.span}>
                                 <div>
                                     <img src={user.avatar}/>
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
                                    <div>{user.fullName}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span className={style.span}>
                                    <div>{user.location.country}</div>
                                    <div>{user.location.city}</div>
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

