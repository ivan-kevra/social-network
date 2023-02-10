import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                New Post
            </div>
            <div className={style.posts}>
                <Post message={'Hi, how are  you?'} likesCount={15}/>
                <Post message={'It`s my firs post'} likesCount={20}/>
            </div>
        </div>
    );
};

