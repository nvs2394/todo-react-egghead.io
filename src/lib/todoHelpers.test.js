import { addTodo } from './todoHelpers';

test('addTodo should add the item in list', () =>{
  const startTodos = [{
    "id": 2,
    "name": "Fusion Telecommunications International, Inc.",
    "isComplete": true
      }, {
    "id": 3,
    "name": "Controladora Vuela Compania de Aviacion, S.A.B. de C.V.",
    "isComplete": true
  }]

  const newTodo = {
    "id": 1,
    "name": "TFS Financial Corporation",
    "isComplete": false
  }
  
  const expected = [{
      "id": 2,
      "name": "Fusion Telecommunications International, Inc.",
      "isComplete": true
    }, {
      "id": 3,
      "name": "Controladora Vuela Compania de Aviacion, S.A.B. de C.V.",
      "isComplete": true
    },{
      "id": 1,
      "name": "TFS Financial Corporation",
      "isComplete": false
    }]

  const result = addTodo(startTodos, newTodo);

  expect(result).toEqual(expected);

})