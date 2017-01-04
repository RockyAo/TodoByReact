import React,{Component} from 'react';

export default class TodoItem extends Component {

    static  defaultProps(){

        return{

            title:"",
            completed:false,
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            stateEditor:false
        }
    }

    render() {

        return this.state.stateEditor ? this.renderItem() : this.renderEditor();
    }


    renderItem(){

        return(
            <div className="todo-item">
                <p>明天八点开会</p>
                <img className="todo-item-selectedImage" src={require("../Image/selected.png")}/>
            </div>

        );
    }

    renderEditor(){

        return(
            <div className="todo-item">
                <p>明天八点开会</p>
                <img className="todo-item-selectedImage" src={require("../Image/selected.png")}/>
            </div>

        );
    }
}
