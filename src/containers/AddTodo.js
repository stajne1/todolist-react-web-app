import React, { useState, useContext } from 'react';

import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { db } from '../firebase';
import firebase from 'firebase';
import { userContext } from '../userProvider';

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
    const user = useContext(userContext);

    const addTodo = () => {
        db.collection('todos').add({
            createdBy: user.email,
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
                Add
        </Button>
        </Box>
    );
}

export default AddTodo;