import React, { Component } from 'react';

import TodoHeader from './View/TodoHeader';
import TodoTop from './View/TodoTop';


class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoHeader />
          <TodoTop />
      </div>
    );
  }
}

export default App;
