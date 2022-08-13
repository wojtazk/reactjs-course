import React, { useRef } from 'react';

import styles from './NewToDo.module.css';

const NewToDo: React.FC<{ onAddItem: (text: string) => void }> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextRef.current!.value;

    // guard clause
    if (enteredText.trim().length === 0) {
      return;
    }

    // add new prop
    props.onAddItem(enteredText);

    // clear input field
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
