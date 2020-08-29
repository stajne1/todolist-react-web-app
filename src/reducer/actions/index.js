import { actionTypes } from './actionTypes'

export const actions = {
    setVisibilityFilter: visibilityFilter => ({
        type: actionTypes.SET_VISIBILITY_FILTER,
        visibilityFilter: visibilityFilter
    }),
    setTodos: todos => ({
        type: actionTypes.SET_TODOS,
        todos
    })
}