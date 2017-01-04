import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoAction from './Action/TodoAction';
import TodoHeaderController from './View/TodoHeaderController';
import TodoTopController from './View/TodoTopController';
import TodoListController from './View/TodoListController';
class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoHeaderController />
          <TodoTopController />
          <TodoListController />
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
