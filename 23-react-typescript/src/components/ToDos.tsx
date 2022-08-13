import React from 'react';

import styles from './ToDos.module.css';

import { Todo } from '../models/todo';
import ToDoItem from './ToDoItem';

const ToDos: React.FC<{
  items: Todo[];
  children?: JSX.Element;
  onRemoveItem: (itemId: string) => void;
}> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item: Todo) => (
        <ToDoItem
          key={item.id}
          text={item.text}
          onRemoveItem={props.onRemoveItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDos;
