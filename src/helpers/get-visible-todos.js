export default function(todos, visibilityFilter){
    switch(visibilityFilter) {
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_PENDING':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
}