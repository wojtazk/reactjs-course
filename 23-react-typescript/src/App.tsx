// import React, { useState } from 'react';
import NewToDo from './components/NewToDo';

import ToDos from './components/ToDos';
import TodosContextProvider from './store/todos-context';
// import { Todo } from './models/todo';

function App() {
  return (
    <TodosContextProvider>
      <NewToDo />
      <ToDos />
    </TodosContextProvider>
  );
}

export default App;
