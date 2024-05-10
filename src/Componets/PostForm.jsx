import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({createPost}) => {
    // Состояние двух input (какие данные введены в строки)
    const [post, setPost] = React.useState({title: '', description: ''});

    // Добавление нового поста
    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            ...post
        }
        createPost(newPost);
        setPost({...post, title: '', description: ''})
    }

    return (
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
        </form>
    );
};

export default PostForm;