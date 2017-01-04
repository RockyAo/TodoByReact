import React,{Component,PropTypes} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

    static get defaultProps(){

        return {
            todos: [],
            toggleItemList: () => {},
            removeItemList: () => {},
            editItemList: () => {}
        }
    }

    static propTypes = {

        todos: PropTypes.arrayOf(PropTypes.object).isRequired,
        toggleItemList: PropTypes.func.isRequired,
        removeItemList: PropTypes.func.isRequired,
        editItemList: PropTypes.func.isRequired
    }

    render() {

        const {
            todos,
            toggleItemList,
            removeItemList,
            editItemList
        } = this.props;

        return (
            <div className="todo-list">
                <ul className="todo-item-line" >
                    {
                        todos.map((todo)=>{

                            return(
                                <TodoItem
                                    key={todo.id}
                                    completed={todo.completed}
                                    title={todo.title}
                                    toggleItem={()=>{

                                        toggleItemList(todo.id)
                                    }}

                                    removeItem={()=>{

                                        removeItemList(todo.id)

                                    }}

                                    editItem={(title)=>{

                                        editItemList(title,todo.id)
                                    }}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
