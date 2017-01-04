import React,{Component} from 'react';
import {connect} from 'react-redux';
import TodoTop from './TodoTop';


class TodoTopController extends Component {

    render() {

        const {
            todos
        } = this.props;

        let todoCount = todos.filter((todo)=> !todo.completed).length;

        return (
           <TodoTop todoCount={todoCount}/>
        );
    }
}

export default connect (

    (state) => ({todos: state.todo})

)(TodoTopController);
