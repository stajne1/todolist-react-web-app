import { actionTypes } from './actions/actionTypes'

export default function todos(state = [], action) {
    switch(action.type) {
        case actionTypes.ADD_TODO:
            return [...state, {id: Date.now(), text: action.text, completed: false}];
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => {
                return todo.id === action.id ? {...todo, completed: !todo.completed} : todo;
            })
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)        
        default: 
            return state;    
    }
}