import React,{Component} from 'react';
import {connect} from 'react-redux';
import TodoAction from '../Action/TodoAction';
import TodoHeader from './TodoHeader';

class TodoHeaderController extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TodoHeader onKeyDown={(e) => {
                let keyCode = e.keyCode;
                if (keyCode === 13) {
                    let title= e.target.value;
                    this.props.createItem(title);
                    e.target.value = "";
                }
            }}/>
        );
    }

}

export default connect (undefined,{

    createItem:TodoAction.createItem

})(TodoHeaderController);
