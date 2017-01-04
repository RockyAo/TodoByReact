import Constant from '../Constants/Constants';

const TodoAction = {

    loadData() {

        return (dispatch) => {
            fetch('todos.json')
                .then((responseData) => responseData.json())
                .then((todos) => {
                    dispatch({
                        type: Constant.LOAD_DATA,
                        todos
                    });
                })
        }
    },

    toggleItem(id) {
        return {
            type: Constant.TOGGLE_ITEM,
            id
        };
    },
    removeItem(id) {
        return {
            type: Constant.REMOVE_ITEM,
            id
        }
    },
    createItem(title) {
        return {
            type: Constant.CREATE_ITEM,
            title
        }
    },
    editItem(title,id) {
        return {
            type: Constant.EDIT_ITEM,
            title,
            id
        }
    }


};

export default TodoAction;