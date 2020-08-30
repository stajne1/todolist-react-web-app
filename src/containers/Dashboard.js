import React, { useEffect, Fragment, useContext } from 'react';
import { connect } from 'react-redux';
import { Divider } from '@material-ui/core';
import { actions } from '../reducer/actions';

import Header from './Header';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import VisibilityFilter from './VisibilityFilter';
import { db } from '../firebase';
import { userContext } from '../userProvider';

const Dashboard = props => {
    const user = useContext(userContext);
    useEffect(() => {
        db.collection('todos')
            .where('createdBy', '==', user.email)
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapShot => {
                const todos = [];
                snapShot.forEach(doc => {
                    todos.push(doc);
                });
                console.log(todos);
                props.setTodos(todos);
            });
    }, []);

    return (
        <Fragment>
            <Header />
            <AddTodo />
            <Divider />
            <VisibleTodoList />
            <Divider />
            <VisibilityFilter />
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setTodos: todos => dispatch(actions.setTodos(todos))
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);