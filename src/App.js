import React, {useMemo, useState} from "react";
import "./styles/App.css"
import AllPosts from "./Componets/AllPosts";
import PostForm from "./Componets/PostForm";
import PostFilter from "./Componets/PostFilter";
import MyModal from "./Componets/UI/MyModal/MyModal";
import MyButton from "./Componets/UI/button/MyButton";

function App() {
    // Хранит все посты на странице
    const [posts, setPosts] = React.useState([
        {id: 1, title: 'Javascript', description: 'This language is not as easy as I thought it would be.....'},
        {id: 2, title: 'Python', description: 'Best times in my life'},
        {id: 3, title: 'C++', description: 'You lost 2gb or RAM because of carelessness'}
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        console.log('работает вроде')
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    // Получаем id поста для удаления из дочернего компонента
    const deletePost = (id) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost}/>
            </MyModal>
            <hr style={{margin: "10px 0"}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <AllPosts posts={sortedAndSearchedPosts} title={"Записи:"} deletePost={deletePost}/>
        </div>
    );
}

export default App;
