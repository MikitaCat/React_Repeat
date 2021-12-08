import React from 'react';
import { useState } from 'react';
import '../src/styles/App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Great Language' },
    { id: 2, title: 'Python', body: 'BackEnd Language' },
    { id: 3, title: 'C#', body: 'Language for .NET, Unity' },
    { id: 4, title: 'C#', body: 'Language for .NET, Unity' },
  ]);

  // const addNewPost = (event) => {
  //   event.preventDefault();
  //   setPosts([{ id: Date.now(), ...post }, ...posts]);
  //   setPost({ title: '', body: '' });
  // };

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Posts List" />
    </div>
  );
}

export default App;
