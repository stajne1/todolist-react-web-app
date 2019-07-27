import React from 'react';

import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import VisibilityFilter from './containers/VisibilityFilter'

import './App.scss';

function App() {
  return (
    <div className="app">
      <h1>TODO APP</h1>
      <AddTodo />
      <VisibleTodoList />
      <VisibilityFilter />
    </div>
  );
}

export default App;
