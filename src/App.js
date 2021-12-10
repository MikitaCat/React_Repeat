import axios from 'axios';
import React from 'react';
import { useState, useMemo, useEffect } from 'react';
import '../src/styles/App.css';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyModal from './components/UI/Modal/MyModal';
import { usePosts } from './hooks/usePosts';

function App() {
  //React Hooks
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  //Call this when page rendered and load the array of posts
  useEffect(() => {
    fetchPosts();
  }, []);

  //User Hooks
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
    setPosts(response.data);
  }

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  // const closeModalWindow = (bool) => {
  //   setModal(bool);
  // };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} style={{ marginTop: '30px' }}>
        Create New Post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts List" />
      ) : (
        <h2 style={{ textAlign: 'center' }}>There aren't any posts</h2>
      )}
    </div>
  );
}

export default App;
