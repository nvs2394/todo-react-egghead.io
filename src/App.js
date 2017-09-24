import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Import component
 */
import TodoForm from './components/todo/TodoForm'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [{
        "id": 1,
        "name": "TFS Financial Corporation",
        "isComplete": false
      }, {
        "id": 2,
        "name": "Fusion Telecommunications International, Inc.",
        "isComplete": true
      }, {
        "id": 3,
        "name": "Controladora Vuela Compania de Aviacion, S.A.B. de C.V.",
        "isComplete": true
      }],
      currentTodo: ''
    }
  }

  handleInputChange = (event) =>{
    this.setState({
      currentTodo: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm 
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
          />
          <div className="Todo-List">
            <ul>
              {
                this.state.todos.map(todo=> 
                  <li key={todo.id}>
                    <input type="checkbox" defaultChecked={todo.isComplete}/>
                    {todo.name}
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
