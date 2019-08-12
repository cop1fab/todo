import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//@component
import AddTodo from './components/addTodo';
import GetTodo from './components/getTodo';
class App extends Component {
  state = {
    todoName: []
  }
  onCombine = (todo) => {
    this.setState({ todoName: [...this.state.todoName, todo] });
  }
  onDelete = (id) => {
    this.setState({ todoName: [...this.state.todoName.filter(todo => todo.id !== id)] })
  }
  render() {
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Create your Todo list</p>
        </div>
        <AddTodo newName={this.onCombine} check={this.state.todoName} />
        <GetTodo name={this.state.todoName} delete={this.onDelete} />
      </div>
    );
  }
}

export default App;