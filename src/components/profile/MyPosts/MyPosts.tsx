import React, {ChangeEvent} from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {AppRootStateType, useAppDispatch} from '../../../redux/redux-store';


type PostsPropsType = {
    posts: PostType[]
    addPost: (post: string) => void
}

export const MyPosts: React.FC<PostsPropsType> = (props) => {

    let postsElements = props.posts.map((post) => {
        return <Post key={post.id} message={post.postMessage} likesCount={post.likesCount}/>
    })
    const addPostHandler = (value: { post: string }) => props.addPost(value.post)

    return (
        <div>
            My posts
            <AddPostForm addPostHandler={addPostHandler}/>
            <div> New Post</div>
            <div className={style.posts}>{postsElements}</div>
        </div>
    );
};


type AddPostFormPropsType = {
    addPostHandler: (value: { post: string }) => void
}
const AddPostForm = (props: AddPostFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        validate: (values) => {
            const errors = {}
        },
        onSubmit: values => {
            console.log(values)
            props.addPostHandler(values)
        },
    })
    return <form onSubmit={formik.handleSubmit}>
        <TextField label="post"
                   margin="normal"
                   {...formik.getFieldProps('post')}
                   onBlur={formik.handleBlur}/>
        <Button type={'submit'} variant={'contained'} color={'primary'}>
            Send
        </Button>
        {/*{*/}
        {/*    formik.errors.post ? <div style={{color: 'red'}}>{formik.errors.post}</div> : null*/}
        {/*}*/}
    </form>
}
