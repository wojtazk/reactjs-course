import React, { PropsWithChildren, useState } from 'react';
import { Todo } from '../models/todo';

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
//////////////////////////////
export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});
//////////////////////////////
const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {
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

  const contexValue: TodosContextType = {
    items: todos,
    addTodo: addItemHandler,
    removeTodo: removeItemHandler,
  };

  return (
    <TodosContext.Provider value={contexValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
