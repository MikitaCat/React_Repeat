import React from 'react';
import { useState, useRef } from 'react';
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

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title: title,
      body: body,
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Post Title"
        />

        <MyInput
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Post Text"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
        <PostList posts={posts} title="Posts List" />
      </form>
    </div>
  );
}

export default App;
