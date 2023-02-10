import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    const posts = [
        {id: 1, post: 'post 1', likesCount: 10},
        {id: 2, post: 'post 2', likesCount: 15},
        {id: 3, post: 'post 3', likesCount: 20},
    ]
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
                {posts.map((post) => {
                    return (
                        <Post message={post.post} likesCount={post.likesCount}/>
                    )
                })}

            </div>
        </div>
    );
};

