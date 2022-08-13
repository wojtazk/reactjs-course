import React, { useState } from 'react';
import NewToDo from './components/NewToDo';

import ToDos from './components/ToDos';
import { Todo } from './models/todo';

function App() {
  const [todos, setTodos] = useState([
    new Todo('steal a baby'),
    new Todo('Drive under influence'),
    new Todo('Kill someone famous'),
  ]);

  const addItemHandler = (text: string) => {
    setTodos((prevState) => [...prevState, new Todo(text)]);
  };

  const removeItemHandler = (itemId: string) => {
    // console.log(itemId);

    setTodos((prevState) => prevState.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <NewToDo onAddItem={addItemHandler} />
      <ToDos items={todos} onRemoveItem={removeItemHandler} />
    </div>
  );
}

export default App;
