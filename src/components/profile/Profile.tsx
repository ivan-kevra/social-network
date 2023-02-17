import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type PostsPropsType = {
    posts: PostType[]
}

export const Profile: React.FC<PostsPropsType> = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}