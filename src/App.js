import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [value, setValue] = useState('');
  const arr = [, , , ,];

  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={() => console.log()}>On console</button>
      <Counter />
    </div>
  );
}

export default App;
