import { countAtom, incrementAtom, myStore } from 'reactstore';

export function CounterIncrement() {
  const count = myStore.get(countAtom);
  return (
    <section>
      <h2>Increment</h2>
      <button onClick={() => myStore.set(incrementAtom)}>
        Increment: count is {count}
      </button>
    </section>
  );
}
