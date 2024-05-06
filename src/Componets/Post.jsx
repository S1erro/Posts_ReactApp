import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__cont">
                <h2>{props.id}. {props.post.title}</h2>
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className="post__buttons">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default Post;