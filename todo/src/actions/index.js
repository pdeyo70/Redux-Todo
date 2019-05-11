export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';



export const addTodo = text => {
    type: 'ADD_TODO',
    payload: todo
}

export const toggleCompleted = index => {
    type: 'TOGGLE_COMPLETED',
    payload: index
}