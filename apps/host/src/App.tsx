import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CounterIncrement } from 'app-increment';
import { CounterDecrement } from 'app-decrement';
import { Provider } from 'jotai';
import { countAtom, myStore, incrementAtom, decrementAtom } from 'reactstore';

function App() {
  const [count, setCount] = useState(myStore.get(countAtom));

  useEffect(() => {
    const unsub = myStore.sub(countAtom, () => {
      console.log('countAtom value is changed to', myStore.get(countAtom));
      setCount(myStore.get(countAtom));
    });
    return unsub;
  }, []);
  return (
    <div className='App'>
      <h1>Host count: {count}</h1>

      <button onClick={() => myStore.set(incrementAtom)}>
        count is {count}
      </button>

      <div className='grid'>
        <CounterIncrement />
        <CounterDecrement />
      </div>
    </div>
  );
}

export default App;
