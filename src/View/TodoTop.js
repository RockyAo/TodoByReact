import React,{Component} from 'react';


export default class TodoTop extends Component{



    constructor(props){

        super(props);

    }

    render(){
        return(
            <div className="todo-top">
                <h2 className="todo-top-p todo-left">All Todos</h2>
                <h4 className="todo-top-leftItem todo-left"> 你有25项未处理</h4>
            </div>
        )
    }

}