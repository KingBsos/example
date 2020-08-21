import React from 'react';
import './App.css';
import TodoListBind from './components/TodoListBind.js';
import FilterWrapPanel from './components/FilterWrapPanel';
import AddInput from './components/AddInput';

function App() {
  return (
    <div>
      <TodoListBind />
      <FilterWrapPanel />
      <AddInput />
    </div>
  );
}

export default App;
