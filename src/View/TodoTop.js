import React,{Component,PropTypes} from 'react';


export default class TodoTop extends Component{

    static get defaultProps(){

        return{

            todoCount:0
        }
    }
    static propTypes = {
        todoCount: PropTypes.number.isRequired
    }

    constructor(props){
        super(props);
    }



    render(){
        return(
            <div className="todo-top">
                <h2 className="todo-top-p todo-left">All Todos</h2>
                <h4 className="todo-top-leftItem todo-left"> 你有{this.props.todoCount}项未处理</h4>
            </div>
        )
    }

}