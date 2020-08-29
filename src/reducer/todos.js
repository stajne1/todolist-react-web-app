import { actionTypes } from './actions/actionTypes'

export default function todos(state = [], action) {
    switch(action.type) {
        case actionTypes.SET_TODOS:
            return [...action.todos];       
        default: 
            return state;    
    }
}