import React,{Component} from 'react';


export default class TodoTop extends Component{



    constructor(props){

        super(props);

        this.state = {

            showInput:false
        }
    }

    render(){
        return(
            <div className="todo-top">
                <h2 className="todo-top-p todo-left">All Todos</h2>
                <h4 className="todo-top-leftItem todo-left"> 你有25项未处理</h4>
                {/*<button className="todo-top-button todo-left" onClick={()=>{this.setState({showInput:true})}}>New Todo</button>*/}



            </div>
        )
    }

    inputFinish(event){

        let keyCode = event.keyCode;
        if (keyCode === 13) {

            let title = event.target.value;
            event.target.value = "";
            this.setState({showInput:false});
        }
    }

    closeModal(){

        this.setState({showInput:false});
    }
}