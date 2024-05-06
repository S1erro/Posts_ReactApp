import React from "react";
import "./styles/App.css"
import AllPosts from "./Componets/AllPosts";
import MyButton from "./Componets/UI/button/MyButton";
import MyInput from "./Componets/UI/input/MyInput";

function App() {
    const [posts, setPosts] = React.useState([
        {id: 1, title: 'Javascript', description: 'This language is not as easy as I thought it would be.....'},
        {id: 2, title: 'Python', description: 'Best times in my life'},
        {id: 3, title: 'C++', description: 'You lost 2gb or RAM because of carelessness'}
    ]);

    const [title, setTitle] = React.useState('');

    const [description, setDescription] = React.useState('');

    const addPost = () => {
        const newPost = {
            id: Date.now(),
            title,
            description
        }
        setPosts([...posts, newPost])

        setTitle('')
        setDescription('')
    }

    return (
        <div className="App">
            <MyInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Введите заголовок новой записи"
            />
            <MyInput
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Введите текст новой записи"
            />
            <MyButton onClick={addPost}>Записать</MyButton>
            <AllPosts posts={posts} title={"Записи:"}/>
        </div>
    );
}

export default App;
