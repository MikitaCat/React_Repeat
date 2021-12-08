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
  const bodyInputRef = useRef();

  const addNewPost = (event) => {
    event.preventDefault();
    console.log(bodyInputRef);
  };

  return (
    <div className="App">
      <form>
        {/* Managed Input (useState, onChange) */}
        <MyInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Post Title"
        />

        {/* Unmanaged input (useFef, React.forwardRef(for own UI components)) */}
        <MyInput ref={bodyInputRef} placeholder="Post Text" />
        <MyButton onClick={addNewPost}>Delete Post</MyButton>
        <PostList posts={posts} title="Posts List" />
      </form>
    </div>
  );
}

export default App;
