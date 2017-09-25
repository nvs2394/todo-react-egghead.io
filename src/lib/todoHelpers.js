import uuidv1 from 'uuid/v1';

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