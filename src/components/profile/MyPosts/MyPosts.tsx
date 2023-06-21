import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {useFormik} from "formik";
import Button from "@mui/material/Button";
import {maxLengthPostValidator} from '../../../utils/validators/validators';
import {Textarea} from "../../common/FormsControls/FormControls";


type PostsPropsType = {
    posts: PostType[]
    addPost: (post: string) => void
}

export const MyPosts: React.FC<PostsPropsType> = React.memo((props) => {

    let postsElements = props.posts.map((post) => {
        return <Post key={post.id} message={post.postMessage} likesCount={post.likesCount}/>
    })
    const addPostHandler = (value: { post: string }) => {
        props.addPost(value.post)
    }

    return (
        <div>
            My posts
            <AddPostForm addPostHandler={addPostHandler}/>
            <div> New Post</div>
            <div className={style.posts}>{postsElements}</div>
        </div>
    );
})


type AddPostFormPropsType = {
    addPostHandler: (value: { post: string }) => void
}
const AddPostForm = (props: AddPostFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        validate: (values) => maxLengthPostValidator(10, values),
        onSubmit: values => {
            console.log(values)
            props.addPostHandler(values)
        },
    })
    return <form onSubmit={formik.handleSubmit}>
        <Textarea {...formik.getFieldProps('post')} onBlur={formik.handleBlur}
                  item={formik.errors.post}/>
        <Button type={'submit'} variant={'contained'} color={'primary'}>
            Send
        </Button>
    </form>
}

