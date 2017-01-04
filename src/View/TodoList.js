import React,{Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

    render() {
        return (
            <div className="todo-list">
                <ul className="todo-item-line" >
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                </ul>
            </div>
        );
    }
}
