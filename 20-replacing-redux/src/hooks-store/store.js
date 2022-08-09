import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

////////////////////////
export const useStore = (shouldListen = true) => {
  const [, setState] = useState(globalState);

  const dispatch = (actionId, payload) => {
    const newState = actions[actionId](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    shouldListen && listeners.push(setState);

    return () =>
      shouldListen && (listeners = listeners.filter((li) => li !== setState));
  }, []);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
