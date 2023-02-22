import React from 'react';
import {ActionType, DialogsPageType, PostType, ProfilePageType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {EmptyObject, Store} from "redux";
import {StoreContext} from '../../../StoreContext';

type PostsPropsType = {
    // store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; }, ActionType>
}

export const MyPostsContainer: React.FC<PostsPropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    const addPostHandler = () => {
                        store.dispatch(addPostAC())
                    }
                    const onChangeHandler = (newPostText: string) => {
                        store.dispatch(updateNewPostTextAC(newPostText))
                    }
                    return (
                        <MyPosts updateNewPostText={onChangeHandler}
                                 addPost={addPostHandler}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}/>
                    )

                }
            }

        </StoreContext.Consumer>

    );
};

