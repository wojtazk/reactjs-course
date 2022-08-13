import React from 'react';
import { Todo } from '../models/todo';

const ToDoItem: React.FC<Todo> = (props) => {
  return <li key={props.id}>{props.text}</li>;
};

export default ToDoItem;
