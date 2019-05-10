import { /* ACTION TYPES GO HERE */} from '../actions';


const initialState = {
    todos: [
        { todo: "wash clothes", completed: false, index: 0 }
        { todo: "mow lawn", completed: false, index: 1 }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type)
}

//bookmarking here; to be continued