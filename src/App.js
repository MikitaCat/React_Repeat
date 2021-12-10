import React from 'react';
import { useState, useEffect } from 'react';
import '../src/styles/App.css';
import { PostServise } from './API/PostServise';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import Loader from './components/UI/Loader/Loader';
import MyModal from './components/UI/Modal/MyModal';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';

function App() {
  //React Hooks
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  // const [isPostsLoading, setIsPostsLoading] = useState(false);

  //Call this when page rendered and load the array of posts
  useEffect(() => {
    fetchPosts();
  }, []);

  //User Hooks
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostServise.getAll();
    setPosts(posts);
  });

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

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
      {postError && <h2 style={{ textAlign: 'center', color: 'red' }}>{postError}</h2>}
      {!isPostsLoading ? (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts List" />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
