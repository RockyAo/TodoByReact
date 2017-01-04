import React, { Component } from 'react';
import TodoList from './View/TodoList';
import { connect } from 'react-redux';
import TodoAction from './Action/TodoAction';
import TodoHeaderController from './View/TodoHeaderController';
import TodoTopController from './View/TodoTopController';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoHeaderController />
          <TodoTopController />
          <TodoList />
      </div>
    );
  }

    componentDidMount() {

        this.props.loadData();
    }
}

export default App = connect(
    undefined,
    {
        loadData:TodoAction.loadData
    }
)(App);
