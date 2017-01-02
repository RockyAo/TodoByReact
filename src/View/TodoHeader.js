import React, {Component} from 'react';

import './Todo.css';

export default class TodoHeader extends Component {
  render() {
    return (
      <div className="todo-header">
        <h2 className="todo-header-title">Todo</h2>
      </div>
    );
  }
}
