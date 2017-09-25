import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { generateId } from './lib/todoHelpers';

/**
 * Import component
 */
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import { addTodo } from './lib/todoHelpers';

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

  hanleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      name: this.state.currentTodo,
      isComplete: false,
      id: generateId()
    }

    const updatedTodo =  addTodo(this.state.todos,newTodo);

    this.setState({
      todos: updatedTodo,
      currentTodo: ''
    });
  }

  handleEmptySubmit = (event) =>{
    event.preventDefault();

    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.hanleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm 
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            hanleSubmit={submitHandler}
          />
          <TodoList 
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
