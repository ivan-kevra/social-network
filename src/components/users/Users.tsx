import React from 'react';
import {InitialStateType, UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

export const Users: React.FC<UsersPropsType> = ({
                                                    currentPage,
                                                    setCurrentPage,
                                                    pageSize,
                                                    totalUsersCount,
                                                    usersPage,
                                                    followingInProgress,
                                                    follow,
                                                    unfollow,
                                                }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize} setCurrentPage={setCurrentPage}
                       totalUsersCount={totalUsersCount}/>
            {usersPage.users.map((user: UserType) => <User key={user.id}
                                                           user={user}
                                                           follow={follow}
                                                           followingInProgress={followingInProgress}
                                                           unfollow={unfollow}/>
            )}
        </div>
    );
}

