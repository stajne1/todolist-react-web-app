import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../reducer/actions';
import getVisibleTodos from '../helpers/get-visible-todos';
import ListItem from '../components/ListItem';

class VisibleTodoList extends Component {
    render(){
        return(
            <ul className='todo-list'>
            {this.props.todos.map(todo => (
                <ListItem 
                    key={todo.id}
                    todo={todo}
                    onClick={this.props.toggleTodo}
                />
            ))}
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
        toggleTodo: id => dispatch(actions.toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);