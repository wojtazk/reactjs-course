import React from 'react';

const ToDos: React.FC<{ items: string[]; children?: JSX.Element }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ToDos;
