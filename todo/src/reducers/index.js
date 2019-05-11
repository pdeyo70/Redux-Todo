import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../actions';


const initialState = {
    todos: [
        { todo: "wash clothes", completed: false, index: 0 },
        { todo: "mow lawn", completed: false, index: 1 }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                todo: action.payload,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    action.payload === index
                        ? { ...todo, completed: !todo.completed } 
                        : todo
                )
            };
        case DELETE_TODO:
            return {
                
            }
        default:
            return state;
    }
};

