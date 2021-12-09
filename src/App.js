import React from 'react';
import { useState } from 'react';
import '../src/styles/App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/Select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'A', body: 'D' },
    { id: 2, title: 'C', body: 'B' },
    { id: 3, title: 'B', body: 'C' },
    { id: 4, title: 'D', body: 'A' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  // const addNewPost = (event) => {
  //   event.preventDefault();
  //   setPosts([{ id: Date.now(), ...post }, ...posts]);
  //   setPost({ title: '', body: '' });
  // };

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    console.log(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />

      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sorting by"
        options={[
          { value: 'title', name: 'By Title' },
          { value: 'body', name: 'By Content' },
        ]}
      />

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Posts List" />
      ) : (
        <h2 style={{ textAlign: 'center' }}>There aren't any posts</h2>
      )}
    </div>
  );
}

export default App;
