import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../reducer/actions';
import getVisibleTodos from '../helpers/get-visible-todos';
import ListItem from '../components/ListItem';

class VisibleTodoList extends Component {
    render(){
        return(
            <ul className='todo-list'>
            {this.props.todos.length 
            ? this.props.todos.map(todo => (
                <ListItem 
                    key={todo.id}
                    todo={todo}
                    toggleTodo={this.props.toggleTodo}
                    deleteTodo={this.props.deleteTodo}
                />
            ))
            : <p>NO TODOS IN THE LIST</p>}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(actions.toggleTodo(id)),
        deleteTodo: id => dispatch(actions.deleteTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);