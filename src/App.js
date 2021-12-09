import React from 'react';
import { useState, useMemo } from 'react';
import '../src/styles/App.css';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyModal from './components/UI/Modal/MyModal';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'A', body: 'D' },
    { id: 2, title: 'C', body: 'B' },
    { id: 3, title: 'B', body: 'C' },
    { id: 4, title: 'D', body: 'A' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  //Posts Sorting Algorithm
  const sortedPosts = useMemo(() => {
    console.log('Working on memoized function!');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  //Posts Finding Algorithm
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((el) =>
      el.title.toLowerCase().includes(filter.query.toLocaleLowerCase()),
    );
  }, [filter.query, sortedPosts]);

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
