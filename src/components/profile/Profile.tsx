import React from "react";
import style from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ActionType, DialogsPageType, ProfilePageType} from "../../redux/store";
import {EmptyObject, Store} from "redux";


type ProfilePropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionType>
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}