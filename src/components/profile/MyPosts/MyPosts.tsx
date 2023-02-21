import React, {ChangeEvent, useState} from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type PostsPropsType = {
    posts: PostType[]
    dispatch: any
    newPostText: string
}

export const MyPosts: React.FC<PostsPropsType> = (props) => {

    let postsElements = props.posts.map((post) => {
        return (
            <Post key={post.id} message={post.postMessage} likesCount={post.likesCount}/>
        )
    })

    const addPostHandler = () => {
        props.dispatch({type: 'ADD-POST'})
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let action = {type: 'UPDATE-NEW-POST-TEXT', newPostText: event.currentTarget.value};
        props.dispatch(action)
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onChangeHandler} value={props.newPostText}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div>
                New Post
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

