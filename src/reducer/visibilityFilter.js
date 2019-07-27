import { actionTypes } from './actions/actionTypes'

export default function visibilityFilter(state = 'SHOW_ALL', action) {
    switch(action.type){
        case actionTypes.SET_VISIBILITY_FILTER:
            return action.visibilityFilter;
        default: 
            return state;    
    }
}