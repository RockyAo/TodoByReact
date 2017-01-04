import React,{Component} from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';
import TodoAction from '../Action/TodoAction';

class Class extends Component {

    render() {

        const {
            todos,
            toggleItem,
            removeItem,
            editItem
        } = this.props;

        return (

            <TodoList
                todos={todos}
                toggleItemList={toggleItem}
                removeItemList={removeItem}
                editItemList={editItem}
            />
        );
    }
}


export default connect (
    (state) => ({todos: state.todo}),
    {
        toggleItem: TodoAction.toggleItem,
        removeItem: TodoAction.removeItem,
        editItem: TodoAction.editItem
    }
)(Class);
