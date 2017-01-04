import Constants from '../Constants/Constants';


let _toggleItemList = (todos,id) => {

    let newTodos = [...todos];

    let object = newTodos.find((todo) => todo.id === id);

    object.completed = !object.completed;

    return newTodos;
}

let _removeItemList = (todos,id) => {

    let newTodos = [...todos];

    let idx = newTodos.findIndex((todo) => todo.id === id);

    newTodos.splice(idx,1);

    return newTodos;
}


let _createItemList = (todos,inputValue) => {

    let newTodos = [...todos];

    let newID = newTodos.length === 0 ? 101 : newTodos[newTodos.length - 1].id + 1;

    if (inputValue === "")
        return newTodos;
    newTodos.push({
        id: newID,
        title: inputValue,
        completed: false
    });
    return newTodos;
}


let _editItemList = (todos,title,id) => {
    let newTodos = [...todos];
    let target = newTodos.find((todo) => todo.id === id);
    target.title = title
    return newTodos;
}

const todo = (state = [],action = {}) => {

    switch (action.type) {
        case Constants.LOAD_DATA:
            return action.todos;
        case Constants.TOGGLE_ITEM:
            return _toggleItemList(state,action.id);
        case Constants.REMOVE_ITEM:
            return _removeItemList(state,action.id);
        case Constants.CREATE_ITEM:
            return _createItemList(state,action.title);
        case Constants.EDIT_ITEM:
            return _editItemList(state,action.title,action.id);
        default:
            return state;
    }

}

export default todo;