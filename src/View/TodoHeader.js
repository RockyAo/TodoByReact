import React, {Component , PropTypes} from 'react';

import './Todo.css';

export default class TodoHeader extends Component {

   static get defaultProps(){

        return{
            onKeyDown: () => {},

        }
   }

  static propTypes = {

     onKeyDown:PropTypes.func.isRequired

  }

  render() {
    return (
      <div className="todo-header">
        <h1 className="todo-header-title">Todo</h1>
        <input className="todo-header-input"
               placeholder="请输入待办事项"
               autoFocus={true}
               onKeyDown={(e)=>this.props.onKeyDown(e)}
        />
      </div>
    );
  }
}
