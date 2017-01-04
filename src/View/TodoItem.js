import React,{Component} from 'react';

export default class TodoItem extends Component {

    render() {
        return (
            <div className="todo-item">
                <p>明天八点开会</p>
                <img className="todo-item-selectedImage" src={require("../Image/selected.png")}/>
            </div>
        );
    }
}
