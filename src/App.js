import React from "react";
import "./styles/App.css"
import AllPosts from "./Componets/AllPosts";
// import MyButton from "./Componets/UI/button/MyButton";
// import MyInput from "./Componets/UI/input/MyInput";
import PostForm from "./Componets/PostForm";

function App() {
    // Хранит все посты на странице
    const [posts, setPosts] = React.useState([
        {id: 1, title: 'Javascript', description: 'This language is not as easy as I thought it would be.....'},
        {id: 2, title: 'Python', description: 'Best times in my life'},
        {id: 3, title: 'C++', description: 'You lost 2gb or RAM because of carelessness'}
    ]);

    const createInput = (newPost) => {
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <PostForm createInput={createInput}/>
            <AllPosts posts={posts} title={"Записи:"}/>
        </div>
    );
}

export default App;
