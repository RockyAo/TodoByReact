import React,{Component} from 'react';
import ReactModal from 'react-modal';

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
                <button className="todo-top-button todo-left" onClick={()=>{this.setState({showInput:true})}}>New Todo</button>
                <ReactModal
                    isOpen={this.state.showInput}
                    style={{
                        overlay: {
                            backgroundColor:"rgba(0,0,0,0.4)"
                        },
                        content: {
                            top:150,
                            left:"20%",
                            right:'20%',
                            bottom:'75%',
                            margin:0,
                            padding:0
                        }
                    }}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={()=>this.closeModal()}
                    contentLabel="test"
                >
                    <input className="todo-top-input"
                           placeholder="请输入待办事项"
                           autoFocus={true}
                           onKeyDown={(event)=>this.inputFinish(event)}
                    />
                    {/*<button onClick={()=>this.closeModal()}>确定</button>*/}
                </ReactModal>
            </div>
        )
    }

    inputFinish(event){

        let keyCode = event.keyCode;
        if (keyCode === 13) {
            let title = event.target.value;
            event.target.value = "";
            this.closeModal();
        }
    }

    closeModal(){

        this.setState({showInput:false});
    }
}