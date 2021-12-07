import React from 'react';
import { useState } from 'react';
import '../src/styles/App.css';
import PostItem from './components/PostItem';

function App() {
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'JavaScript', body: 'Discription' }} />
    </div>
  );
}

export default App;
