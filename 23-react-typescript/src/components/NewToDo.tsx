import React, { useContext, useRef } from 'react';

import { TodosContext } from '../store/todos-context';

import styles from './NewToDo.module.css';

const NewToDo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextRef.current!.value;

    // guard clause
    if (enteredText.trim().length === 0) {
      return;
    }

    // add new prop
    todosCtx.addTodo(enteredText);

    // clear input field
    todoTextRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewToDo;
