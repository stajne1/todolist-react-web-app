import React from 'react';
import { connect } from 'react-redux';
import { db } from '../firebase';

import getVisibleTodos from '../helpers/get-visible-todos';

import {
    ListItem, List, ListItemIcon, Checkbox, ListItemText,
    ListItemSecondaryAction, IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        'overflow-y': 'auto',
        'flex-grow': '5'
    },
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));

const VisibleTodoList = props => {
    const classes = useStyles();

    const toggleTodo = (todoID, completed) => {
        db.collection('todos')
        .doc(todoID)
        .set({
            completed: !completed
        }, { merge: true });
    }

    const deleteTodo = todoID => {
        db.collection('todos')
        .doc(todoID).delete();
    }

    return (
        <List className={classes.list}>
            {props.todos.length
                ? props.todos.map(todo => (
                    <ListItem
                        key={todo.id} dense button
                        onClick={() => toggleTodo(todo.id, todo.data().completed)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={todo.data().completed}
                                color="primary"
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': 'todo-' + todo.id }}
                            />
                        </ListItemIcon>
                        <ListItemText id={'todo-' + todo.id} primary={todo.data().text} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))
                : <p className={classes.root}>NO TODOS IN THE LIST</p>}
        </List>
    );

}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

export default connect(mapStateToProps)(VisibleTodoList);