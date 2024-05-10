import React from 'react';
import Post from "./Post";

const AllPosts = ({posts, title = "Post list", deletePost}) => {
    return (
        <div>
            <h1 className="App__header">{title}</h1>
            {posts.map((post, number) =>
                <Post id={number + 1} post={post} key={post.id} deletePost={deletePost}/>
            )}
        </div>
    );
};

export default AllPosts;