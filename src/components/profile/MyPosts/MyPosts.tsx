import React, {ChangeEvent} from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";


type PostsPropsType = {
    posts: PostType[]
    newPostText: string
    updateNewPostText: (newPostText: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<PostsPropsType> = (props) => {

    let postsElements = props.posts.map((post) => {
        return <Post key={post.id} message={post.postMessage} likesCount={post.likesCount}/>
    })

    const addPostHandler = () => props.addPost()
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => props.updateNewPostText(event.currentTarget.value)

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onChangeHandler} value={props.newPostText}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div> New Post</div>
            <div className={style.posts}>{postsElements}</div>
        </div>
    );
};

