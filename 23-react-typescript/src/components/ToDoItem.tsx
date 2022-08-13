import React from 'react';

import styles from './ToDoItem.module.css';

// import { Todo } from '../models/todo';

const ToDoItem: React.FC<{
  text: string;
  onRemoveItem: () => void;
}> = (props) => {
  return (
    <li className={styles.item} onClick={props.onRemoveItem}>
      {props.text}
    </li>
  );
};

export default ToDoItem;
