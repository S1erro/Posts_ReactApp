import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const AllPosts = ({posts, title = "Post list", deletePost}) => {

    if(!posts.length){
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }

    return (
        <div>
            <h1 className="App__header">{title}</h1>
            <TransitionGroup>
                {posts.map((post, number) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post id={number + 1} post={post} deletePost={deletePost}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default AllPosts;