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
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1)
  ]
}