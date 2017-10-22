import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { onTodoClick } = props;
  return(
    <div className="Todo-List">
      <ul>
        {
          props.todos.map(todo=> 
            <TodoItem 
              key={todo.id}
              todo={todo}
              onClick={() => onTodoClick(todo.id)}
            />
          )
        }
      </ul>
    </div>
  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

TodoList.defaultProps = {
  todos: [{}],
  onTodoClick: () => {}
}

export default TodoList;
