import React from 'react';
import { useState } from 'react';
import '../src/styles/App.css';
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

  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      ...post,
    };
    setPosts([newPost, ...posts]);
    setPost({ title: '', body: '' });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
          type="text"
          placeholder="Post Title"
        />

        <MyInput
          value={post.body}
          onChange={(event) => setPost({ ...post, body: event.target.value })}
          placeholder="Post Text"
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
        <PostList posts={posts} title="Posts List" />
      </form>
    </div>
  );
}

export default App;
