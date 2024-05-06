import React from 'react';
import Post from "./Post";

const AllPosts = ({posts, title = "Post list"}) => {
    return (
        <div>
            <h1 className="App__header">{title}</h1>
            {posts.map((post, number) =>
                <Post id={number + 1} post={post} key={post.id} />
            )}
        </div>
    );
};

export default AllPosts;