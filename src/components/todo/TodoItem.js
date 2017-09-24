import React from 'react';

const TodoItem = (props) => {
  const { todo } = props; 
  return(
    <li key={todo.id}>
      <input 
        type="checkbox" 
        defaultChecked={todo.isComplete} />{todo.name}
    </li>
  )
};

export default TodoItem;
