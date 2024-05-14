import React, {useEffect, useState} from "react";
import "./styles/App.css"
import AllPosts from "./Componets/AllPosts";
import PostForm from "./Componets/PostForm";
import PostFilter from "./Componets/PostFilter";
import MyModal from "./Componets/UI/MyModal/MyModal";
import MyButton from "./Componets/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./Componets/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";

function App() {
    // Хранит все посты на странице
    const [posts, setPosts] = React.useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    useEffect(() => {
        fetchPosts()
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    // Получаем id поста для удаления из дочернего компонента
    const deletePost = (id) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts()
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
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ?   <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                :   <AllPosts posts={sortedAndSearchedPosts} title={"Записи:"} deletePost={deletePost}/>
            }
            <div className="page__wrapper">
                {pagesArray.map(p =>
                    <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? 'page page__current' : 'page'}
                    >
                        {p}
                    </span>
                )}
            </div>
        </div>
    );
}

export default App;
