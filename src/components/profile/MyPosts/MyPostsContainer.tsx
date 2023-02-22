import React from 'react';
import {ActionType, DialogsPageType, PostType, ProfilePageType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {EmptyObject, Store} from "redux";

type PostsPropsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionType>
}

export const MyPostsContainer: React.FC<PostsPropsType> = (props) => {

    let state = props.store.getState()

    const addPostHandler = () => {
        props.store.dispatch(addPostAC())
    }
    const onChangeHandler = (newPostText: string) => {
        props.store.dispatch(updateNewPostTextAC(newPostText))
    }

    return (
        <MyPosts updateNewPostText={onChangeHandler}
                 addPost={addPostHandler}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    );
};

