export default function visibilityFilter(state = 'SHOW_ALL', action) {
    switch(action.type){
        case 'SHOW_ALL':
        case 'SHOW_COMPLETED':
        case 'SHOW_PENDING':
            return action.visibilityFilter;
        default: 
            return state;    
    }
}