import React, { PropTypes } from 'react';
import { partial } from '../../lib/utils';

const TodoItem = (props) => {
  const { todo } = props; 
  
  const handleToggle = partial(props.handleToggle, todo.id)
  const handleRemove = partial(props.handleRemove, todo.id)

  return(
    <li key={todo.id}>
      <span className='delete-item'><a href="#" onClick={handleRemove}>X</a></span>
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
