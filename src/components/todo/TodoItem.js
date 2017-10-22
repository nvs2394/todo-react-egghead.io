import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { onClick, todo : { id, completed, text} } = props;

  return(
    <li key={id}>
      <span className='delete-item'><a href="#">X</a></span>
      <input 
        type="checkbox" 
        checked={completed}
        onChange={ onClick }/>{text}
    </li>
  )
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default TodoItem;
