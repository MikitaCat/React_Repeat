import React from 'react';
import { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';

function App() {
  const [value, setValue] = useState('');
  const arr = [, , , ,];

  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={() => console.log()}>On console</button>
      <ClassCounter />
    </div>
  );
}

export default App;
