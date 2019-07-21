import React from 'react';
const ListItem = props => (
    <li 
        className={props.todo.completed ? 'completed' : null}
        onClick={() => props.onClick(props.todo.id)}>
        {props.todo.text}
    </li>
);
export default ListItem;