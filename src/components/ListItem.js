import React from 'react';
const ListItem = props => (
    <li>
        <span
            className={props.todo.completed ? 'completed text' : 'text'}
            onClick={() => props.toggleTodo(props.todo.id)}>
            {props.todo.text}
        </span>
        <span
            className='delete'
            onClick={() => props.deleteTodo(props.todo.id)}>
            X
        </span>
    </li>
);
export default ListItem;