import React from 'react';
import { useState } from 'react';
import '../src/styles/App.css';
import PostItem from './components/PostItem';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Great Language' },
    { id: 2, title: 'Python', body: 'BackEnd Language' },
    { id: 1, title: 'C#', body: 'Language for .NET, Unity' },
  ]);
  return (
    <div className="App">
      {posts.map((post) => {
        return <PostItem post={post} key={post.id} />;
      })}
    </div>
  );
}

export default App;
