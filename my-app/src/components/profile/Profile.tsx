import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={style.content}>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    )
}