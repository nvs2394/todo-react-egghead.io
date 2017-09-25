import React, { PropTypes } from 'react';

const TodoItem = (props) => {
  const { todo } = props; 
  const handleToggle = () =>props.handleToggle(todo.id);
  return(
    <li key={todo.id}>
      <input 
        type="checkbox" 
        checked={todo.isComplete}
        onChange={ handleToggle }/>{todo.name}
    </li>
  )
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
