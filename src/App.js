import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Divider, AppBar, Toolbar, Typography } from '@material-ui/core';
import { actions } from './reducer/actions';

import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import VisibilityFilter from './containers/VisibilityFilter';
import { db } from './firebase';

import './App.scss';

function App(props) {
    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapShot => {
            const todos = [];
            snapShot.forEach(doc => {
                todos.push(doc);
            });
            props.setTodos(todos);
        });
    }, []);

    return (
        <div className="app">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        TODOS
                    </Typography>
                </Toolbar>
            </AppBar>
            <AddTodo />
            <Divider />
            <VisibleTodoList />
            <Divider />
            <VisibilityFilter />
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setTodos: todos => dispatch(actions.setTodos(todos))
    }
}

export default connect(null, mapDispatchToProps)(App);
