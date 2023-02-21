import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profileState: ProfilePageType
    dispatch: any
    newPostText: string
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profileState.posts} dispatch={props.dispatch} newPostText={props.newPostText}
                     />
        </div>
    )
}