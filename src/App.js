import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from "./Todo/TodoList";
import Projects from "./Project/Projects";
import './App.css';

class App extends Component {
  render() {
    return (
      <Projects />
    );
  }
}

export default App;
