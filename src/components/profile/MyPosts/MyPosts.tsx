import React, {ChangeEvent} from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ActionType, PostType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type PostsPropsType = {
    posts: PostType[]
    dispatch: (action: ActionType) => void
    newPostText: string
}

export const MyPosts: React.FC<PostsPropsType> = (props) => {

    let postsElements = props.posts.map((post) => {
        return (
            <Post key={post.id} message={post.postMessage} likesCount={post.likesCount}/>
        )
    })

    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(event.currentTarget.value))
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

