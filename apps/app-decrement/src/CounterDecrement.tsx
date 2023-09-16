import { countAtom, decrementAtom, myStore } from 'reactstore';

export function CounterDecrement() {
  return (
    <section>
      <h2>Decrement</h2>
      <button onClick={() => myStore.set(decrementAtom)}>
        Decrement: myStore count is {myStore.get(countAtom)}
      </button>
    </section>
  );
}
