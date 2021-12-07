import React from 'react';
import { useState } from 'react';
import '../src/styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
