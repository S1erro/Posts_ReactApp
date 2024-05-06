import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__cont">
                <h2>{props.post.id}. {props.post.title}</h2>
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className="post__buttons">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Post;