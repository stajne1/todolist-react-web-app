import React from 'react';
const Filterlink = props => (
    <span 
        className={!props.isSelected ? 'active': null}
        onClick={props.onClick}
    >
        {props.filterText}
    </span>
);
export default Filterlink;