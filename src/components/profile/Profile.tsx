import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profileState: ProfilePageType
    addPost: (title: string)=> void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profileState.posts} addPost={props.addPost}/>
        </div>
    )
}