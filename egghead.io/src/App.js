import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/**
 * Import component
 */
import Footer from './components/footer/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'


class App extends Component {
  
  render() {
    const { params } = this.props.match;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React & Redux Todos</h2>
        </div>
        <div className="Todo-App">
          <AddTodo />
          <VisibleTodoList 
            filter={params.filter || 'all'}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
