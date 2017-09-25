import React, { PropTypes} from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return(
    <div className="Todo-List">
      <ul>
        {
          props.todos.map(todo=> 
            <TodoItem 
              key={todo.id}
              todo={todo}
              handleToggle={props.handleToggle}
            />
          )
        }
      </ul>
    </div>
  )
};

TodoList.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoList;
