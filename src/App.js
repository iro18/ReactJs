import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from "./Todo/TodoList";
import Projects from "./Project/Projects";
import Counter from "./Counter/Counter";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Projects />
      <TodoList />
      <Counter />
      </div>
    );
  }
}

export default App;
