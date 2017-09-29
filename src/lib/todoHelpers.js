import uuidv1 from 'uuid/v1';
import _ from 'lodash';

export const addTodo = (list, item) =>{
  return list.concat(item);
}

export const generateId = () =>{
  return uuidv1();
}

export const findById = (id, list) => list.find(item =>item.id ===id);

export const toggleTodo = (todo) =>({...todo, isComplete: !todo.isComplete});

export const updateTodo = (todo, updated) => {
  const updatedIndex = todo.findIndex(item => item.id === updated.id);
  return [
    ...todo.slice(0, updatedIndex),
    updated,
    ...todo.slice(updatedIndex + 1)
  ]
}

export const removeTodo = (id, list) =>{
 const removeIndex = list.findIndex(item => item.id === id);
 return [
   ...list.slice(0, removeIndex),
   ...list.slice(removeIndex + 1)
 ]
}
export const filterTodos = (list, route) => {
  console.log('list',list)
   console.log('route',route)
  switch (route) {
    case '/active':
      return list.filter(item => !item.isComplete);
    case '/complete':
      return list.filter(item => item.isComplete);
  
    default:
      return list;
  }
}