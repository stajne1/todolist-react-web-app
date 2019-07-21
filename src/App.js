import React from 'react';

import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

import './App.scss';

function App() {
  return (
    <div className="app">
      <h1>TODO APP</h1>
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
}

export default App;
