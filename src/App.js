import React from "react";
import "./styles/App.css"
import AllPosts from "./Componets/AllPosts";
import MyButton from "./Componets/UI/button/MyButton";
import MyInput from "./Componets/UI/input/MyInput";

function App() {
    // Хранит все посты на странице
    const [posts, setPosts] = React.useState([
        {id: 1, title: 'Javascript', description: 'This language is not as easy as I thought it would be.....'},
        {id: 2, title: 'Python', description: 'Best times in my life'},
        {id: 3, title: 'C++', description: 'You lost 2gb or RAM because of carelessness'}
    ]);

    // Состояние двух input (какие данные введены в строки)
    const [post, setPost] = React.useState({title: '', description: ''});

    // Добавление нового поста
    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            ...post
        }
        setPosts([...posts, newPost])
        //setPosts([...posts, {...post, id: Date.now()}])
        setPost({...post, title: '', description: ''})
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Введите заголовок новой записи"
                />
                <MyInput
                    value={post.description}
                    onChange={(e) => setPost({...post, description: e.target.value})}
                    type="text"
                    placeholder="Введите текст новой записи"
                />
                <MyButton onClick={addPost}>Записать</MyButton>
                <AllPosts posts={posts} title={"Записи:"}/>
            </form>
        </div>
    );
}

export default App;
