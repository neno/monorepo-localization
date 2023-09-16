import { atom, createStore } from "jotai";

export const myStore = createStore();

export const countAtom = atom<number>(0);

export const incrementAtom = atom(
  null,
  (get, set) => set(countAtom, get(countAtom) + 1)
);

export const decrementAtom = atom(
  null,
  (get, set) => set(countAtom, get(countAtom) - 1)
);
