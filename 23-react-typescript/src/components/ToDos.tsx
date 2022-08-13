import React from 'react';
import { Todo } from '../models/todo';
import ToDoItem from './ToDoItem';

const ToDos: React.FC<{ items: Todo[]; children?: JSX.Element }> = (props) => {
  return (
    <ul>
      {props.items.map((item: Todo) => (
        <ToDoItem {...item} />
      ))}
    </ul>
  );
};

export default ToDos;
