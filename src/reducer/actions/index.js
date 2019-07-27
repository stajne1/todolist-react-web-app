import { actionTypes } from './actionTypes'

export const actions = {
    addTodo: text => ({
        type: actionTypes.ADD_TODO,
        text
    }),
    toggleTodo: id => ({
        type: actionTypes.TOGGLE_TODO,
        id
    }),
    deleteTodo: id => ({
        type: actionTypes.DELETE_TODO,
        id
    }),
    setVisibilityFilter: visibilityFilter => ({
        type: actionTypes.SET_VISIBILITY_FILTER,
        visibilityFilter: visibilityFilter
    })
}