import React, { useState } from 'react';
import { connect } from 'react-redux';

import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { db } from '../firebase';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    boxPadding: {
        padding: '10px'
    },
    inputWidth: {
        width: '69%'
    },
    button: {
        width: '30%',
        padding: '15px 21px',
        'margin-left': '1%'
}
}));

const AddTodo = props => {
    const [todoText, setText] = useState('');
    const classes = useStyles();

    const addTodo = () => {
        db.collection('todos').add({
            id: props.nextID,
            text: todoText,
            completed: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setText('');
    }

    return (
        <Box className={classes.boxPadding}>
            <TextField
                id="outlined-search"
                label="Enter Text"
                type="search"
                variant="outlined"
                className={classes.inputWidth}
                onChange={e => setText(e.target.value)}
                value={todoText} />
            <Button
                onClick={addTodo}
                disabled={!todoText}
                size="large"
                color="primary"
                variant="contained"
                className={classes.button}>
                Add Todo
        </Button>
        </Box>
    );
}

const mapStateToProps = state => {
    return {
        nextID: state.todos.length + 1
    }
}

export default connect(mapStateToProps)(AddTodo);