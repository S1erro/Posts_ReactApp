import React from "react";
import "./styles/App.css"
import AllPosts from "./Componets/AllPosts";
import PostForm from "./Componets/PostForm";
import MySelect from "./Componets/UI/select/MySelect";
import MyInput from "./Componets/UI/input/MyInput";

function App() {
    // Хранит все посты на странице
    const [posts, setPosts] = React.useState([
        {id: 1, title: 'Javascript', description: 'This language is not as easy as I thought it would be.....'},
        {id: 2, title: 'Python', description: 'Best times in my life'},
        {id: 3, title: 'C++', description: 'You lost 2gb or RAM because of carelessness'}
    ]);

    const [selectedSort, setSelectedSort] = React.useState('')

    const [searchQuery, setSearchQuery] = React.useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем id поста для удаления из дочернего компонента
    const deletePost = (id) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm createPost={createPost}/>
            <hr style={{margin: "10px 0"}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={(e) => {setSearchQuery(e.target.value)}}
                    className={MyInput}
                    placeholder="Поиск"
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    sortOptions={[
                        {value: 'title', name: 'По названию'},
                        {value: 'description', name: 'По описанию'}
                    ]}
                    defaultValue="Сортировка"
                />
            </div>
            {posts.length > 0
                ? <AllPosts posts={posts} title={"Записи:"} deletePost={deletePost}/>
                : <h1 style={{textAlign: "center"}}>Нет ни одной записи...</h1>
            }
        </div>
    );
}

export default App;
