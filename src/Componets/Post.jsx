import React from 'react';
import MyButton from "./UI/button/MyButton";

const Post = (props) => {

    return (
        <div className="post">
            <div className="post__cont">
                <h2>{props.id}. {props.post.title}</h2>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <MyButton onClick={() => props.deletePost(props.post.id)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default Post;