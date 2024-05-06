import React from "react";
import "./styles/App.css"
import AllPosts from "./Componets/AllPosts";

function App() {
    const [posts, setPosts] = React.useState([
        {id: 1, title: 'Javascript', description: 'This language is not as easy as I thought it would be.....'},
        {id: 2, title: 'Python', description: 'Best times in my life'},
        {id: 3, title: 'C++', description: 'You lost 2gb or RAM because of carelessness'}
    ]);

    const [posts2, setPosts2] = React.useState([
        {id: 1, title: 'Nothing', description: 'Nothing'},
        {id: 2, title: 'Nothing', description: 'Nothing'},
        {id: 3, title: 'Nothing', description: 'Nothing'}
    ]);

    console.log(posts);
    console.log(typeof posts);
    return (
        <div className="App">
            <AllPosts posts={posts} title={"Posts about programming languages"} />
            <AllPosts posts={posts2} title={"Posts about nothing"} />
        </div>
    );
}

export default App;
