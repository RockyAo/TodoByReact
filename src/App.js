import React, { Component } from 'react';
import TodoHeader from './View/TodoHeader';
import TodoTop from './View/TodoTop';
import TodoList from './View/TodoList';
import { connect } from 'react-redux';
import TodoAction from './Action/TodoAction';


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
