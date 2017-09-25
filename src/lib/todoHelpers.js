import uuidv1 from 'uuid/v1';

export const addTodo = (list, item) =>{
  return list.concat(item);
}

export const generateId = () =>{
  return uuidv1();
}