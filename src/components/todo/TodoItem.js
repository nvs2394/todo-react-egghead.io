import React, { PropTypes } from 'react';

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

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
