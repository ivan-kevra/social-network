import React from 'react';
import style from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={style.post}>
            <img alt='photo'
                src='https://www.shutterstock.com/shutterstock/photos/1606423033/display_1500/stock-vector-portrait-of-a-happy-man-avatar-of-a-guy-for-social-network-colorful-portrait-student-of-the-1606423033.jpg'/>
            <div>
                {props.message}
            </div>
            <div>
                {props.likesCount}
            </div>
        </div>

    );
};

