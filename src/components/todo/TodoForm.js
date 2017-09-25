import React, { PropTypes } from 'react';

const TodoForm = (props) => {
  return(
    <form onSubmit={props.hanleSubmit}>
      <input 
        type="text" 
        value={props.currentTodo} 
        onChange={props.handleInputChange}
      />
    </form>
  )
};

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}


export default TodoForm;
