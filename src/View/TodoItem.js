import React,{Component,PropTypes} from 'react';

const normalImgUrl = "../Image/selected.png";
const selectedImgUrl = '../Image/unselected.png';

export default class TodoItem extends Component {

    static get defaultProps() {
        return {
            title: "",
            completed: false,
            toggleItem: () => {},
            removeItem: () => {},
            editItem:() => {}
        }
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        toggleItem: PropTypes.func.isRequired,
        removeItem: PropTypes.func.isRequired,
        editItem: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            stateEditor:false,
            selected:this.props.completed
        }
    }

    render() {

        return this.state.stateEditor ? this.renderEditor() : this.renderItem();
    }


    renderItem(){

        const {
            title,
            completed,
            toggleItem,
            removeItem
        } = this.props;

        return(
            <div className="todo-item" onClick={()=>toggleItem()}>
                <p onDoubleClick={()=>this.changeEditor()}>{title}</p>
                <img className="todo-item-selectedImage" src={completed ? require("../Image/selected.png"):require("../Image/unselected.png")}/>
            </div>

        );
    }

    renderEditor(){
        const {
            editItem
        } = this.props;

        return(
            <div className="todo-item">
                <input className="todo-item-input" onKeyDown={(e)=>{

                    let keyCode = e.keyCode;
                    if (keyCode === 13) {
                        let title= e.target.value;
                        if (title.length > 0) {
                            editItem(title);
                            e.target.value = "";
                            this.changeEditor()
                        }else {
                            alert("请输入待办事项标题");
                        }

                    }
                }}
                autoFocus={true}
                />
            </div>

        );
    }

    changeEditor(){

        this.setState({
           stateEditor:!this.state.stateEditor
        });
    }

}
