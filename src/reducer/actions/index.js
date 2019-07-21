import { actionTypes } from './actionTypes'

export const actions = {
    addTodo: text => ({
        type: actionTypes.ADD_TODO,
        text
    }),
    toggleTodo: id => ({
        type: actionTypes.TOGGLE_TODO,
        id
    })
}