import React, { Component } from 'react';

import TodoHeader from './View/TodoHeader';
import TodoTop from './View/TodoTop';
import TodoList from './View/TodoList';



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
