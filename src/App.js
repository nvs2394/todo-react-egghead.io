import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/**
 * Import component
 */
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import {Footer} from './components/footer/Footer';
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo , filterTodos } from './lib/todoHelpers';
import { loadTodos, createTodo, saveTodo } from './lib/todoAPI';


class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}));
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

    createTodo(newTodo)
      .then(() => this.showTempMessage('Todo addesd'));
  }

  handleEmptySubmit = (event) =>{
    event.preventDefault();

    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleToggle = (id) =>{
    const todo = findById(id, this.state.todos);
    saveTodo(todo)
      .then((todo) => {
        const updatedTodos = updateTodo(this.state.todos, todo);
        this.setState({
          todos: updatedTodos
        });
        this.showTempMessage('Todo updated');
      });
  }

  handleRemove = (id, event) => {
    event.preventDefault();
    const updatedTodos = removeTodo(id, this.state.todos);
    this.setState({
      todos: updatedTodos
    })
  }

  showTempMessage = (message) => {
    this.setState({message});
    setTimeout(() =>{
      this.setState({message: ''});
    }, 2000);
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.hanleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos,this.context.route);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          {this.state.message && <span className="success">{this.state.message}</span>}
          <TodoForm 
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            hanleSubmit={submitHandler}
          />
          <TodoList 
            todos={displayTodos}
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
