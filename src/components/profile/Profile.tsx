import React from "react";
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserType} from "../../redux/users-reducer";
import {ProfileInfoType} from "../../redux/profile-reducer";
import {Navigate} from "react-router-dom";

type ProfilePropsType = {
    profileInfo: ProfileInfoType | null
    status: string
    updateStatus: () => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <ProfileInfo profileInfo={props.profileInfo} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}