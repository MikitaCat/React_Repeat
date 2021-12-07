import React from 'react';
import { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('');

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div>
      <h1>Counter {likes}</h1>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
