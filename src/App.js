import React, { Component } from 'react';

import TodoHeader from './View/TodoHeader';
import TodoTop from './View/TodoTop';
import TodoList from './View/TodoList';

let todos = [
    {
      title:'这是一条待办事项',
      completed:false,
      id:100
    },
    {
        title:'这是一条待办事项',
        completed:false,
        id : 101
    },
    {
        title:'这是一条待办事项',
        completed:true,
        id : 102
    },
    {
        title:'这是一条待办事项',
        completed:false,
        id:103
    }
];

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoHeader />
          <TodoTop />
          <TodoList />
      </div>
    );
  }
}

export default App;
