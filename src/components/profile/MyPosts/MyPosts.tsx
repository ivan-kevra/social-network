import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {AppPropsType} from "../../../App";
import {PostType} from "../../../index";

type PostsPropsType = {
    posts: PostType[]
}

export const MyPosts: React.FC<PostsPropsType> = (props) => {
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
                {props.posts.map((post) => {
                    return (
                        <Post message={post.post} likesCount={post.likesCount}/>
                    )
                })}

            </div>
        </div>
    );
};

