import React, { useContext } from 'react';

import styles from './ToDos.module.css';

import { TodosContext } from '../store/todos-context';

import { Todo } from '../models/todo';
import ToDoItem from './ToDoItem';

const ToDos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item: Todo) => (
        <ToDoItem
          key={item.id}
          text={item.text}
          onRemoveItem={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDos;
