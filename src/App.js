import React from 'react';
import { useState } from 'react';
import '../src/styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Great Language' },
    { id: 2, title: 'Python', body: 'BackEnd Language' },
    { id: 3, title: 'C#', body: 'Language for .NET, Unity' },
    { id: 4, title: 'C#', body: 'Language for .NET, Unity' },
  ]);

  return (
    <div className="App">
      <MyInput placeholder="Post Title" />
      <MyInput placeholder="Post Text" />
      <MyButton>Delete Post</MyButton>
      <PostList posts={posts} title="Posts List" />
    </div>
  );
}

export default App;
