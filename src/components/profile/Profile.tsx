import React from "react";
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserType} from "../../redux/users-reducer";
import {ProfileInfoType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profileInfo: ProfileInfoType | null
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <MyPostsContainer/>
        </div>
    )
}