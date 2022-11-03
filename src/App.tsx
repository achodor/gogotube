import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount(count => count + 1)}>Count is {count}</button>
      </div>
    </div>
  );
}

export default App;
