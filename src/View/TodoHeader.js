import React, {Component} from 'react';

import './Todo.css';

export default class TodoHeader extends Component {
  render() {
    return (
      <div className="todo-header">
        <h1 className="todo-header-title">Todo</h1>
      </div>
    );
  }
}
